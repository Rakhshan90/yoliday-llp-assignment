import React from 'react'
import { Card } from './ui/card'
import Image, { StaticImageData } from 'next/image'
import project1 from '@/assets/project1.jpg'
import { Button } from './ui/button'
import { projects } from '@/lib/data'

interface Project {
    image: StaticImageData,
    title: string,
    content: string,
    text1: string,
    text2: string
}

const Projects = ({ projects }: { projects: Project[] }) => {
    return (
        <div className='flex flex-col gap-4 w-full xl:w-10/12 overflow-y-scroll h-full'>
            {projects?.map((item, index) => (
                <Card key={index} className='rounded-xl shadow-xl w-full'>
                    <div className="w-full flex">
                        <Image src={item?.image} alt={item?.title} className='rounded-l-xl w-32 md:w-48 lg:w-1/3' />
                        <div className="m-2 xl:m-4 flex flex-col gap-2 xl:gap-6">
                            <div className="flex flex-col gap-2">
                                <div className="text-md lg:text-lg text-black font-semibold">
                                    {item?.title?.slice(0, 20) + '...'}
                                </div>
                                <div className="hidden sm:block text-gray-500 text-sm lg:text-md">
                                    {item?.content?.slice(0, 150) + '...'}
                                </div>
                            </div>
                            <div className="w-56 sm:w-64 md:w-full flex justify-between items-center">
                                <div className="flex flex-col">
                                    <div className="text-sm lg:text-md text-black uppercase">
                                        {item?.text1}
                                    </div>
                                    <div className="text-sm lg:text-md text-gray-500">
                                        {item?.text2}
                                    </div>
                                </div>
                                <Button className='hidden lg:block bg-gradient-to-b from-orange-400 to-yellow-300'>
                                    Add to Cart
                                </Button>
                                <Button className='lg:hidden bg-gradient-to-b from-orange-400 to-yellow-300'>
                                    A
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    )
}

export default Projects