import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Experience.css';
import ThreeDTilt from './ThreeDTilt';

const Experience = () => {
    const experiences = [
        "Provided technical support and troubleshooting for hardware, software, and system-related issues to ensure uninterrupted operations.",
        "Assisted with system setup, configuration, and maintenance, following organizational IT standards and best practices.",
        "Managed user access, basic security tasks, and documentation, supporting secure and reliable IT environments.",
        "Collaborated with cross-functional teams to resolve issues efficiently, improve processes, and maintain system reliability."
    ];

    return (
        <section id="experience">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center' }}
            >
                Experience
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <ThreeDTilt className="glass-card experience-card">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="company-name">Ravi Fincorp Ltd.</h3>
                            <div className="role-name">
                                <span>IT Support / Co-op</span>
                                <span className="text-mint font-mono text-sm">May 2023 – January 2024</span>
                            </div>
                        </div>
                        <Briefcase className="text-mint" size={40} />
                    </div>

                    <div className="experience-description">
                        {experiences.map((item, index) => (
                            <div key={index} className="experience-item">
                                {item}
                            </div>
                        ))}
                    </div>
                </ThreeDTilt>
            </motion.div>
        </section>
    );
};

export default Experience;
