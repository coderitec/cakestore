"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import {FaCross, FaHamburger,  FaShoppingCart} from 'react-icons/fa'


export default function Bottom() {
    const [hide, setHide] = useState(false)

    function showNav(){
        setHide(!hide)
    }

    const cartVal = 0
  return (
    <nav className='pl-16 bg-fuchsia-500 text-white flex sm:flex-row flex-col justify-between items-center'>
        <div className='flex flex-row justify-between items-center sm:gap-0 gap-[300px]'>

        <ul className='flex flex-row justify-around items-center h-[10vh]'>
            <li>
            <li className='text-3xl'><Link href='/'>CakeStore</Link></li>
            </li>
         </ul> 

         <ul className='sm:hidden cursor-pointer'>
            <li onClick={showNav}>
                <FaHamburger className={hide ?'hidden': 'block'}/>
                <FaCross className={!hide ?'hidden': 'block'}/>
            </li>
        </ul>
        </div>

         <ul className={hide ? 'absolute right-0 top-[130px] sm:top-[40px] bg-[#ff00ffbc] sm:bg-transparent sm:flex sm:gap-5 sm:justify-end sm:items-center flex flex-col sm:flex-row justify-between h-[70vh] sm:h-[10vh] w-[60%] text-right px-12' :'sm:relative hidden sm:flex sm:flex-row gap-5 gap-y-10 pr-5 sm:items-center  h-[10vh]'}>   
         <li><Link href='/category' className=''>Catalog</Link></li>
            <li><Link href='/delivery' className=''>Delivery</Link></li>
            <li><Link href='/about' className=''>About</Link></li>
            <li><Link href='/contacts' className=''>Contacts</Link></li>
          
           <li>
             <ul className='flex gap-4 items-center justify-end sm:pb-0 pb-3 text-lg cursor-pointer sm:pr-12'>
            <li>Cart</li>
            <li><FaShoppingCart /></li>
            <li className='bg-fuchsia-700 text-white rounded-full px-2'>{cartVal}</li>
            </ul>
            </li>
        </ul>
       
    </nav>
  )
}


