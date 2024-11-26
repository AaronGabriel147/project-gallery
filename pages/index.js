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
        <title>Aaron Gabriel</title>
        <meta name="description" content="A gallery of my web dev projects." />
        <link rel="icon" href="/1.png" />
      </Head>

      <NavBar />
      <HeroSection />
      <h1>Projects</h1>
      <ImageCards />
      <Footer />
    </div>
  )
}
