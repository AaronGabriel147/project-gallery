import Footer from "./Footer";
import NavBar from "./NavBar";
import Image from 'next/future/image';
import me3 from '../public/me3.jpg';
import newBanner from '../public/newBanner.jpg';
import newGithub from '../public/newGithub.jpg';





export default function About() {
    return (
        <div className="app">
            <NavBar />
            <h1 id="about-h1">About</h1>

            <div className="about-card">
                <Image
                    id="me3"
                    src={me3}
                    alt='project'
                    placeholder='blur'
                    layout="responsive"
                    quality="100"
                // priority
                />
                <p>{`Hello, I'm Aaron Gabriel, a passionate and dedicated Full Stack Web Developer specializing in creating engaging, responsive, and user-friendly websites. I bring a strong technical background in frontend and backend development, focusing on delivering seamless user experiences. With expertise in modern JavaScript frameworks, including React.js, and experience in Shopify development, I am committed to building solutions that solve real-world problems and delight users.`}</p>
                <p>I am a proactive team player who thrives in collaborative environments, and I take pride in my ability to adapt and learn quickly. My creative mindset and problem-solving skills enable me to tackle challenging projects with a positive attitude.</p>
            
                <a id="link" style={{ padding   : '24px' }} href="mailto:aarongabriel147@gmail.com">Contact Me</a>

            
            </div>

            {/* LinkedIn */}
            <div className="about-card">
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
                    <p id="link">LinkedIn</p>
                </a>
            </div>

            {/* GitHub */}
            <div className="about-card">
                <a href="https://github.com/AaronGabriel147" target="blank">
                    <Image
                        src={newGithub}
                        alt='project'
                        placeholder='blur'
                        layout="responsive"
                        quality="100"
                    />
                </a>
                <a href="https://github.com/AaronGabriel147" target="blank">
                    <p id="link">GitHub</p>
                </a>
            </div>

            <Footer />
        </div >
    )
}
