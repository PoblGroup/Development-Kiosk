import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <section className="flex flex-row justify-between w-full h-16 px-32 sticky top-0 z-10"
    style={{
        background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
    >
        {/* Back Button */}
        <div className="flex flex-row justify-evenly h-full items-center text-black">
            <Link href='/'>
                <div className='hover:cursor-pointer  mr-4 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </div>
            </Link>Back
        </div>
        {/* Nav Items */}
        <div className='flex flex-col justify-center items-center'>
            <ul className='flex justify-evenly'>
                <li className='mr-4 text-black py-2 px-3 rounded hover:cursor-pointer'><a href="#Animation">Animation</a></li>
                <li href="#InteractiveMap" className='mr-4 text-black py-2 px-3 rounded hover:cursor-pointer'><a href="#Gallery">Gallery</a></li>
                <li href="#Gallery" className='mr-4 text-black py-2 px-3 rounded hover:cursor-pointer'><a href="#InteractiveMap">Interactive Map</a></li>
                <li className='mr-4  text-black py-2 px-3 rounded hover:cursor-pointer'>Floor Plans</li>
            </ul>
        </div>
    </section>
  );
}