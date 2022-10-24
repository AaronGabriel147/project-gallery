import Link from 'next/link'


function NavBar() {
    return (
        <div className="nav">
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