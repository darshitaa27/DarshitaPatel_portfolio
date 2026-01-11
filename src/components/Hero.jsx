import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail } from 'lucide-react';
import heroImg from '../assets/hero_profile_v5.png';
import './Hero.css';
import ThreeDTilt from './ThreeDTilt';

const Hero = () => {
    const sectionRef = useRef(null);

    return (
        <section
            id="hero"
            className="hero-section"
            ref={sectionRef}
        >
            <motion.div
                className="hero-content"
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
                <ThreeDTilt
                    className="relative inline-block w-full h-full cursor-pointer"
                    glare={false}
                    shadowEnable={false} // Disable box shadow (square highlight)
                    tiltEnable={false}
                    scaleOnHover={false}
                >
                    <img src={heroImg} alt="Darshita Patel" className="hero-image" />
                </ThreeDTilt>
            </div>
        </section>
    );
};

export default Hero;
