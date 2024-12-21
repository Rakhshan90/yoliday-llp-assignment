'use client'

import React from 'react'
import { sidebar } from '@/lib/data'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <div className='hidden lg:block py-8 px-1 bg-orange-700 h-screen'>
            <div className='flex gap-2 items-center justify-start mb-40'>
                <Image src={logo} alt='logo' />
                <div className='uppercase text-white'>logo</div>
            </div>

            <div className="flex flex-col gap-4">
                {sidebar?.map((item, index) => {
                    const isActive = pathname === item?.path;
                    return (
                        <Link href={item?.path} key={index} className={cn(
                            "flex gap-2 items-center justify-start py-2 pl-8 pr-24 hover:bg-white hover:bg-opacity-40 hover:rounded-xl",
                            isActive? "bg-white bg-opacity-40 rounded-xl" : ""
                        )}>
                            <Image src={item?.icon} alt={item?.name} />
                            <div className="text-white">{item?.name}</div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar