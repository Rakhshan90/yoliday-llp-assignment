import { portfolioNavbar } from '@/lib/data'
import Link from 'next/link'
import React from 'react'

const PortfolioNavbar = () => {
    return (
        <div className='w-full flex gap-12 justify-between xl:justify-start border-b-2 border-gray-300 pb-2'>
            {portfolioNavbar?.map((item, index) => (
                <Link href={item?.path} key={index}
                    className='hover:text-orange-700 font-medium text-xs'>
                    {item?.name}
                </Link>
            ))}
        </div>
    )
}

export default PortfolioNavbar