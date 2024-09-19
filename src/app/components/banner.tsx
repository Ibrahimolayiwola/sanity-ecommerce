import React from 'react'
import Image from 'next/image'
import bannerImg from '../../assets/banner/banner_3.jpg'

const banner = () => {
  return (
    <div className='relative'>
      {/* <Image src={bannerImg} alt='banner-image' className='h-[450px]'/>
      <div>
      <p className='uppercase text-red-600'>Trending</p>
      <h1 className='text-white text-3xl font-bold'>Explore the latest gadgets</h1>
      <p className='text-slate-200'>From Smart Devices to Must-Have Accessories, Discover Cutting-Edge Tech at Unbeatable Prices.</p>
      <button>Shop now</button> 
      </div>
      <div></div> */}
      <div 
      // style={{
      //   backgroundImage: `urls('../../assets/banner/banner_2.jpg')`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center"
      // }}
      className="h-[450px] bg-[url('../src/assets/banner/banner_5.jpg')] bg-no-repeat bg-cover w-full py-40 px-20 space-y-4"><div>
      <p className='uppercase text-red-600 text-xl font-bold mb-2'>Trending</p>
      <h1 className='text-slate-800 text-4xl font-bold mb-1 capitalize'>Explore the latest gadgets</h1>
      <p className='text-slate-600 mb-2'>From Smart Devices to Must-Have Accessories.</p>
      <button className='bg-red-600 text-slate-100 uppercase font-medium px-6 py-3 my-2'>Shop now</button> 
      </div></div>
    </div>
  )
}

export default banner
