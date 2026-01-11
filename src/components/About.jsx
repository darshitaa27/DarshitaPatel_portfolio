import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './About.css';
import ThreeDTilt from './ThreeDTilt';

const About = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // 3D Scroll Transforms
    // As the user scrolls through the section:
    // 0% (enter bottom) -> 50% (center) -> 100% (exit top)
    // "More screen scroll effect" -> Increased angles and scale depth
    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [75, 0, 75]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

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
                style={{
                    perspective: 1200, // Increased perspective for deeper 3D feel
                    y
                }}
            >
                <motion.div
                    style={{
                        rotateX,
                        scale,
                        opacity,
                        transformStyle: "preserve-3d"
                    }}
                >
                    <ThreeDTilt
                        className="about-card glass-card"
                        tiltEnable={false} // Disable mouse tilt
                        glare={false} // Disable white glare
                        spotlight={false} // Disable moving spotlight (fixing "blink")
                        scaleOnHover={false} // Disable grow effect
                    >
                        <div className="about-text">
                            <p>
                                Hey, I’m Darshita Patel, and I enjoy creating things that live on the internet and beyond.
                                My passion for coding began early, and I've since cultivated a strong foundation in
                                <span className="text-mint"> software engineering, problem-solving, and user-centered design</span>.
                            </p>
                            <p>
                                I am a motivated <span className="text-white">Computer Science student</span> at Conestoga College.
                                I have experience in <span className="text-mint">C, C++, C#, HTML, and JavaScript</span>, with hands-on academic projects spanning systems, databases, UX, and full SDLC development.
                            </p>
                            <p>
                                I am actively seeking a <span className="text-mint">Summer 2026 Software Developer Co-op</span> where I can contribute to meaningful projects and continue learning.
                            </p>
                        </div>
                    </ThreeDTilt>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
