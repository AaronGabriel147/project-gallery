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

        {/* <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@1,500&display=swap" /> */}


      </Head>

      <h1>Project Gallery</h1>
      {/* <div className="line"></div> */}
      <div className="card">
        <Image
          src={imgGal}
          alt='project'
          placeholder='blur'
          layout="responsive"
          // objectFit='contain'
          quality="100"
          priority
        />
        <p>A React Firebase full stack storage application that stores and displays images in a document database.</p>
        <div className="link-cont">
          <a id="link" href="https://firebase-storage-three.vercel.app/" target="blank">url</a>
          <a id="link" href="https://github.com/AaronGabriel147/firebase-storage" target="blank">code</a>
        </div>

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
