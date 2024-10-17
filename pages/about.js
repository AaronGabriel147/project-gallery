import Footer from "./Footer";
import NavBar from "./NavBar";
import Image from 'next/future/image';
import me3 from '../public/me3.jpg';
import newBanner from '../public/newBanner.jpg';
import newGithub from '../public/newGithub.jpg';
import gh from '../public/gh.png';
import portfolio from '../public/portfolio.jpg';




export default function About() {
    return (
        <div className="app">
            <NavBar />
            {/* <h1 id="about-h1">About</h1> */}

            <div id="about-hero" className="card about-card about-hero">
                <h1 id="about-h1">About Me</h1>
                <Image
                    id="me3"
                    src={me3}
                    alt='project'
                    placeholder='blur'
                    layout="responsive"
                    quality="100"
                // priority
                />
                <p>{`Hello, I'm Aaron Gabriel, a passionate and dedicated Full Stack Web Developer specializing in creating engaging, responsive, and user-friendly websites. I bring a strong technical background in frontend and backend development, focusing on delivering seamless user experiences. With expertise in modern JavaScript frameworks, including React.js, and experience in Shopify development.`}</p>
                <p>I am a proactive team player who thrives in collaborative environments, and I take pride in my ability to adapt and learn quickly. My creative mindset and problem-solving skills enable me to tackle challenging projects with a positive attitude.</p>
            
                <a class="link card-btn" style={{ marginBottom   : '36px' }} href="mailto:aarongabriel147@gmail.com">Email Me</a>
            </div>






{/* LinkedIn */}
<div className="card about-card">
    <a href="https://www.linkedin.com/in/aaron-gabriel-web-dev/" target="blank">
        <Image
            src={portfolio}
            alt='project'
            placeholder='blur'
            layout="responsive"
            quality="100"
        />
    </a>

    <p>My original portfolio site with GIF's showing off some of my full stack projects.</p>

    <a href="https://aaron-gabriels-portfolio.vercel.app/"
        target="blank">
        <p class="link card-btn">Portfolio</p>
    </a>
</div>




            {/* LinkedIn */}
            <div className="card about-card">
                <a href="https://www.linkedin.com/in/aaron-gabriel-web-dev/" target="blank">
                    <Image
                        src={newBanner}
                        alt='project'
                        placeholder='blur'
                        layout="responsive"
                        quality="100"
                    />
                </a>

                <a href="https://www.linkedin.com/in/aaron-gabriel-web-dev/"
                    target="blank">
                    <p class="link card-btn">LinkedIn</p>
                </a>
            </div>

            {/* GitHub */}
            <div className="card about-card">
                <a href="https://github.com/AaronGabriel147" target="blank">
                    <Image
                        src={gh}
                        alt='project'
                        placeholder='blur'
                        layout="responsive"
                        quality="100"
                    />
                </a>
                <a href="https://github.com/AaronGabriel147" target="blank">
                    <p class="link card-btn">GitHub</p>
                </a>
            </div>

            <Footer />
        </div >
    )
}
