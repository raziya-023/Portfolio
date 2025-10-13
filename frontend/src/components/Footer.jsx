import React from 'react';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="py-6">
            <div className="container mx-auto px-4 text-center text-light-primary dark:text-dark-primary">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://github.com/raziya-023" target="_blank" rel="noopener noreferrer" className="hover:text-light-accent dark:hover:text-dark-accent">
                        <FaGithub size={50} />
                    </a>
                    <a href="https://linkedin.com/in/raziya-khan-159146281" target="_blank" rel="noopener noreferrer" className="hover:text-light-accent dark:hover:text-dark-accent">
                        <FaLinkedin size={50} />
                    </a>
                </div>
                <p className="mb-2 text-sm">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
                <p className="flex items-center justify-center gap-x-2">
                    Made with <FaHeart className="text-lg text-light-accent dark:text-dark-accent animate-pulse" /> by Raziya
                </p>
            </div>
        </footer>
    );
};

export default Footer;