import React from 'react'
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import Projects from '@/components/Projects';
import { projects } from '@/lib/data';

const page = () => {
  return (
    <div className="flex-1 overflow-y-hidden h-80">
        <Projects projects={projects} />
    </div>
  )
}

export default page