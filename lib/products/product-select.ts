import { db } from "@/db";
import { products, productVotes } from "@/db/schema";
import {
    and,
    desc,
    eq,
    gte,
    getTableColumns,
    ilike,
    isNull,
    isNotNull,
    lt,
    or,
    sql,
} from "drizzle-orm";
import { connection } from "next/server";

export const EXPLORE_PAGE_SIZE = 6;

type UserId = string | null | undefined;

function getProductSelection(userId: UserId) {
    return {
        ...getTableColumns(products),

        hasVoted: userId
            ? sql<boolean>`
                  CASE
                      WHEN ${productVotes.id} IS NOT NULL
                      THEN true
                      ELSE false
                  END
              `
            : sql<boolean>`false`,
    };
}

function getProductVoteJoin(userId: UserId) {
    if (!userId) {
        return sql`false`;
    }

    return and(
        eq(productVotes.productId, products.id),
        eq(productVotes.userId, userId),
    );
}

export async function getFeaturedProducts(userId?: string | null) {
    const productsData = await db
        .select(getProductSelection(userId))
        .from(products)
        .leftJoin(productVotes, getProductVoteJoin(userId))
        .where(eq(products.status, "approved"))
        .orderBy(desc(products.voteCount))
        .limit(6);

    return productsData;
}

export async function getRecentProducts(userId?: string | null) {
    await connection();

    const oneWeekAgo = new Date();

    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const recentProducts = await db
        .select(getProductSelection(userId))
        .from(products)
        .leftJoin(productVotes, getProductVoteJoin(userId))
        .where(
            and(
                eq(products.status, "approved"),
                gte(products.createAt, oneWeekAgo),
            ),
        )
        .orderBy(desc(products.createAt))
        .limit(3);

    return recentProducts;
}

export async function getProductBySlug(slug: string) {
    const product = await db
        .select()
        .from(products)
        .where(and(eq(products.slug, slug), eq(products.status, "approved")))
        .limit(1);

    return product[0] ?? null;
}

export async function getAllApprovedProducts() {
    return await db
        .select()
        .from(products)
        .where(eq(products.status, "approved"))
        .orderBy(desc(products.voteCount));
}

export async function getAllProducts() {
    return await db.select().from(products).orderBy(desc(products.voteCount));
}

export async function hasUserVoted(productId: number, userId: string) {
    const vote = await db
        .select()
        .from(productVotes)
        .where(
            and(
                eq(productVotes.productId, productId),
                eq(productVotes.userId, userId),
            ),
        )
        .limit(1);

    return vote.length > 0;
}

type ExploreSort = "trending" | "latest";

type ExploreCursor =
    | {
          sortBy: "trending";
          voteCount: number;
          id: number;
      }
    | {
          sortBy: "latest";
          createAt: string | null;
          id: number;
      };

function encodeCursor(cursor: ExploreCursor): string {
    return Buffer.from(JSON.stringify(cursor)).toString("base64url");
}

function decodeCursor(cursor: string): ExploreCursor | null {
    try {
        const decoded: unknown = JSON.parse(
            Buffer.from(cursor, "base64url").toString("utf8"),
        );

        if (
            !decoded ||
            typeof decoded !== "object" ||
            !("sortBy" in decoded) ||
            !("id" in decoded) ||
            typeof decoded.id !== "number" ||
            (decoded.sortBy !== "trending" && decoded.sortBy !== "latest")
        ) {
            return null;
        }

        if (
            decoded.sortBy === "trending" &&
            "voteCount" in decoded &&
            typeof decoded.voteCount === "number"
        ) {
            return {
                sortBy: "trending",
                voteCount: decoded.voteCount,
                id: decoded.id,
            };
        }

        if (
            decoded.sortBy === "latest" &&
            "createAt" in decoded &&
            (typeof decoded.createAt === "string" || decoded.createAt === null)
        ) {
            return {
                sortBy: "latest",
                createAt: decoded.createAt,
                id: decoded.id,
            };
        }

        return null;
    } catch {
        return null;
    }
}

export async function getApprovedProductsPage({
    limit,
    cursor,
    search,
    sortBy,
    userId,
}: {
    limit: number;
    cursor?: string | null;
    search: string;
    sortBy: ExploreSort;
    userId?: string | null;
}) {
    const query = search.trim();

    const decodedCursor = cursor ? decodeCursor(cursor) : null;

    const searchCondition = query
        ? or(
              ilike(products.name, `%${query}%`),
              ilike(products.tagline, `%${query}%`),
              sql`${products.tags}::text ilike ${`%${query}%`}`,
          )
        : undefined;

    let cursorCondition;

    if (sortBy === "trending" && decodedCursor?.sortBy === "trending") {
        cursorCondition = or(
            lt(products.voteCount, decodedCursor.voteCount),
            and(
                eq(products.voteCount, decodedCursor.voteCount),
                lt(products.id, decodedCursor.id),
            ),
        );
    }

    if (sortBy === "latest" && decodedCursor?.sortBy === "latest") {
        if (decodedCursor.createAt === null) {
            cursorCondition = or(
                isNotNull(products.createAt),
                and(
                    isNull(products.createAt),
                    lt(products.id, decodedCursor.id),
                ),
            );
        } else {
            const cursorDate = new Date(decodedCursor.createAt);

            if (Number.isNaN(cursorDate.getTime())) {
                throw new Error("Invalid pagination cursor.");
            }

            cursorCondition = and(
                isNotNull(products.createAt),
                or(
                    lt(products.createAt, cursorDate),
                    and(
                        eq(products.createAt, cursorDate),
                        lt(products.id, decodedCursor.id),
                    ),
                ),
            );
        }
    }

    const whereClause = and(
        eq(products.status, "approved"),
        searchCondition,
        cursorCondition,
    );

    const productsQuery = userId
        ? db
              .select({
                  ...getTableColumns(products),

                  hasVoted: sql<boolean>`
                          CASE
                              WHEN ${productVotes.id} IS NOT NULL
                              THEN true
                              ELSE false
                          END
                      `,
              })
              .from(products)
              .leftJoin(
                  productVotes,
                  and(
                      eq(productVotes.productId, products.id),
                      eq(productVotes.userId, userId),
                  ),
              )
              .where(whereClause)
        : db
              .select({
                  ...getTableColumns(products),

                  hasVoted: sql<boolean>`false`,
              })
              .from(products)
              .where(whereClause);

    const productsData = await productsQuery
        .orderBy(
            sortBy === "trending"
                ? desc(products.voteCount)
                : desc(products.createAt),
            desc(products.id),
        )
        .limit(limit + 1);

    const hasMore = productsData.length > limit;

    const slicedProducts = hasMore
        ? productsData.slice(0, limit)
        : productsData;

    let nextCursor: string | null = null;

    if (hasMore && slicedProducts.length > 0) {
        const lastProduct = slicedProducts[slicedProducts.length - 1];

        if (sortBy === "trending") {
            nextCursor = encodeCursor({
                sortBy: "trending",
                voteCount: lastProduct.voteCount,
                id: lastProduct.id,
            });
        } else {
            nextCursor = encodeCursor({
                sortBy: "latest",
                createAt: lastProduct.createAt?.toISOString() ?? null,
                id: lastProduct.id,
            });
        }
    }

    return {
        products: slicedProducts,
        hasMore,
        nextCursor,
    };
}
