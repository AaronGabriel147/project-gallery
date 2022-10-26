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
                <p>Hello, I am Aaron Gabriel, a full stack web developer with a strong dedication for creating beautiful, user-friendly websites. I have a background in web development and have a passion for creativity and problem solving. I am positive and resilient, I work well with others and love creating real world projects.</p>
                <p>Some of my interests: I enjoy building and programming mechanical keyboards. I love science, especially astronomy, and paleoanthropology, as well as philosophy, especially ancient Greek & Roman Stoicism.</p>
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
