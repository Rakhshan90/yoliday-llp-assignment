import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import icon10 from '@/assets/icon10.png'
import icon11 from '@/assets/icon11.png'
import Image from "next/image";


export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex-1 bg-gray-50">
            <Navbar />
            <div className="m-0 lg:m-8">
                <Card className="p-4 rounded-xl">
                    <div className="w-full flex justify-between items-center">
                        <div className="text-lg lg:text-2xl xl:text-4xl font-semibold 
                    text-black mb-4 xl:mb-10">
                            Portfolio
                        </div>
                        <div className="flex gap-4 lg:hidden">
                            <Image src={icon10} alt="orders" />
                            <Image src={icon11} alt="bell" />
                        </div>
                    </div>
                    {/* <div className="w-full flex flex-col xl:flex-row justify-between items-center mb-10 gap-4 xl:gap-40">
                        <Query />
                        <PortfolioNavbar />
                    </div> */}
                    {children}
                </Card>
            </div>
        </div>
    );
}
