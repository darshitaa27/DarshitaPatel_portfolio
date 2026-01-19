import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Contact.css';
import ThreeDTilt from './ThreeDTilt';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">


            <motion.h2
                className="contact-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                Let's contact
            </motion.h2>

            <motion.p
                className="contact-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                I'm currently looking for new opportunities, specifically a Summer 2026 Co-op.
                Feel free to reach out through any of the platforms below!
            </motion.p>

            <motion.div
                className="contact-details"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
                <ThreeDTilt className="contact-item-wrapper inline-block">
                    <a href="mailto:dpatel6206@conestogac.on.ca" className="contact-item">
                        <Mail className="contact-icon" size={24} />
                        <span>dpatel6206@conestogac.on.ca</span>
                    </a>
                </ThreeDTilt>

                <ThreeDTilt className="contact-item-wrapper inline-block">
                    <a href="https://github.com/darshitaa27" target="_blank" rel="noopener noreferrer" className="contact-item">
                        <Github className="contact-icon" size={24} />
                        <span>GitHub</span>
                    </a>
                </ThreeDTilt>

                <ThreeDTilt className="contact-item-wrapper inline-block">
                    <a href="https://www.linkedin.com/in/darshita-patel-7b11b134a/" target="_blank" rel="noopener noreferrer" className="contact-item">
                        <Linkedin className="contact-icon" size={24} />
                        <span>LinkedIn</span>
                    </a>
                </ThreeDTilt>


            </motion.div>


        </section>
    );
};

export default Contact;
