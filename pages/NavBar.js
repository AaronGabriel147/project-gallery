import Link from 'next/link'
import Image from 'next/future/image'
import phoenixLogo from '../public/phoenixLogo.png';
import { useRouter } from 'next/router'; // @@@@@@@@@@ Import useRouter hook





function NavBar() {

    const router = useRouter(); // @@@@@@@@@@ Get the router instance to determine current route

    return (
        <div className="nav">

            <Link href="/">
                <div className="nav-logo-and-text-cont">
                    <Image
                        src={phoenixLogo}
                        alt='project'
                        // placeholder='blur'
                        layout="responsive"
                        quality="100"
                        priority
                        width={70}
                    />
                    <h2 className="my-name">Aaron Gabriel</h2>
                </div>
            </Link>

            <ul className="nav">


<li className={router.pathname === "/" ? "active-link" : ""}> {/* @@@@@@@@@@ Move Link inside li to fix error */}
    <Link href="/" passHref>
        Home
    </Link>
</li>

<li className={router.pathname === "/about" ? "active-link" : ""}> {/* @@@@@@@@@@ Move Link inside li to fix error */}
    <Link class="nav-link-txt" href="/about" passHref>
        About
    </Link>
</li>

<li className={router.pathname === "/chat" ? "active-link" : ""}> {/* @@@@@@@@@@ Move Link inside li to fix error */}
    <Link class="nav-link-txt" href="/chat" passHref>
        Chat
    </Link>
</li>

            </ul>
        </div >
    )
}

export default NavBar