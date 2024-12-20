import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex-1 bg-gray-50">
      <Navbar />
      <div className="m-8">
        <Card className="p-4 rounded-xl">
          Dashboard page
        </Card>
      </div>
    </div>
  );
}
