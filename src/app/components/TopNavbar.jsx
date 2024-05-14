import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import {IoLogoInstagram} from 'react-icons/io'


export const TopNavbar = () => {
  return (
    <nav className='flex justify-between items-center bg-fuchsia-700 text-white px-16 py-2'>
        <ul className='flex gap-2'>
            <li>
                <Link href='tel:+2348100144840'>Call Franc: +2348100144840</Link>
            </li>
            <li>
                <Link href='mailto:francenemuo@gmail.com'>Email: francenemuo@gmail.com</Link>
            </li>
        </ul>

        <ul className='flex items-center gap-2 text-lg'>
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
    </nav>
  )
}
