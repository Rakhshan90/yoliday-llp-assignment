import Navbar from "@/components/Navbar";
import PortfolioNavbar from "@/components/PortfolioNavbar";
import Query from "@/components/Query";
import { Card } from "@/components/ui/card";


export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex-1 bg-gray-50">
            <Navbar />
            <div className="m-8">
                <Card className="p-4 rounded-xl">
                    <div className="text-4xl font-semibold text-black mb-10">Portfolio</div>
                    <div className="w-full flex justify-between items-center mb-10 gap-40">
                        <PortfolioNavbar />
                        <Query />
                    </div>
                    {children}
                </Card>
            </div>
        </div>
    );
}
