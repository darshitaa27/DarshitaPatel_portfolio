import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Database, Wrench, BookOpen } from 'lucide-react';
import './Skills.css';

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

    const highlights = ['C++', 'SQL', 'JavaScript', 'Figma', 'GitHub', 'Agile/Scrum', 'OOP', 'DSA', 'SDLC', 'DBMS', 'Networking'];

    const isHighlighted = (skill) => {
        // Simple check or partial match if needed. Using exact match or includes for keywords.
        // For "Data Structures & Algorithms", user said "DSA" in highlights list. I should probably match exact item names from the user request or partials.
        // User list has "DSA", but item is "Data Structures & Algorithms". I will map them or check generous naming.
        // Actually, user's item list has "Data Structures & Algorithms". The highlight command says "DSA". 
        // I will add specific checks.
        if (skill === 'Data Structures & Algorithms') return true; // Map DSA
        return highlights.includes(skill);
    };

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
                    <motion.div
                        key={index}
                        className="matrix-row"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="matrix-left">
                            <span className="matrix-icon">{group.icon}</span>
                            <h3 className="matrix-category">{group.category}</h3>
                        </div>
                        <div className="matrix-right">
                            <div className="chips-container">
                                {group.items.map((skill, i) => {
                                    const active = isHighlighted(skill);
                                    return (
                                        <motion.span
                                            key={i}
                                            className={`expert-chip ${active ? 'highlighted-chip' : ''}`}
                                            whileHover={{
                                                y: -3,
                                                boxShadow: active
                                                    ? "0 4px 15px rgba(212, 175, 55, 0.4)"
                                                    : "0 4px 12px rgba(212, 175, 55, 0.2)",
                                                scale: 1.05
                                            }}
                                        >
                                            {skill}
                                        </motion.span>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
