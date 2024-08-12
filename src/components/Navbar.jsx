import React from 'react'
import logo from '../assets/logo.jpeg'

const Navbar = () => {
  return (
    <div className="h-[80px] flex items-center  border-b border-gray-400">
      <img src={logo} alt="" className="h-[50px] md:h-[60px] w-[50px] md:w-[60px] ml-10 md:ml-16" />
      <div className='flex flex-col uppercase ml-5'>
        <h1 className='text-2xl md:text-3xl font-bold'>Live</h1>
        <h1 className='text-2xl font-semibold'>Stream</h1>
      </div>
    </div>
  )
}

export default Navbar
