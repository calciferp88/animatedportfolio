import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll
    z-0'>
      <Head>
        <title>I'm Thuta</title>
      </Head>
      

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero " className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>


    </div>
  )
}
