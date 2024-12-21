'use client';

import React, { useEffect, useState } from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { baseURL } from '@/lib/baseURL';
import axios from 'axios';

interface Project {
    image: string,
    title: string,
    content: string,
    text1: string,
    text2: string
}

const Projects = ({ queryInput }: { queryInput: string }) => {

    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`${baseURL}/projects`, {
                    params: { title: queryInput },
                });
                if (!response.data) {
                    throw new Error('Failed to fetch projects');
                }

                const formattedProjects = response.data.map((item: any) => ({
                    image: item.image,
                    title: item.title,
                    content: item.content,
                    text1: item.info1,
                    text2: item.info2,
                }));

                setProjects(formattedProjects);
            } catch (err: any) {
                setError(err.message || 'An unexpected error occurred');
            } finally {
                setIsLoading(false);
            }
        };
        fetchProjects();
        console.log(queryInput);
    }, [queryInput]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Unable to get projects</div>;
    }

    return (
        <div className='flex flex-col gap-4 w-full xl:w-10/12 overflow-y-scroll h-full'>
            {projects?.map((item, index) => (
                <Card key={index} className='rounded-xl shadow-xl w-full'>
                    <div className="w-full flex">
                        <img src={item?.image} alt={item?.title}
                            className='rounded-l-xl w-32 md:w-48 lg:w-1/3' />
                        <div className="flex-1 m-2 xl:m-4 flex flex-col gap-2 xl:gap-6">
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
                                        {item?.text1?.slice(0, 20) + '...'}
                                    </div>
                                    <div className="text-sm lg:text-md text-gray-500">
                                        {item?.text2?.slice(0, 20) + '...'}
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