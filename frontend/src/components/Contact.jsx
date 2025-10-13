import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="bg-gray-100 dark:bg-gray-800 py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-5xl font-cursive text-center mb-12 text-light-accent dark:text-dark-accent">Get In Touch</h2>
                <p className="text-lg text-light-primary dark:text-dark-primary mb-8 max-w-2xl mx-auto">
                    I'm currently open to new opportunities. Feel free to reach out to me via email. Let's build something amazing together!
                </p>
                <motion.div
                    className="inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <a
                        href="mailto:luckii0523@gmail.com"
                        className="inline-block bg-light-accent text-white dark:bg-dark-accent dark:text-dark-bg font-bold py-3 px-8 rounded-lg shadow-lg"
                    >
                        Email Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;