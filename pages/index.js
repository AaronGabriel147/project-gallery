import Head from 'next/head'
import Image from 'next/future/image'
import ImageCards from './ImageCards'
import imgGal from '../public/imgGal.jpg';
import NavBar from './NavBar';
import Footer from './Footer';
import HeroSection from './HeroSection';




export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>Project Gallery</title>
        <meta name="description" content="A gallery of all of my web dev projects." />
        <link rel="icon" href="/1.png" />
      </Head>


      <NavBar />

      <HeroSection />

      <h1>Projects</h1>
      <div className="card">
        <Image
          src={imgGal}
          alt='project'
          placeholder='blur'
          layout="responsive"
          quality="100"
          priority
        />
        <p className="card-description-text">A full stack React Firebase storage application that stores and displays images in a document database.</p>
        <div className="link-cont">
          <a class="link" href="https://firebase-storage-three.vercel.app/" target="blank">url</a>
          <a class="link" href="https://github.com/AaronGabriel147/firebase-storage" target="blank">code</a>
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
