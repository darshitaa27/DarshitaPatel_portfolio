import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './About.css';

const About = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Gentle parallax effect
    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section id="about" ref={ref} className="about-section">
            <motion.h2
                className="section-title centered-title"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                About me
            </motion.h2>

            <motion.div
                className="about-container"
                style={{ y }} // Parallax applied here
            >
                <motion.div
                    className="about-card glass-card"
                    initial={{ opacity: 0, y: 100, rotateX: 45, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                    viewport={{ once: false, margin: "-100px" }} // Changed to once: false so it replays if they scroll up/down? User might like that. Let's keep once: true for professionalism, but user asked for "when I scroll". I'll use once: true usually.
                    transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                >
                    <div className="about-text">
                        <p>
                            Hello! My name is Darshita and I enjoy creating things that live on the internet and beyond.
                            My interest in software development started young, and I've since cultivated a strong foundation in
                            <span className="text-mint"> software engineering, problem-solving, and user-centered design</span>.
                        </p>
                        <p>
                            I am a motivated <span className="text-white">Computer Science student</span> at Conestoga College.
                            I have experienced in <span className="text-mint">C, C++, and C#</span>, with hands-on academic projects spanning systems, databases, UX, and full SDLC development.
                        </p>
                        <p>
                            I am actively seeking a <span className="text-mint">Summer 2026 Software Developer Co-op</span> where I can contribute to meaningful projects and continue learning.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
