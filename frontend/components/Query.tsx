import React from 'react'
import icon8 from '@/assets/icon8.png'
import icon9 from '@/assets/icon9.png'
import Image from 'next/image'
import { Input } from './ui/input'

const Query = () => {
  return (
    <div className='w-full'>
        <div className="flex gap-6">
            <div className="flex gap-2 items-center">
                <Image src={icon8} alt='filter' className='w-6'/>
                <div className='text-black'>Filter</div>
            </div>

            <Input placeholder='Search a Project' />
        </div>
    </div>
  )
}

export default Query