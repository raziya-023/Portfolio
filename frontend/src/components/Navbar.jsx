import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <nav className="fixed top-0 z-50 w-full bg-light-glass dark:bg-dark-glass backdrop-blur-lg border-b border-white/10">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    <a href="#" className="text-2xl font-bold text-light-accent dark:text-dark-accent">Raziya</a>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} className="hover:text-light-accent dark:hover:text-dark-accent transition-colors">{link.label}</a>
                        ))}
                        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-white/20">
                            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-white/20 mr-2">
                            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4">
                        <ul className="flex flex-col items-center space-y-4">
                            {navLinks.map(link => (
                                <li key={link.href}>
                                    <a href={link.href} onClick={() => setIsOpen(false)} className="text-lg hover:text-light-accent dark:hover:text-dark-accent transition-colors">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;