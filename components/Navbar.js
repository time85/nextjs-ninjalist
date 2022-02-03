import Link from 'next/link';
import Image from 'next/image'

function Navbar(props) {
    return (
        <nav>
            <div className="logo">
                <Image alt="ninja-list" title="ninja-list"  src="/ninja.png" width={60} height={80}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/ninjas"><a>NinjaList</a></Link>
            <Link href="/about"><a>About</a></Link>
        </nav>
    );
}

export default Navbar;