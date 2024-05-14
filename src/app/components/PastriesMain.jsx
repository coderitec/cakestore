import Image from "next/image"
import { data } from "./data"
import Link from "next/link"

const pastData = data.filter(datum => datum.type == 'Pastry').slice(0,4)

export const PastsMain = () => {

    const pastLog = pastData.map(past => (
        <section key={past.id} className="flex flex-col gap-3 items-center shadow-xl rounded-2xl py-10 text-2xl">
            <Link href={`/category`}>
            <Image src={`/cakes/${past.name.split(' ').join('-')}.jpg`} alt={past.name} width='300' height='400' className="h-40 w-40"/>
            <h3>{past.name}</h3>
            <p className="bg-fuchsia-500 py-2 px-8 rounded-full"><span>&#8358;</span><span>{past.amount}</span></p>
            </Link>
        </section>
    ))

  return (
    <section className='px-16'>
        <h2 className='text-2xl py-8 capitalize font-semibold'>pastries</h2>

        <hr style={{height:'5px', background: 'linear-gradient(90deg,fuchsia 10%,#ccc 10%)',marginBlock: '15px'}}/>

    
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {pastLog}
    </div>
    </section>
  )
}
