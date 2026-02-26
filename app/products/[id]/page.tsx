export default async function Product({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    return (
        <div>
            <h1>Product {id}</h1>
        </div>
    )

}