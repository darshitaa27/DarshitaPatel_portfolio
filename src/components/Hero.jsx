import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, Github, Mail } from 'lucide-react';
import heroImg from '../assets/hero_profile_v5.png';
import './Hero.css';

const Hero = () => {
    const sectionRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for text parallax
    const springConfig = { damping: 25, stiffness: 150 };
    const textX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
    const textY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-15, 15]), springConfig);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        // Normalize mouse position from -0.5 to 0.5
        const x = (clientX / innerWidth) - 0.5;
        const y = (clientY / innerHeight) - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <section
            id="hero"
            className="hero-section"
            ref={sectionRef}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="hero-content"
                style={{ x: textX, y: textY }}
            >
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-mint font-mono mb-4"
                >
                    Hello I’m
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="name-heading"
                >
                    Darshita Patel
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="role-heading"
                >
                    Bachelor of Computer Science Student.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="summary-text"
                >
                    <span className="text-mint">Computer Science</span> student with <span className="text-mint">hands-on experience</span> in designing, <span className="text-mint">programming</span>, <span className="text-mint">databases</span>, <span className="text-mint">version control</span>, and <span className="text-mint">team-based development</span>. Interested in building reliable software and learning through real-world engineering challenges.
                </motion.p>
            </motion.div>

            <div className="hero-visual">
                <img src={heroImg} alt="Darshita Patel" className="hero-image" />
            </div>
        </section>
    );
};

export default Hero;
