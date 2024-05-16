import styles from './video.module.css'

export default function Category() {
  return (
    <section className={styles.video}>
        <section>
            <video autoPlay={true} muted={true} loop={true} width='200'>
                <source src="/cakes-video.mp4" type="video/mp4" />
            </video>

            <div className='flex flex-col items-end gap-5'>
            <h2>cakes</h2>
            <button className='bg-white text-slate-950 text-lg px-6 py-4 rounded-full font-semibold capitalize'>shop now</button>
            </div>
        </section>

        <section>
            <video autoPlay={true} muted={true} loop={true} width='200'>
                <source src='/pastries-video.mp4' type="video/mp4" />
            </video>

            <div className='flex flex-col items-end gap-5'>
            <h2>pastries</h2>
            <button className='bg-white text-slate-950 text-lg px-6 py-4 rounded-full font-semibold capitalize'>shop now</button>
            </div>
        </section>
    </section>
  )
}
