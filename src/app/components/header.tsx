import React from 'react'
import faviconLogo from '../../assets/logo/logo.png'
import Image from 'next/image'

const header = () => {
  return (
    <div className='sticky left-0 top-0 bg-white shadow-2xl h-20 w-full z-20 px-4'>
      <div className='flex justify-between max-w-6xl mx-auto items-center'>
        <div>
          <Image className='w-36 h-16' src={faviconLogo} alt='logo'/>
        </div>
        <div className='flex justify-between gap-20 items-center'>
          <ul className='flex justify-around gap-20 items-center text-red-600 font-medium'>
              <li className='border-b border-b-transparent hover:border-b-red-600 pb-2'>Home</li>
              <li className='border-b border-b-transparent hover:border-b-red-600 pb-2'>Contact Us</li>
              <li className='border-b border-b-transparent hover:border-b-red-600 pb-2'>Collections</li>
              <li className='border-b border-b-transparent hover:border-b-red-600 pb-2'>Home</li>
          </ul>
          <button className='uppercase  bg-red-600 text-slate-100 font-medium h-12 w-28 text-sm'>
              Shop now
          </button>
        </div>
      </div>
    </div>
  )
}

export default header
