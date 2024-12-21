import React from 'react'
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";

const page = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <Navbar />
      <div className="m-0 lg:m-8">
        <Card className="p-4 rounded-xl">
          Profile page
        </Card>
      </div>
    </div>
  )
}

export default page