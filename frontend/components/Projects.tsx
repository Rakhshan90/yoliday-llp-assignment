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
        <div className='flex flex-col gap-4 w-10/12 overflow-y-scroll h-full'>
            {projects?.map((item, index) => (
                <Card key={index} className='rounded-xl shadow-xl w-full'>
                    <div className="w-full flex justify-between">
                        <div className='w-1/3 rounded-l-xl'>
                            <Image src={item?.image} alt={item?.title} className='rounded-xl' />
                        </div>
                        <div className="m-4 flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <div className="text-2xl text-black font-semibold">{item?.title}</div>
                                <div className="max-w-2xl text-gray-500 text-lg">
                                    {item?.content?.slice(0, 100) + '...'}
                                </div>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <div className="flex flex-col">
                                    <div className="text-lg text-black uppercase">{item?.text1}</div>
                                    <div className="text-lg text-gray-500">{item?.text2}</div>
                                </div>

                                <Button className='bg-gradient-to-b from-orange-400 to-yellow-300'>
                                    Add to Cart
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