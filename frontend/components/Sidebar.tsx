import React from 'react'
import { sidebar } from '@/lib/data'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import Link from 'next/link'

const Sidebar = () => {
    return (
        <div className='py-8 pl-8 pr-20 bg-orange-700 h-screen'>
            <div className='flex gap-2 items-center justify-start mb-40'>
                <Image src={logo} alt='logo' />
                <div className='uppercase text-white'>logo</div>
            </div>

            <div className="flex flex-col gap-4">
                {sidebar?.map((item, index) => (
                    <Link href={item?.path} key={index} className="flex gap-2 items-center justify-start">
                        <Image src={item?.icon} alt={item?.name} />
                        <div className="text-white">{item?.name}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar