import Link from 'next/link';

function Navbar(props) {
    return (
        <nav>
            <div className="logo">
                <h1>NinjaList</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/ninjas"><a>NinjaList</a></Link>
            <Link href="/about"><a>About</a></Link>
        </nav>
    );
}

export default Navbar;