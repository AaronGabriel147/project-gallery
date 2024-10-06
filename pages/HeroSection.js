
import { useState } from 'react'; // @@@ Add useState for managing slideshow state
import Link from 'next/link';
import Image from 'next/image';
import newBanner from '../public/newBanner.jpg';
import plants from '../public/plants.jpg';
import oldPORTFOLIO from '../public/oldPORTFOLIO.jpg';
import xfolsom from '../public/xfolsom.jpg';
import crud from '../public/crud.gif';
import slice16x9 from '../public/slice16x9.jpg';
// import tripleHero from '../public/tripleHero.png';
import codeHeroSectionSS from '../public/codeHeroSectionSS.png';
import GNPfinalGIF from '../public/GNPfinalGIF.gif';
import petmakerGIF from '../public/petmakerGIF.gif';
import tuttos from '../public/tuttos.png';

import petmakerDesktopSS from '../public/petmakerDesktopSS.png';
import sefiaTemplate from '../public/sefiaTemplate.png';



const slides = [
    { 
        title: "Meet Aaron Gabriel",
        description: "With a passion for web development and a focus on delivering seamless user experiences, I specialize in frontend technologies. From clean, responsive websites to dynamic web apps, I leverage my expertise in React.js and Shopify development.",
        images: [xfolsom, codeHeroSectionSS, newBanner]
    },
    { 
        title: "Full Stack Solutions",
        description: "I specialize in building full-stack applications, handling both frontend and backend seamlessly. My skills include Node.js, Express, and database management with MongoDB and PostgreSQL.",
        images: [sefiaTemplate, plants, petmakerDesktopSS]
    },
    {
        title: "E-Commerce Expert",
        description: "As a Shopify expert, I can help businesses grow with scalable, customized e-commerce solutions, integrating everything from payment gateways to inventory management.",
        images: [GNPfinalGIF, tuttos, slice16x9]
    }
]; // Define an array of slides with different text and image sets

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0); // Initialize state for the current slide

    const nextSlide = () => setCurrentSlide((currentSlide + 1) % slides.length); // Move to the next slide, loop back to first
    const prevSlide = () => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length); // Move to the previous slide, loop back from first

    const slide = slides[currentSlide]; // Get the current slide content

    return (
        <>
            <div className="hero-section">
                <div className="text-content">
                    <h4 className="sub-title">Full Stack Web Developer</h4>
                    <h1 className="main-title">{slide.title}</h1> {/* @@@ Use dynamic title */}
                    <p className="description">{slide.description}</p> {/* @@@ Use dynamic description */}
                    <Link href="/about" passHref>
                        <button className="about-me-button">About Me</button>
                    </Link>
                </div>

                <div className="image-gallery">
                    {slide.images.map((image, index) => (
                        <div className="image-item" key={index}>
                            <Image
                                src={image}
                                alt="project"
                                quality="100"
                                // placeholder="blur"
                                // layout="responsive"
                                // width={500}
                                // height={500}
                                // layout="responsive"
                                // style={{objectFit: "contain"}}
                                // style={{border: "2px solid green;"}}
                                // style={{ width: '100%', height: 'auto', objectFit: 'cover' }} // @@@ Inline styles for image
                                // width={800} // @@@ Set a default width to make layout responsive
                                // height={800} // @@@ Set a default height to make layout responsive
                            />
                        </div>
                    ))} {/* @@@ Dynamically render the images */}
                </div>

                {/* Arrows for navigation */}
                <div className="slider-arrows">
                    <button className="arrow left-arrow" onClick={prevSlide}>❮</button> {/* @@@ Left arrow */}
                    <button className="arrow right-arrow" onClick={nextSlide}>❯</button> {/* @@@ Right arrow */}
                </div>
            </div>
        </>
    );
}












// import Link from 'next/link'
// import Image from 'next/image'; // Add this import
// import newBanner from '../public/newBanner.jpg';
// import plants from '../public/plants.jpg';
// import oldPORTFOLIO from '../public/oldPORTFOLIO.jpg';
// import xfolsom from '../public/xfolsom.jpg';



// export default function HeroSection() {
//     return (
//         <>
    
// <div class="hero-section">
      
//         <div class="text-content">
//             <h4 class="sub-title">Full Stack Web Developer</h4>
//             <h1 class="main-title">Meet Aaron Gabriel</h1>
//             <p class="description">With a passion for web development and a focus on delivering seamless user experiences, I specialize in frontend technologies. From clean, responsive websites to dynamic web apps, I leverage my expertise in React.js and Shopify development.</p>
            
//             <Link href="/about" passHref>
//                 <button class="about-me-button">About Me</button>
//             </Link>
//         </div>
      
//         <div class="image-gallery">
          
//             <div class="image-item">
//                 <Image
//                     src={xfolsom}
//                     alt='project'
//                     placeholder='blur'
//                     layout="responsive"
//                     quality="100"
//                     // fill={true}
//                     // height={"750px;"}

//                 />
//            </div>
          
          
          
//             <div class="image-item">
//                 <Image
//                     src={plants}
//                     alt='project'
//                     placeholder='blur'
//                     // layout="responsive"
//                     quality="100"
//                 />
//             </div>
          
//             <div class="image-item">
//                 <Image
//                     src={newBanner}
//                     alt='project'
//                     placeholder='blur'
//                     // layout="responsive"
//                     quality="100"
//                 />
//             </div>
          
          
//         </div>
//     </div>


//         </>
//     )
// }