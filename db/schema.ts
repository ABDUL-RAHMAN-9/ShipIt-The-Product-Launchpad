export * from "./auth-schema";
import {
    index,
    integer,
    json,
    pgTable,
    serial,
    text,
    timestamp,
    uniqueIndex,
    varchar,
} from "drizzle-orm/pg-core";

export const products = pgTable(
    "products",
    {
        id: serial("id").primaryKey(),

        name: varchar("name", { length: 120 }).notNull(),
        slug: varchar("slug", { length: 140 }).notNull(),
        tagline: varchar("tagline", { length: 200 }),
        description: text("description"),
        websiteUrl: text("website_url"),
        tags: json("tags").$type<string[]>(), // e.g. ["AI", "Productivity"]
        voteCount: integer("vote_count").notNull().default(0),
        createAt: timestamp("create_at", { withTimezone: true }).defaultNow(),
        approvedAt: timestamp("approved_at", { withTimezone: true }),
        status: varchar("status", { length: 20 }).default("pending"), // pending | approved | rejected
        submittedBy: varchar("submitted_by", { length: 120 }).default(
            "anonymous",
        ),
        userId: varchar("user_id", { length: 255 }),
        // Reserved for future teams/workspaces
        organizationId: varchar("organization_id", { length: 255 }),
    },
    (table) => ({
        slugIdx: uniqueIndex("products_slug_idx").on(table.slug),
        statusIdx: index("products_status_idx").on(table.status),
        organizationidx: index("products_organizaiton_idx").on(
            table.organizationId,
        ),
    }),
);

export const productVotes = pgTable(
    "product_votes",
    {
        id: serial("id").primaryKey(),

        productId: integer("product_id")
            .notNull()
            .references(() => products.id, {
                onDelete: "cascade",
            }),

        userId: text("user_id").notNull(),

        createdAt: timestamp("created_at").defaultNow().notNull(),
    },
    (table) => ({
        uniqueVoteIdx: uniqueIndex("product_votes_unique_idx").on(
            table.productId,
            table.userId,
        ),
    }),
);
