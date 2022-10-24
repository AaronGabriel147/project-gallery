import Footer from "./footer";
import NavBar from "./NavBar";



export default function About() {
    return (
        <div className="app">
            <NavBar />
            <h1 id="about-h1">About</h1>
            <div className="line"></div>

            <div className="about-card">
                <p>I am a full stack web developer with a strong dedication for creating beautiful, user-friendly websites. I have a background in web development and have a passion for creativity and problem solving. I am positive and resilient, I work well with others and love creating real world projects.</p>

                <p>Some of my interests: I enjoy building and programming mechanical keyboards. I love science (astronomy, paleoanthropology, & evolution) as well as philosophy (ancient Greek & Roman Stoicism). My motivation for success is my family, I am married and have two daughters (4 & 6). There's nothing I enjoy more than being a parent. My passion and resilience for being a successful developer stems from my girls.</p>
            </div>

            {/* <div className="about-card">
                <p>I am a full stack web developer with a strong dedication for creating beautiful, user-friendly websites. I have a background in web development and have a passion for creativity and problem solving. I am positive and resilient, I work well with others and love creating real world projects.</p>

                <p>Some of my interests: I enjoy building and programming mechanical keyboards. I love science (astronomy, paleoanthropology, & evolution) as well as philosophy (ancient Greek & Roman Stoicism). My motivation for success is my family, I am married and have two daughters (4 & 6). There's nothing I enjoy more than being a parent. My passion and resilience for being a successful developer stems from my girls.</p>
            </div>


            <div className="about-card">
                <p>I am a full stack web developer with a strong dedication for creating beautiful, user-friendly websites. I have a background in web development and have a passion for creativity and problem solving. I am positive and resilient, I work well with others and love creating real world projects.</p>

                <p>Some of my interests: I enjoy building and programming mechanical keyboards. I love science (astronomy, paleoanthropology, & evolution) as well as philosophy (ancient Greek & Roman Stoicism). My motivation for success is my family, I am married and have two daughters (4 & 6). There's nothing I enjoy more than being a parent. My passion and resilience for being a successful developer stems from my girls.</p>
            </div>

            <Footer /> */}
        </div >
    )
}
