import Link from 'next/link'
import Image from 'next/future/image'
import phoenixLogo from '../public/phoenixLogo.png';

import { useRouter } from 'next/router'; // @@@@@@@@@@ Import useRouter hook


export default function Footer() {

    const router = useRouter(); // @@@@@@@@@@ Get the router instance to determine current route

    return (
        <div className="about-footer">

        <div className="outer-wrapper">
            <div className="inner-wrapper">
                <div className="bg-primary item-0"></div>
                <div className="bg-primary item-1"></div>
                <div className="bg-primary item-2"></div>
                <div className="bg-primary item-3"></div>
                <div className="bg-primary item-4"></div>
                <div className="bg-primary item-5"></div>
                <div className="bg-primary item-6"></div>
                <div className="bg-primary item-7"></div>
                <div className="bg-primary item-8"></div>
                <div className="bg-primary item-9"></div>
                <div className="bg-primary item-10"></div>
                <div className="bg-primary item-11"></div>
                <div className="bg-primary item-12"></div>
                <div className="bg-primary item-13"></div>
                <div className="bg-primary item-14"></div>
                <div className="bg-primary item-15"></div>
                <div className="bg-primary item-16"></div>
                <div className="bg-primary item-17"></div>
                <div className="bg-primary item-18"></div>
                <div className="bg-primary item-19"></div>
                <div className="bg-primary item-20"></div>
                <div className="bg-primary item-21"></div>
                <div className="bg-primary item-22"></div>
                <div className="bg-primary item-23"></div>

                <div className="footer-container">

                    <ul className="footer-link-container link">

                        {/* <Link href="/about">
                            <li className="footer-link">About</li>
                        </Link>
                        <Link href="/">
                            <li className="footer-link">Projects</li>
                        </Link>
                        <a className="link footer-link" id="contact-me" href="mailto:aarongabriel147@gmail.com">Contact</a>
                    
                     */}




<li className={router.pathname === "/" ? "active-link-footer" : "footer-link"}> 
    <Link href="/" passHref>
        Home
    </Link>
</li>

<li className={router.pathname === "/about" ? "active-link-footer" : "footer-link"}> {/* @@@@@@@@@@ Add active class conditionally */}
    <Link href="/about" passHref>
        About
    </Link>
</li>

<li className={router.pathname === "/chat" ? "active-link-footer" : "footer-link"}> {/* @@@@@@@@@@ Add active class conditionally */}
    <Link href="/chat" passHref>
        Chat
    </Link>
</li>



<li className="footer-link"> 
    <a className="link footer-link" id="contact-me" href="mailto:aarongabriel147@gmail.com">Email Me</a>
</li>
                    
                    </ul>

                    <Link href="/">
                        <div className="footer-logo-container">
                            <Image
                                src={phoenixLogo}
                                alt='project'
                                // placeholder='blur'
                                layout="responsive"
                                quality="100"
                                priority
                                width={200}
                            />
                            <h2 className="my-name-footer">Aaron Gabriel</h2>
                            <p className="my-name-footer-sub-txt">Full Stack Web Developer</p>
                        </div>
                    </Link>

                </div >

                <p className="footer-txt">@2024 Created by Aaron Gabriel</p>


                </div>
            </div>
        </div>
    )
}
