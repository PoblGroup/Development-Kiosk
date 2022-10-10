import Image from 'next/image'
import Gallery from '../components/Gallery'
import Navigation from '../components/Navigation'

const gwynfaen = () => {

    return (
        <div className=''>

            <Navigation />

            {/* Hero */}
            <section className="flex flex-col w-full h-auto px-16 justify-center items-center">
                {/* Hero Image */}
                <div className="image-container object-cover overflow-hidden w-full h-auto relative px-16 py-10">
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
                </div>
                {/* Page Intro */}
                <div className="flex flex-col w-full justify-center items-center my-10">
                    <h2 className='text-3xl font-bold'>Gwynfaen</h2>
                    <p className='p-8 text-center items-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt tristique enim, quis suscipit vel in est suspendisse. <br/>Scelerisque turpis diam nulla dolor, vitae nunc lobortis.</p>
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
                    </div>
                    <div className='w-1/2 h-full flex flex-col justify-center items-left'>
                        <p className='text-2xl'>Animation</p>
                        <p className='py-10 w-5/6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed blandit libero volutpat.</p>
                        <a 
                            href=""
                            className='flex justify-start bg-teal-600 text-white rounded w-40 py-2 px-4 item-center hover:bg-teal-600/70'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                            </svg> Play Video
                        </a>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section id="Gallery" className="flex flex-col w-full h-auto py-16 justify-center items-center">
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

export default gwynfaen