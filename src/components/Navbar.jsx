import React from 'react'
import logo from '../assets/icons/logo.png'
import search from '../assets/icons/search.png'
import user from '../assets/icons/user.png'
import cart from '../assets/icons/cart.png'



const Navbar = () => {
  return (
    <div className='w-[100%] h-[12vh] flex'>
        <div className='w-[25%] h-[100%] flex items-center justify-center'>
            <img src={logo} className='h-[70%]' alt="" />
        </div>
        <div className='w-[50%] h-[100%] flex items-center justify-center'>
            <div className='w-[100%] h-[40px] flex bg-[#F0F5FF] rounded-sm'>
                <div className='w-[50px] h-[100%] flex justify-center items-center'>
                    <img src={search} className='h-[20px]' alt="" />
                </div>
                <input type="text" className='w-[100%] outline-none'/>
            </div>
        </div>
        <div className='w-[25%%] h-[100%] flex gap-2 items-center px-[15px] justify-end'>
            <div className='px-[20px] h-[40px] rounded-sm flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all duration-500 cursor-pointer'>
                <img src={user} className='h-[26px]' alt="" />
                <h1 className='text-[1.1rem]'>Login</h1>
            </div>
            <div className='px-[20px] h-[40px] rounded-sm flex items-center gap-2  hover:bg-blue-600 hover:text-white transition-all duration-500 cursor-pointer'>
                <img src={cart} className='h-[26px]' alt="" />
                <h1 className='text-[1.1rem]'>Cart</h1>
            </div>
        </div>

    </div>
  )
}

export default Navbar
