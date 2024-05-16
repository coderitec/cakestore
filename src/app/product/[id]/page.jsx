import { data } from "@/app/components/data"
import Image from "next/image"
import Link from "next/link"

export default function ProductPage({params}) {
    const filteredProduct = data.find(product => product.name.split(' ').join('-') == params.id)

    const relatedProducts = data.filter(product =>  product.name !== filteredProduct.name && product.type == filteredProduct.type).slice(0, 6)

  return (
    <div className="px-16 py-12 " >
        <div className="flex flex-col sm:flex-row items-start gap-x-10">

        <div>

        <h2 className="font-semibold text-3xl pb-6">{filteredProduct.name}</h2>
        <h3><span className="font-bold">Region:</span> {filteredProduct.region.join(', ')}</h3>
        {filteredProduct.description.map(para => (
            <p key={Math.random()} className="text-lg py-2">{para}</p>
        ))}

        <p className="text-lg py-2">Amount: &#8358; {filteredProduct.amount}</p>

        <div className="flex items-center gap-4">

        <input type="number" name="num" id="num" min={1} max={5} className="w-[150px] shadow-xl rounded-full py-4 px-8 border-4 outline-slate-300" defaultValue={1}/>

        <button className={`shadow-2xl rounded-full py-4 px-6 text-white  ${filteredProduct.type == 'Pastry'? 'bg-fuchsia-500' :'bg-orange-500'}`}>Add to Cart</button>
        </div>
        </div>

        <div>
            <Image src={`/cakes/${filteredProduct.name.split(' ').join('-')}.jpg`} alt={filteredProduct.name} height={600} width={600} className="w-[600px] rounded-xl"/>
        </div>
        </div>

        <div>
            <h2 className="pt-10 text-4xl">Related Products</h2>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3"> 
                {relatedProducts.map(datum =>
                    (
                        <section key={datum.id}  className="bg-white flex flex-col gap-3 items-center shadow-xl rounded-2xl py-10 text-2xl">
                          <Link href={`/product/${datum.name.split(' ').join('-')}`} title={datum.name}>
                          <Image src={`/cakes/${datum.name.split(' ').join('-')}.jpg`} alt={datum.name} width='300' height='400' className="h-40 w-40" />
                          <h3>{datum.name}</h3>
                          <p className="bg-fuchsia-500 py-2 px-8 rounded-full"><span>&#8358;</span><span>{datum.amount}</span></p>
                          </Link>
                        </section>
                      ))
                }
            </div>

        </div>

    </div>
  )
}
