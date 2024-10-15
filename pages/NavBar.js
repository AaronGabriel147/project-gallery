import Link from 'next/link'
import Image from 'next/future/image'
import phoenixLogo from '../public/phoenixLogo.png';



function NavBar() {
    return (
        <div className="nav">

<div class="nav-logo-and-text-cont">
    <Image
        src={phoenixLogo}
        alt='project'
        // placeholder='blur'
        layout="responsive"
        quality="100"
        priority
        width={70}
    />
    <h2 class="my-name">Aaron Gabriel</h2>
</div>

            <ul className="nav">

                <Link href="/">
                    <li>Projects</li>
                </Link>

                <Link href="/about">
                    <li>About</li>
                </Link>
            </ul>
        </div >
    )
}

export default NavBar