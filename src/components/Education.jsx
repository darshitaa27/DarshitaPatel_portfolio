import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import './Education.css';
import ThreeDTilt from './ThreeDTilt';

const Education = () => {
    const courses = [
        'Software Engineering Fundamentals',
        'Object-Oriented Programming',
        'Data Structures & Algorithms',
        'Database Systems',
        'Computer Networks',
        'Operating Systems & Security',
        'Systems Analysis & Design',
        'Software Quality & UX Evaluation',
        'SDLC Projects I–IV'
    ];

    return (
        <section id="education">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center' }}
            >
                Education
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <ThreeDTilt className="glass-card education-card">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="school-name">Conestoga College</h3>
                            <div className="degree-name">
                                <span>Bachelor of Computer Science</span>
                                <span className="text-mint font-mono text-sm">2025–2027</span>
                            </div>
                        </div>
                        <GraduationCap className="text-mint" size={40} />
                    </div>

                    <h4 className="coursework-title">Relevant Coursework</h4>
                    <div className="coursework-grid">
                        {courses.map((course, index) => (
                            <div key={index} className="course-item">
                                {course}
                            </div>
                        ))}
                    </div>
                </ThreeDTilt>
            </motion.div>
        </section>
    );
};

export default Education;
