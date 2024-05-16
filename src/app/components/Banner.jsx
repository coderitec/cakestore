import { CakesMain } from './CakesMain'
import Category from './Category'
import { PastsMain } from './PastriesMain'
import styles from './banner.module.css'

export default function Banner() {
  return (
    <div>

    <div className={styles.bhead}>
        <div>
         <h2 className='text-xl text-slate-900 py-4 '>{new Date().getHours() >= 16 ? 'Good Evening' : new Date().getHours() >= 12 ? 'Good Afternoon' : 'Good morning'}, <span className='text-3xl'>Here is </span>
         <span className='text-3xl '>
         <span className='animate-bounce inline-block pl-1'>Swe</span>
         <span className='animate-pulse inline-block '>et </span>
         <span className='animate-bounce inline-block'>Addic </span>
         <span className='animate-ping'>tions </span>
         </span>
         
         </h2>  

         <p className='text-5xl text-slate-900'>Everything cakes and pastries with sweet addiction</p>

         <button className='rounded-full cursor-pointer bg-fuchsia-600 text-white py-3 px-4 my-4'>check our Cakestore</button> 
        </div>
    </div>

    <Category />

    <CakesMain />

    <PastsMain />
    </div>
  )
}
