"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { mobileNav } from "@/lib/data"

export function MoboNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white lg:hidden">
      <div className="grid h-16 grid-cols-4">
        {mobileNav.map((item) => {
          const IconComponent = item.icon
          const isActive = pathname === item.path
          
          return (
            <Link
              key={item.name}
              href={item.path}
              className={cn(
                "flex flex-col items-center justify-center gap-1 text-xs",
                isActive 
                  ? "text-orange-700" 
                  : "hover:text-orange-700"
              )}
            >
              <IconComponent className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

