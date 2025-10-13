import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaJs, FaPython, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

const skills = [
    { icon: <FaJava />, name: 'Java', color: '#007396' },
    { icon: <FaJs />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <FaPython />, name: 'Python', color: '#3776AB' },
    { icon: <FaReact />, name: 'React', color: '#61DAFB' },
    { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
    { icon: <SiExpress />, name: 'Express.js', color: '#000000' },
    { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
    { icon: <FaGitAlt />, name: 'Git', color: '#F05032' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: '#06B6D4' },
];

const Skills = () => {
    return (
        <section id="skills" className="bg-white/5 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-cursive text-center mb-12 text-light-accent dark:text-dark-accent">My Tech Stack</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center p-4"
                        >
                            <div className="text-6xl mb-2" style={{ color: skill.color === '#000000' && document.documentElement.classList.contains('dark') ? '#FFFFFF' : skill.color }}>
                                {skill.icon}
                            </div>
                            <p className="font-medium">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;