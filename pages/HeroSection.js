import Link from 'next/link'
import Image from 'next/image'; // Add this import
import newBanner from '../public/newBanner.jpg';
import plants from '../public/plants.jpg';
import oldPORTFOLIO from '../public/oldPORTFOLIO.jpg';
import xfolsom from '../public/xfolsom.jpg';



export default function HeroSection() {
    return (
        <>
<div class="hero-section">
      
        <div class="text-content">
            <h4 class="sub-title">Full Stack Web Developer</h4>
            <h1 class="main-title">Meet Aaron Gabriel</h1>
            <p class="description">With a passion for web development and a focus on delivering seamless user experiences, I specialize in frontend technologies. From clean, responsive websites to dynamic web apps, I leverage my expertise in React.js and Shopify development.</p>
            
            <Link href="/about" passHref>
                <button class="about-me-button">About Me</button>
            </Link>
        </div>
      
        <div class="image-gallery">
          
            <div class="image-item">
                <Image
                    src={xfolsom}
                    alt='project'
                    placeholder='blur'
                    layout="responsive"
                    quality="100"
                    // fill={true}
                    // height={"750px;"}

                />
           </div>
          
          
          
            <div class="image-item">
                <Image
                    src={plants}
                    alt='project'
                    placeholder='blur'
                    // layout="responsive"
                    quality="100"
                />
            </div>
          
            <div class="image-item">
                <Image
                    src={newBanner}
                    alt='project'
                    placeholder='blur'
                    // layout="responsive"
                    quality="100"
                />
            </div>
          
          
        </div>
    </div>
            
        </>
    )
}