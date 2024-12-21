'use client'

import icon8 from '@/assets/icon8.png'
import Image from 'next/image'
import { Input } from './ui/input'

const Query = ({inputHandler}: {inputHandler: (value: string)=> void}) => {

  return (
    <div className='w-full'>
        <div className="flex gap-6">
            <div className="hidden xl:flex gap-2 items-center">
                <Image src={icon8} alt='filter' className='w-6'/>
                <div className='text-black'>Filter</div>
            </div>

            <Input placeholder='Search a project by title' 
            onChange={(e)=> inputHandler(e.target.value)} />
        </div>
    </div>
  )
}

export default Query