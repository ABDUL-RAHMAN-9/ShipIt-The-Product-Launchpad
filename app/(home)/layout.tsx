import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="relative z-10 flex-1">{children}</main>
            <Footer />
        </div>
    );
}
