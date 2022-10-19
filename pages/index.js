import Image from 'next/future/image'
// import Image from 'next/image'
import ImageCards from './ImageCards'
import Head from 'next/head'
import imgGal from '../public/imgGal.jpg';

// import plantROUTES from '../public/plantROUTES.gif'
{/* <p>A React web application built with the Hydrogen framework for Shopify.</p> */ }

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>Project Gallery</title>
        <meta name="description" content="A gallery of all of my web dev projects." />
        <link rel="icon" href="/1.png" />
      </Head>

      <h1>Project Gallery</h1>
      {/* <div className="line"></div> */}
      <div className="card">
        <Image
          src={imgGal}
          alt='project'
          placeholder='blur'
          layout="responsive"
          objectFit='contain'
          quality="100"
          priority
        />
        <p>A React Firebase full stack storage application that stores and displays images in a document database.</p>

      </div>

      <ImageCards />

      {/* 
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
      </div> */}

    </div>
  )
}
