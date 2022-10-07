import Image from 'next/image'
import React, { useState } from 'react'

import { urlFor } from '../lib/client'

const Gallery = ({gallery}) => {
  const [modal, setModal] = useState(false)
  const [tempSrc, setTempSrc] = useState(null)

  const GetImage = (image) => { 
      console.log(image)
      setTempSrc(image)
      setModal(true)
  }
  return (
    <>
      <div className={modal ? "modal open" : "modal"}>
        {/* <Image
            src={tempSrc} 
            alt={tempSrc} 
            placeholder='blur'
            blurDataURL={tempSrc}
            // width={150} 
            // height={150} 
            layout='fill' 
            className="object-cover" 
        /> */}
        {tempSrc && (
          <>
            <img src={urlFor(tempSrc).url()} alt="test" className="object-cover" />
          </>
        )}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1.5" stroke="currentColor" onClick={() => setModal(false)}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <div className="gallery grid gap-6 grid-cols-4 lg:grid-cols-4">
          {gallery?.map((item, i) => (
              <div key={i} className="w-48 h-48 rounded-md">
                  <img src={urlFor(item)} alt="test" className="object-cover rounded-md w-full h-full" onClick={() => GetImage(item)} />
                  {/* <Image
                      src={item.imagePath} 
                      alt={item.title} 
                      placeholder='blur'
                      blurDataURL={item.imagePath}
                      width={150} 
                      height={150} 
                      layout='responsive' 
                      className="object-cover rounded-[5px]" 
                      
                  /> */}
              </div>
          ))}
      </div> 
      
    </>
  )
}

export default Gallery