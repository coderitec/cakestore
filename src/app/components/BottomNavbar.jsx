import Link from 'next/link'
import { IoCartOutline } from "react-icons/io5";


export default function BottomNavbar() {
    const cartVal = 0
  return (
    <nav className='flex items-center justify-between px-16 py-8 '>
        <ul className='flex items-center  gap-10 '>
            <li className='text-3xl'><Link href='/'>CakeStore</Link></li>
            <li><Link href='/category'>Catalog</Link></li>
            <li><Link href='/delivery'>Delivery</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/contacts'>Contacts</Link></li>
        </ul>

        <ul className='flex gap-4 items-center text-lg cursor-pointer'>
            <li>Cart</li>
            <li><IoCartOutline /></li>
            <li className='bg-fuchsia-700 text-white rounded-full px-2'>{cartVal}</li>
        </ul>
    </nav>
  )
}
