import React from 'react';

function Navbar(props) {
    return (
        <nav>
            <div className="logo">
                <h1>NinjaList</h1>
            </div>
            <a>Home</a>
            <a>NinjaList</a>
            <a>About</a>
        </nav>
    );
}

export default Navbar;