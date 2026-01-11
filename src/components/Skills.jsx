import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Database, Wrench, BookOpen } from 'lucide-react';
import './Skills.css';
import ThreeDTilt from './ThreeDTilt';

const Skills = () => {
    const skillsData = [
        {
            category: 'Languages',
            icon: <Code size={24} />,
            items: ['C', 'C++', 'C#', 'SQL', 'HTML', 'CSS', 'JavaScript']
        },
        {
            category: 'Libraries & Technologies',
            icon: <Terminal size={24} />,
            items: ['C++ STL', 'Console-based UI/UX', 'File I/O']
        },
        {
            category: 'Tools & Platforms',
            icon: <Wrench size={24} />,
            items: ['Git Bash', 'GitHub', 'MySQL', 'Figma', 'Adobe', 'Visual Studio', 'Visual Studio Code', 'Team Development', 'Agile/Scrum', 'Bash']
        },
        {
            category: 'Computer Science Fundamentals',
            icon: <BookOpen size={24} />,
            items: ['OOP Principles', 'Data Structures & Algorithms', 'System Analysis', 'System Design', 'User Experience']
        },
        {
            category: 'Systems, Databases & Networking',
            icon: <Database size={24} />,
            items: ['SDLC', 'Requirements Writing', 'Testing', 'Agile Scrum', 'Wireshark', 'Query Design', 'DBMS', 'Intro to DB', 'Networking', 'Cisco']
        }
    ];



    return (
        <section id="skills" className="expertise-section">
            <div className="expertise-header">
                <motion.h2
                    className="section-title centered-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Technical Toolkit
                </motion.h2>
                <motion.p
                    className="expertise-subtitle"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    Tools, languages, and core CS foundations I use to build reliable software and clean experiences.
                </motion.p>
            </div>

            <div className="skills-matrix">
                {skillsData.map((group, index) => (
                    <ThreeDTilt
                        key={index}
                        className="matrix-row"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="matrix-left">
                            <div className="icon-wrapper">
                                <span className="matrix-icon">{group.icon}</span>
                            </div>
                            <h3 className="matrix-category">{group.category}</h3>
                        </div>
                        <div className="matrix-right">
                            <div className="chips-container">
                                {group.items.map((skill, i) => (
                                    <ThreeDTilt
                                        key={i}
                                        className="expert-chip inline-block"
                                    >
                                        {skill}
                                    </ThreeDTilt>
                                ))}
                            </div>
                        </div>
                    </ThreeDTilt>
                ))}
            </div>
        </section>
    );
};

export default Skills;
