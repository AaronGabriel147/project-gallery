import Link from 'next/link'


function NavBar() {
    return (
        <div className="nav">
            <ul className="nav">

                <Link href="/">
                    <li>PROJECTS</li>
                </Link>

                <Link href="/about">
                    <li>ABOUT</li>
                </Link>

            </ul>
        </div >
    )
}

export default NavBar