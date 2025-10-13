import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="container mx-auto px-4 py-32 md:py-48 min-h-screen flex flex-col justify-center items-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-6xl md:text-8xl font-sans font-bold mb-8">
                    Hi, I'm{' '}
                    <span className="font-cursive text-light-accent dark:text-dark-accent">
                        Raziya
                    </span>.
                </h1>
                <p className="text-xl md:text-2xl text-light-primary dark:text-dark-primary max-w-3xl mx-auto">
                    I build beautiful, interactive things for the web.
                    <br />
                    Welcome to my little corner of the internet.
                </p>
            </motion.div>
            <motion.a
                href="#projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 px-8 py-4 bg-light-accent dark:bg-dark-accent text-white dark:text-dark-bg font-bold rounded-full shadow-lg hover:scale-105 transition-transform"
            >
                View My Work
            </motion.a>
        </section>
    );
};

export default Hero;