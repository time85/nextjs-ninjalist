import React from 'react';

const currentYear = () => {
    return new Date().getFullYear();
};

const Footer = () => {
    return (
        <div>
            <hr />
            Copyright {currentYear()} | <a href="https://github.com/time85/nextjs-ninjalist">open @GitHub</a>
        </div>
    );
};

export default Footer;
