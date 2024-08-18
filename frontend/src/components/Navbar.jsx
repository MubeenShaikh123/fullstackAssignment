import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full bg-[#000000] text-white rounded-tl-xl rounded-tr-rounded-tl-xl py-3 flex flex-row justify-around'>
        Abstract | Help Center
        <input type="text" className='bg-[#1A1A1A] border rounded-md text-white placeholder:text-white p-1 placeholder:text-center' placeholder='Submit a request' />
    </nav>
  )
}

export default Navbar
