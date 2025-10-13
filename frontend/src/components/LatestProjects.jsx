import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const LatestProjects = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get('/github-data.json');
                if (Array.isArray(response.data)) {
                    setRepos(response.data);
                }
            } catch (error) {
                console.error("Failed to fetch local repo data", error);
            } finally {
                setLoading(false);
            }
        };
        fetchRepos();
    }, []);

    if (loading) return <div className="text-center py-16">Loading Latest Projects...</div>;

    if (!Array.isArray(repos) || !repos.length) return null;

    return (
        <section id="latest-projects" className="bg-white/5 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-cursive text-center mb-12 text-light-accent dark:text-dark-accent">
                    Latest From GitHub
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {repos.map((repo, index) => (
                        <motion.a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center justify-center p-6 w-48 h-48 bg-light-glass dark:bg-dark-glass backdrop-blur-lg border border-white/20 rounded-xl shadow-lg text-center"
                        >
                            <FaGithub className="text-6xl mb-4 text-light-primary dark:text-dark-primary" />
                            <span className="font-semibold">{repo.name.replace(/-/g, ' ')}</span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestProjects;