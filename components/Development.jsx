import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

import { urlFor } from '../lib/client'

const Development = ({development, reverse}) => {
    return (
        <>
        <div id={development.name} className={`flex w-full ${(reverse ? "flex-row-reverse" : "")}`}>

            <div className="image-container object-cover overflow-hidden w-1/2 h-auto relative p-5">
            {/* <Image 
                src={urlFor(development.image)}  
                alt={development.name} 
                placeholder='blur'
                blurDataURL={urlFor(development.image)}
                width={800} 
                height={420} 
                layout='responsive' 
                className="object-cover rounded-md" /> */}
                {/* <img src={urlFor(development.image)} alt="headphones" className="object-cover rounded-md" /> */}
            </div>

            <div className="development-info w-1/2 p-16">
                <div className='h-full flex flex-col justify-evenly'>
                    <div className='content'>
                        <h2 className='text-3xl font-bold mb-5'>{development.name}</h2>
                        <p className='mb-2 text-sm text-gray-400'>{development.details}</p>
                        <div className='py-4 text-gray-500 flex items-center'>
                            <div className='mr-8 flex flex-row items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                {development.location}
                            </div>
                            <div className='flex flex-row items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                {development.minbedrooms} - {development.maxbedrooms} 
                            </div>
                        </div>
                    </div>
                    <Link href={`/development/${development.slug.current}`}>
                        <div className='flex justify-between bg-teal-600 text-white rounded w-52 py-2 px-4 item-center hover:bg-teal-600/70 hover:cursor-pointer'>
                            View Development
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-1"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
        </>
    )
}


export default Development