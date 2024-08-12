import React from 'react'
import logo from '../assets/logo.jpeg'
import liveStream from '../assets/live-stream.png'

const Navbar = () => {
  return (
    <div className="h-[80px] flex items-center  border-b border-gray-700">
      <img src={logo} alt="" className="h-[50px] md:h-[60px] w-[50px] md:w-[60px] ml-5 md:ml-16" />
      <div className='flex flex-col uppercase ml-5 text-white'>
        <h1 className='text-2xl md:text-3xl font-bold'>Live</h1>
        <h1 className='text-2xl font-semibold'>Stream</h1>
      </div>
      {/* <img src={liveStream} alt="" className='w-[100%] h-[80px]' /> */}
    </div>
  )
}

export default Navbar
