import { portfolioNavbar } from '@/lib/data'
import Link from 'next/link'
import React from 'react'

const PortfolioNavbar = () => {
    return (
        <div className='w-full flex gap-12'>
            {portfolioNavbar?.map((item, index) => (
                <div className='group'>
                    <Link href={item?.path} key={index}
                    className='group-hover:text-orange-700 font-bold'>
                        {item?.name}
                    </Link>
                    <div className='border-b-2 border-gray-300 pb-2
                      group-hover:border-orange-700'>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PortfolioNavbar