import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="container mx-auto px-4 py-16">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-5xl font-bold font-cursive text-center mb-8">About Me</h2>
                <p className="text-lg text-light-primary dark:text-dark-primary max-w-4xl mx-auto text-center">
                    I am a dedicated developer with hands-on experience in enterprise-level software development. I thrive on building scalable web and mobile applications using modern frameworks and working on solutions with real-world business impact.
                </p>
            </motion.div>
        </section>
    );
};

export default About;