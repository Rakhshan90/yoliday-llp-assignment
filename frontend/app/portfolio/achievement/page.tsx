import PortfolioNavbar from '@/components/PortfolioNavbar'
import React from 'react'

const page = () => {
  return (
    <div className="w-full flex flex-col xl:flex-row justify-between 
      items-center mb-10 gap-4 xl:gap-40 mt-4 px-2">
      <PortfolioNavbar />
    </div>
  )
}

export default page