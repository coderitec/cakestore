import Image from "next/image"
import { data } from "./data"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

const cakeData = data.filter(datum => datum.type == 'Cake').slice(0,4)

export const CakesMain = () => {

    const cakeLog = cakeData.map(cake => (
        <section key={cake.id} className="bg-white flex flex-col gap-3 items-center shadow-xl rounded-2xl py-10 text-2xl">
            <Link href={`/product/${cake.name.split(' ').join('-')}`}>
            <Image src={`/cakes/${cake.name.split(' ').join('-')}.jpg`} alt={cake.name} width='300' height='400' className="h-40 w-40"/>
      
            <h3>{cake.name}</h3>
            <p className="bg-fuchsia-500 py-2 px-8 rounded-full"><span>&#8358;</span><span>{cake.amount}</span></p>
            </Link>
        </section>
    ))

  return (
    <section className='px-16'>
        <div className="flex justify-between items-center">
        <h2 className='text-2xl py-8 capitalize font-semibold'>cakes</h2>
        <Link href={`/category/${'Cake'}`}>
        <div className="flex items-center space-x-2">
            <p>See All Cakes</p>
            <FaArrowRight />
        </div>
        </Link>
        </div>



        <hr style={{height:'5px', background: 'linear-gradient(90deg,fuchsia 10%,#ccc 10%)',marginBlock: '10px'}}/>

    
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {cakeLog}
    </div>
    </section>
  )
}
