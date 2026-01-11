import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Projects.css';
import ThreeDTilt from './ThreeDTilt';

// Import images
import imgParking from '../assets/project-parking.png';
import imgDriver from '../assets/project-driver.png';
import imgRacing from '../assets/project-racing.png';
import imgTodo from '../assets/project-todo.png';
import imgOrientation from '../assets/project-orientation.png';
import imgShapes from '../assets/project-shapes.png';

const Projects = () => {
    const projects = [
        {
            title: 'Smart Parking Lot System',
            description: 'Real-time monitoring and control dashboard for a smart parking facility with role-based access, device control, and smart alerts.',
            tags: ['.NET 8', 'Blazor Server', 'SignalR', 'SQLite', 'Clean Architecture'],
            image: imgParking,
            link: 'https://github.com/FenishPatel0245/smart_parking_'
        },
        {
            title: 'Driver Analytics App',
            description: 'Mobile app for tracking driving metrics with live trip insights, route tracking, and automated driver scoring analytics.',
            tags: ['React Native', 'Firebase', 'Mobile UX', 'Analytics'],
            image: imgDriver,
            link: 'https://github.com/Shumroz2002/Group19F25'
        },
        {
            title: 'Car Racing Game',
            description: 'Fullscreen Windows console-based ASCII racing game with collision, scoring, adaptive difficulty, and leaderboard.',
            tags: ['C++', 'Windows API', 'OOP', 'Game Dev'],
            image: imgRacing,
            link: 'https://github.com/FenishPatel0245/Car_Game'
        },
        {
            title: 'To-Do List Manager',
            description: 'Menu-driven console app with task management features including priority sorting, recurring tasks, and persistent file storage.',
            tags: ['C', 'Data Structures', 'File I/O'],
            image: imgTodo,
            link: 'https://github.com/FenishPatel0245/to-do-list-manager'
        },
        {
            title: 'Orientation Classifier',
            description: 'C++ OOP application that uses gravity sensor vectors and Nearest Neighbour classification to detect phone orientation.',
            tags: ['C++', 'OOP', 'Machine Learning', 'Math'],
            image: imgOrientation,
            link: 'https://github.com/FenishPatel0245/phone-orientation-detector-cpp'
        },
        {
            title: 'Shape Finder Tool',
            description: 'C-based console tool for identifying geometric shapes using input validation, conditional logic, and calculations.',
            tags: ['C', 'Geometry', 'Logic', 'Validation'],
            image: imgShapes,
            link: 'https://github.com/Shumroz2002/CSCN71020_Group3'
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="projects-header">
                <motion.h2
                    className="section-title centered-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Projects
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    Selected work showcasing my software development, UI, and system design projects.
                </motion.p>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-wrapper"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <ThreeDTilt className="glass-card project-card">
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="project-tag">{tag}</span>
                                    ))}
                                </div>

                                {project.link ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        View Project <ArrowRight size={16} className="ml-1" />
                                    </a>
                                ) : (
                                    <span
                                        className="project-link"
                                        style={{ opacity: 0.5, cursor: 'not-allowed' }}
                                    >
                                        View Project <ArrowRight size={16} className="ml-1" />
                                    </span>
                                )}
                            </div>
                        </ThreeDTilt>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
