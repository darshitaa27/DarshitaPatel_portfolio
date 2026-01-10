import React from 'react';
import { motion } from 'framer-motion';
import { Folder, Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Smart Parking Lot System',
            description: 'A comprehensive parking management solution.',
            tech: ['C#', '.NET', 'Blazor', 'SQLite', 'Clean Architecture'],
            highlights: [
                'Implemented Clean Architecture for maintainability',
                'Built reactive UI with Blazor',
                'Optimized database queries with SQLite'
            ],
            github: 'https://github.com/FenishPatel0245/smart_parking'
        },
        {
            title: 'Phone Orientation Detector',
            description: 'Machine learning based orientation detection.',
            tech: ['C++', 'Machine Learning', 'KNN'],
            highlights: [
                'Implemented K-Nearest Neighbors algorithm in C++',
                'Real-time orientation classification',
                'Efficient data processing pipeline'
            ],
            github: 'https://github.com/FenishPatel0245/phone-orientation-detector-cpp'
        },
        {
            title: 'ASCII Car Racing Game',
            description: 'A retro-style console game.',
            tech: ['C++', 'Windows Console', 'ASCII UI'],
            highlights: [
                'Custom game loop implementation',
                'Responsive ASCII graphics',
                'High performance console rendering'
            ],
            github: 'https://github.com/FenishPatel0245/Car_Game'
        },
        {
            title: 'To-Do List Manager',
            description: 'Efficient CLI task management tool.',
            tech: ['C/C++', 'CLI', 'Data Structures'],
            highlights: [
                'Advanced data structure usage',
                'Persistent storage implementation',
                'Interactive command line interface'
            ],
            github: 'https://github.com/FenishPatel0245/to-do-list-manager'
        },
        {
            title: 'Software Engineering SDLC Group Project',
            description: 'Collaborative software development project.',
            tech: ['SDLC', 'Project Management', 'Team Collaboration'],
            highlights: [
                'Full SDLC lifecycle implementation',
                'Agile methodology application',
                'Comprehensive documentation'
            ],
            github: 'https://github.com/Shumroz2002/Group19F25'
        },
        {
            title: 'CSCN71020 Group Project',
            description: 'Academic group project focusing on software principles.',
            tech: ['C++', 'Software Design', 'Group Work'],
            highlights: [
                'Applied software design patterns',
                'Collaborative development workflow',
                'Code review and quality assurance'
            ],
            github: 'https://github.com/Shumroz2002/CSCN71020_Group3'
        }
    ];

    return (
        <section id="projects">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Projects
            </motion.h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="glass-card project-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="project-header">
                            <Folder size={40} className="folder-icon" />
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                                    <Github size={20} />
                                </a>
                            </div>
                        </div>

                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>

                        <ul className="project-highlights">
                            {project.highlights.map((highlight, i) => (
                                <li key={i}>{highlight}</li>
                            ))}
                        </ul>

                        <ul className="project-tech-list">
                            {project.tech.map((tech, i) => (
                                <li key={i}>{tech}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
