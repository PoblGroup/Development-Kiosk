import React, { useState } from 'react'
import { Navigation, Gallery } from '../../components'

import { client, urlFor } from '../../lib/client'

const DevelopmentDetails = ({ development }) => {
    const [videoPlaying, setVideoPlaying] = useState(false)
    const { image, name, details, gallery } = development

    const playVideo = (e) => {
        e.preventDefault()
        setVideoPlaying(true)
        const myVideo = document.getElementById('PromoVideo')
        myVideo.play()
    }

    const pauseVideo = (e) => {
        e.preventDefault()
        setVideoPlaying(false)
        const myVideo = document.getElementById('PromoVideo')
        myVideo.pause()
    }

    return (
        <div>
            <Navigation />

            {/* Hero */}
            <section className="flex flex-col w-full h-auto px-16 justify-center items-center">
                {/* Hero Image */}
                <div className="image-container">
                    {/* <Image
                        src="/images/gwynfaen/main.jpg" 
                        alt="Development" 
                        placeholder='blur'
                        blurDataURL="/images/gwynfaen/main.jpg"
                        width={600} 
                        height={220} 
                        layout='responsive' 
                        className="object-cover rounded-md" 
                    /> */}
                    <img src={urlFor(image)} alt="headphones" className="object-cover rounded-md w-4/5 m-auto" />
                </div>
                {/* Page Intro */}
                <div className="flex flex-col w-full justify-center items-center my-10">
                    <h2 className='text-3xl font-bold'>{name}</h2>
                    <p className='p-8 text-center items-center'>{details}</p>
                </div>
            </section>

            {/* Animation */}
            <section id="Animation" className="flex flex-col w-full h-screen justify-center items-center bg-gray-100">
                <div className='flex flex-row justify-evenly w-full'>
                    <div className="image-container object-cover overflow-hidden w-5/6 h-auto relative px-16 mb-10">
                        {/* <Image
                            src="/images/gwynfaen/main.jpg" 
                            alt="Development" 
                            placeholder='blur'
                            blurDataURL="/images/gwynfaen/main.jpg"
                            width={400} 
                            height={220} 
                            layout='responsive' 
                            className="object-cover rounded-md" 
                        /> */}
                        <video id="PromoVideo" controls poster="/images/gwynfaen/main.jpg" className='w-full rounded-md'>
                            <source src="../videos/gwynfaen.mp4" />
                        </video>
                    </div>
                    <div className='w-1/2 h-full flex flex-col justify-center items-left'>
                        <p className='text-2xl'>Animation</p>
                        <p className='py-10 w-5/6'>Check out our promotion video here.</p>
                        {videoPlaying ? (
                        <a 
                            href=""
                            onClick={(e) => pauseVideo(e)}
                            className='flex justify-start bg-teal-600 text-white rounded w-40 py-2 px-4 item-center hover:bg-teal-600/70'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                            </svg>
                            Pause Video
                        </a>
                        ) : (
                        <a 
                            href=""
                            onClick={(e) => playVideo(e)}
                            className='flex justify-start bg-teal-600 text-white rounded w-40 py-2 px-4 item-center hover:bg-teal-600/70'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                            </svg>
                            Play Video
                        </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section id="Gallery" className="flex flex-col w-full h-auto py-16 justify-center items-center text-center">
                <p className='text-2xl'>Gallery</p>
                <p className='py-10 w-5/6 text-gray-500'>Browse all the different property types we have to offer at this development.</p>
                <Gallery gallery={gallery} />
            </section>

            {/* Interactive Map */}
            <section id="InteractiveMap" className="flex flex-col w-full h-screen justify-center items-center bg-gray-100 px-16">
                <div className='flex flex-row justify-evenly w-full'>
                    <div className='w-1/2 h-full flex flex-col justify-center'>
                        <p className='text-2xl'>Interactive Map</p>
                        <p className='py-10 w-5/6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed blandit libero volutpat.</p>
                        <a 
                            href=""
                            className='flex justify-start bg-teal-600 text-white rounded w-48 py-2 px-4 item-center hover:bg-teal-600/70'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg> Interact Now!
                        </a>
                    </div>
                    <div className="image-container object-cover overflow-hidden w-5/6 h-auto relative mb-10">
                        {/* <Image
                            src="/streetviewmap.jpg" 
                            alt="Development" 
                            placeholder='blur'
                            blurDataURL="/streetviewmap.jpg"
                            width={400} 
                            height={220} 
                            layout='responsive' 
                            className="object-cover rounded-md" 
                        /> */}
                    </div>
                </div>
            </section>

            {/* Floor Plans */}
            <section className="flex flex-col w-full h-screen bg-teal-500 justify-center items-center">
                <h3>Floor Plans</h3>
            </section>
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "development"] {
        slug {
            current
        }
    }`
    
    const developments = await client.fetch(query)
    const paths = developments.map(development => ({
        params: {
            slug: development.slug.current
        }
    }))

    return {
        paths, 
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "development" && slug.current == '${slug}'][0]`
    const development = await client.fetch(query)
  
    return {
      props: { development }
    }
  }

export default DevelopmentDetails