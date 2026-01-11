import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Design.css';
import ThreeDTilt from './ThreeDTilt';

// Import images
import imgVisa from '../assets/poster-travel-visa.png';
import imgExhibition from '../assets/poster-exhibition.png';
import imgConference from '../assets/poster-conference.png';

const Design = () => {
    const designs = [
        {
            title: 'Travel Visa Poster',
            description: 'A creative travel visa poster design featuring passport stamps and global elements.',
            tags: ['Poster', 'Adobe', 'Typography'],
            image: imgVisa,
            link: 'https://assets.adobe.com/id/urn:aaid:sc:VA6C2:e17f51c5-17c1-4782-a168-eb43e0eda11b?view=published'
        },
        {
            title: 'Exhibition Poster',
            description: 'An exhibition poster concept focused on visual hierarchy, contrast, and readability.',
            tags: ['Poster', 'Layout', 'Branding'],
            image: imgExhibition,
            link: 'https://assets.adobe.com/id/urn:aaid:sc:VA6C2:7f602c3e-b4bd-498f-a4b2-67d9619f6970?view=published'
        },
        {
            title: 'Conference Poster',
            description: 'A conference poster design with structured spacing and professional information design.',
            tags: ['Poster', 'Information Design', 'Adobe'],
            image: imgConference,
            link: 'https://assets.adobe.com/id/urn:aaid:sc:VA6C2:0f632cc6-2826-4616-b4ac-479f579782cb?view=published'
        }
    ];

    return (
        <section id="design" className="design-section">
            <div className="design-header">
                <motion.h2
                    className="section-title centered-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Design
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    A few poster designs I created in Adobe.
                </motion.p>
            </div>

            <div className="design-grid">
                {designs.map((design, index) => (
                    <motion.div
                        key={index}
                        className="design-wrapper"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <ThreeDTilt className="glass-card design-card">
                            <div className="design-image-container">
                                <img src={design.image} alt={design.title} className="design-image" />
                            </div>

                            <div className="design-content">
                                <h3 className="design-title">{design.title}</h3>
                                <p className="design-description">{design.description}</p>

                                <div className="design-tags">
                                    {design.tags.map((tag, i) => (
                                        <span key={i} className="design-tag">{tag}</span>
                                    ))}
                                </div>

                                <a
                                    href={design.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="design-link"
                                >
                                    View Design <ArrowRight size={16} className="ml-1" />
                                </a>
                            </div>
                        </ThreeDTilt>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Design;
