import Link from 'next/link'

export default function Footer() {
    return (
        <div className="about-footer">
            <div className="line"></div>
            

            <div class="footer-container">
                <ul class="link">

                    <Link href="/about">
                        <li class="footer-link">About</li>
                    </Link>


                    <Link href="/">
                        <li class="footer-link">Projects</li>
                    </Link>

                    {/* style={{ padding   : '24px' }}  */}
                    <a class="link" id="contact-me" href="mailto:aarongabriel147@gmail.com">Contact Me</a>

                </ul>

            <p class="footer-txt">@2024 Created by Aaron Gabriel</p>

        </div >
        </div >
    )
}
