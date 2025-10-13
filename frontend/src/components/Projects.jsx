import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const featuredProjects = [
    {
        id: 1,
        name: "VideoTweet - Full-Stack Social Platform",
        description: "A full-stack video sharing platform built with the MERN stack, featuring secure JWT authentication and seamless media storage with Cloudinary.",
        githubUrl: "https://github.com/raziya-023/video-tweet-frontend",
        liveUrl: "https://video-tweet-frontend.vercel.app/"
    },
    {
        id: 2,
        name: "Feasto - Food Delivery App",
        description: "An online food delivery platform using the MERN stack with REST APIs for order and menu management, optimized for a smooth user experience.",
        githubUrl: "https://github.com/raziya-023/Food-Delivery-app",
        liveUrl: "https://feasto-api.netlify.app/"
    },
    {
        id: 3,
        name: "AI-Powered Virtual Assistant",
        description: "A voice-enabled assistant built with Python, NLP, and Speech Recognition to handle tasks like reminders and scheduling through natural voice interaction.",
        githubUrl: "#",
        liveUrl: null
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-cursive text-center mb-12 text-light-accent dark:text-dark-accent">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            // --- FIX: Added Gradients ---
                            className="bg-light-glass dark:bg-dark-glass dark:bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg overflow-hidden flex flex-col"
                        >
                            <div className="p-6 flex-grow">
                                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                                <p className="text-light-primary dark:text-dark-primary">
                                    {project.description}
                                </p>
                            </div>
                            <div className="p-6 bg-white/10 flex items-center space-x-4">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold hover:text-light-accent dark:hover:text-dark-accent transition-colors">
                                    GitHub <FaGithub className="ml-2" />
                                </a>
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold hover:text-light-accent dark:hover:text-dark-accent transition-colors">
                                        Live Demo <FaExternalLinkAlt className="ml-2" />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;