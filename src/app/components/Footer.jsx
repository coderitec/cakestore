import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import {IoLogoInstagram} from 'react-icons/io'

function Footer() {
  return (
    <footer className='relative inset-y-40 px-16 py-16 bg-fuchsia-700 text-white '>
        <div className='flex justify-between '>

        <ul>
            <li className='text-3xl'><Link href='/'>CakeStore</Link></li>

        </ul>

         <ul className='flex sm:flex-row flex-col items-center  gap-10 '>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/catalog'>Catalog</Link></li>
            <li><Link href='/delivery'>Delivery</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/contacts'>Contacts</Link></li>
        </ul>

        <ul className='flex sm:flex-row flex-col items-center gap-2 text-lg'>
            <li>
                <Link href='/'>
                    <FaGithub />
                </Link>
            </li>
            <li>
                <Link href='/'>
                    <FaLinkedin />
                </Link>
            </li>
            <li>
                <Link href='/'>
                    <IoLogoInstagram />
                </Link>
            </li>
            <li>
                <Link href='/'>
                    <FaYoutube />
                </Link>
            </li>
        </ul>
        </div>
        <hr className='border-2 my-10'/>

        <div className='text-center text-lg'>
            <p>Created by &copy;<Link href='https://www.linkedin.com/in/franc-enemuo' target='_blank'> Coderite {new Date().getFullYear()}</Link></p>
        </div>
    </footer>
  )
}

export default Footer