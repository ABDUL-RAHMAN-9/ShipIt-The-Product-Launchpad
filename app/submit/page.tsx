import ProductSubmitForm from "@/components/products/product-submit-form";

export default function SubmitPage() {
    return (
        <section className="py-16 lg:py-24 bg-background">
            <div className="wrapper">
                <div className="max-w-3xl mx-auto">
                    <ProductSubmitForm />
                </div>
            </div>
        </section>
    )
}