import React from 'react';

const currentYear = () => {
    return new Date().getFullYear();
};

const Footer = () => {
    return (
        <footer>
            Copyright {currentYear()} | <a href="https://github.com/time85/nextjs-ninjalist">open @GitHub</a>
        </footer>
    );
};

export default Footer;
