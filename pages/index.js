import Head from 'next/head'
import Image from 'next/future/image'
import ImageCards from './ImageCards'
import imgGal from '../public/imgGal.jpg';
import NavBar from './NavBar';
import Footer from './footer';

// import Link from 'next/link'
// import plantROUTES from '../public/plantROUTES.gif'

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>Project Gallery</title>
        <meta name="description" content="A gallery of all of my web dev projects." />
        <link rel="icon" href="/1.png" />
      </Head>


      <NavBar />
      <h1>Projects</h1>
      <div className="line"></div>
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
        <p>A full stack React Firebase storage application that stores and displays images in a document database.</p>
        <div className="link-cont">
          <a id="link" href="https://firebase-storage-three.vercel.app/" target="blank">url</a>
          <a id="link" href="https://github.com/AaronGabriel147/firebase-storage" target="blank">code</a>
        </div>

      </div>

      <ImageCards />
      <Footer />

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
