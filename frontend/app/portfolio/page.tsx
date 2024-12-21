'use client';

import React, { useState } from 'react'
import Projects from '@/components/Projects';
import Query from '@/components/Query';
import PortfolioNavbar from '@/components/PortfolioNavbar';
import useDebounce from '@/hook/useDebounce';

const page = () => {
  const [inputVal, setInputVal] = useState('');
  const changeHandler = (value: string)=>{
    setInputVal(value);
  }

  const debouncedInput = useDebounce(inputVal, 1000);

  return (
    <div className="flex-1 flex flex-col overflow-y-hidden h-[40rem] md:h-96">
      <div className="w-full flex flex-col xl:flex-row justify-between 
      items-center mb-10 gap-4 xl:gap-40 mt-4 px-2">
        <PortfolioNavbar />
        <Query inputHandler={changeHandler} />
      </div>
      <Projects queryInput={debouncedInput} />
    </div>
  )
}

export default page