import React from 'react'
import icon5 from '@/assets/icon5.png'
import icon6 from '@/assets/icon6.png'
import icon7 from '@/assets/icon7.png'
import Image from 'next/image'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'

const Navbar = () => {
  return (
    <div className='bg-white border-b border-gray-300 w-full py-4 pr-8 hidden lg:flex justify-end'>
      <div className="flex gap-6 items-center">
        <Image src={icon6} alt='bell' />
        <div className="flex gap-2 items-center">
          <Image src={icon5} alt='profile-photo' />
          <div className="flex flex-col">
            <div className="flex gap-4 items-center">
              <div className='text-sm font-bold'>Emily</div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Image src={icon7} alt='dropdown' />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

            </div>
            <div className="text-xs text-gray-400">Manager</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar