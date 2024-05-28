"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import {FaCross, FaHamburger} from 'react-icons/fa'
import {IoCartOutline} from 'react-icons/io'

export default function Bottom() {
    const [hide, setHide] = useState(false)

    function showNav(){
        setHide(!hide)
    }

    const cartVal = 0
  return (
    <nav className='bg-blue-700 text-white flex sm:flex-row flex-col justify-between items-center'>
        <div className='flex flex-row justify-between items-center sm:gap-0 gap-[400px]'>

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

         <ul className={hide ? 'absolute right-0 top-14 sm:top-0 bg-[#0066ffb7] sm:bg-transparent sm:flex sm:gap-5 sm:justify-end sm:items-center block h-[70vh] sm:h-[10vh] w-[80%] text-right px-12' :'sm:relative hidden sm:flex sm:flex-row gap-5 pr-5 sm:items-center  h-[10vh]'}>   
         <li><Link href='/category'>Catalog</Link></li>
            <li><Link href='/delivery'>Delivery</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/contacts'>Contacts</Link></li>
          
            <ul className='flex gap-4 items-center text-lg cursor-pointer'>
            <li>Cart</li>
            <li><IoCartOutline /></li>
            <li className='bg-fuchsia-700 text-white rounded-full px-2'>{cartVal}</li>
        </ul>
        </ul>
       
    </nav>
  )
}


