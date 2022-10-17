// import styles from '../styles/Home.module.css'
import Image from 'next/future/image'
// import Image from 'next/image'

import Head from 'next/head'
import imgfyc from '../public/fyc.png'
import shopifyhome from '../public/shopifyhome.png'
import figmaStoics from '../public/figmaStoics.jpg'
import reactCHALLENGES from '../public/reactCHALLENGES.jpg'

import plantROUTES from '../public/plantROUTES.gif'




export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>Project Gallery</title>
        <meta name="description" content="Project Gallery" />
        <link rel="icon" href="/1.png" />
      </Head>
      <h1>Project Gallery</h1>
      {/* <div className="line"></div> */}
      <div className="card">
        <Image
          src={shopifyhome}
          alt='project'
          placeholder='blur'
          layout="responsive"
          objectFit='contain'
          quality="100"
          priority
        // blurDataURL ???????
        />
        <p>A React app built with the Hydrogen framework for Shopify.</p>
      </div>


      {/* <div className="card">
        <Image
          src={reactCHALLENGES}
          alt='project'
          placeholder='blur'
          layout="responsive"
          objectFit='contain'
          quality="100"
        />
        <p>Add text.</p>
      </div> */}



      <div className="card">
        <Image
          src={imgfyc}
          alt='project'
          placeholder='blur'
          layout="responsive"
          objectFit='contain'
          quality="100"
        />
        <p>A simple RESTful API call which fetches data with a toggle to show or hide data.</p>
      </div>


      {/* <div className="card">
        <Image
          src={figmaStoics}
          alt='project'
          placeholder='blur'
          layout="responsive"
          objectFit='contain'
          quality="100"
        />
        <p>A simple RESTful API call which fetches data with a toggle to show or hide data.</p>
      </div> */}



      <div className="card">
        <Image
          src={plantROUTES}
          alt='project'
          // placeholder='blur'
          layout="responsive"
          objectFit='contain'
          quality="100"
          blurDataURL
        />
        <p>add text*</p>
      </div>


    </div>
  )
}
