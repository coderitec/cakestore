import { data } from "@/app/components/data"
import Image from "next/image"

export default function ProductPage({params}) {
    const filteredProduct = data.find(product => product.name.split(' ').join('-') == params.id)

  return (
    <div className="px-16 py-12 " >
        <div className="flex flex-col sm:flex-row items-start gap-x-10">

        <div>

        <h2 className="font-semibold text-3xl pb-6">{filteredProduct.name}</h2>
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
        </div>
    </div>
  )
}
