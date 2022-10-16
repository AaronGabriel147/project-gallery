// import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import imgfyc from '../public/fyc.png'
import mobilelurker from '../public/mobilelurker.jpg'
import shopifyhome from '../public/shopifyhome.png'
import plantROUTES from '../public/plantROUTES.gif'



{/* <div className="card">
        <Image
          src={mobilelurker}
          alt='project'
          placeholder='blur'
        />
        <p>Mobile view of 'Lurker', a React web app that filters out images from any subreddit and displays them. </p>
      </div> */}

{/* <h4>...</h4> */ }

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

      {/* <div className="card">
        <Image
          src={mobilelurker}
          alt='project'
          placeholder='blur'
          objectFit='contain'
        />
        <p>Mobile view of 'Lurker', a React web app that filters out images from any subreddit and displays them. </p>
      </div> */}

      <div className="card">
        <div>
          <Image
            src={shopifyhome}
            alt='project'
            placeholder='blur'
            layout="responsive"
            objectFit='contain'
            quality="100"
            priority
          />
          <p>A React app built with the Hydrogen framework for Shopify.</p>
        </div>
      </div>

      <div className="card">
        <div>
          <Image
            src={imgfyc}
            alt='project'
            placeholder='blur'
            layout="responsive"
            objectFit='contain'
            quality="100"
          />
        </div>
        <p>A simple RESTful API call which fetches data with a toggle to show or hide data.</p>
      </div>



      <div className="card">
        <div>
          <Image
            src={plantROUTES}
            alt='project'
            placeholder='blur'
            layout="responsive"
            objectFit='contain'
            quality="100"
            blurDataURL
          />
        </div>
        <p>A simple RESTful API call which fetches data with a toggle to show or hide data.</p>
      </div>


    </div>
  )
}
