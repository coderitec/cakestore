import Image from "next/image"
import { data } from "../components/data"
import Link from "next/link"


export default function Catalog() {

  const allData = data.map(datum => (
    <section key={datum.id}  className="bg-white flex flex-col gap-3 items-center shadow-xl rounded-2xl py-10 text-2xl">
      <Link href={`/product/${datum.name.split(' ').join('-')}`} title={datum.name}>
      <Image src={`/cakes/${datum.name.split(' ').join('-')}.jpg`} alt={datum.name} width='300' height='400' className="h-40 w-40" />
      <h3>{datum.name}</h3>
      <p className="bg-fuchsia-500 py-2 px-8 rounded-full"><span>&#8358;</span><span>{datum.amount}</span></p>
      </Link>
    </section>
  ))
  return (
    <div className="px-16">

      <div className=" flex gap-3 items-center justify-between">

    <h2 className='text-2xl py-8 capitalize font-semibold'>All Cakes and Pastries</h2>

    <div>
      <ul className="flex gap-3 items-center capitalize">
        <li className="py-2 px-4 rounded-2xl bg-slate-900 text-white">
          <Link href={`/category`}>all</Link> </li>
        <li className="py-2 px-4 ">
          <Link href={`/category/${'Pastry'}`}>pastries</Link> </li>
        <li className="py-2 px-4 ">
          <Link href={`/category/${'Cake'}`}>cakes</Link> </li>
      
      </ul>
    </div>
    </div>

<hr style={{height:'5px', background: 'linear-gradient(90deg,fuchsia 10%,#ccc 10%)',marginBlock: '15px'}}/>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {allData}
      </div>
    </div>
  )
}
