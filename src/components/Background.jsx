import React, { useRef, useEffect } from 'react';
import './Background.css';

const Background = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // Theme Colors
        const colors = {
            navy: '#0a192f',
            lightNavy: '#112240',
            mint: 'rgba(100, 255, 218, 0.1)',
            mintBright: 'rgba(100, 255, 218, 0.4)',
            slate: 'rgba(136, 146, 176, 0.15)',
            white: 'rgba(230, 241, 255, 0.3)',
        };

        const codeSnippets = [
            'class System', 'void init()', '0x2A', 'return true;', 'npm install',
            '127.0.0.1', 'git push', '<div>', '<App />', 'SELECT *', 'while(1)',
            'const data', 'padding: 0;', '010101', 'NULL', '=>', 'async await',
            'malloc()', '#include', 'std::cout'
        ];

        let particles = [];
        let mouse = { x: width / 2, y: height / 2 };

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.z = Math.random() * 2 + 1; // Depth for parallax
                this.isText = Math.random() > 0.85; // 15% chance to be text
                this.text = this.isText ? codeSnippets[Math.floor(Math.random() * codeSnippets.length)] : null;
                this.size = this.isText ? Math.random() * 10 + 10 : Math.random() * 2 + 1;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.1;
            }

            update(mouseX, mouseY) {
                // Movement
                this.x += this.speedX;
                this.y += this.speedY;

                // Parallax effect based on mouse position
                const parallaxX = (mouseX - width / 2) * 0.02 / this.z;
                const parallaxY = (mouseY - height / 2) * 0.02 / this.z;

                // Boundary Check (wrap around)
                if (this.x < -50) this.x = width + 50;
                if (this.x > width + 50) this.x = -50;
                if (this.y < -50) this.y = height + 50;
                if (this.y > height + 50) this.y = -50;

                this.draw(ctx, parallaxX, parallaxY);
            }

            draw(ctx, px, py) {
                ctx.save();
                ctx.globalAlpha = this.opacity;

                if (this.isText) {
                    ctx.font = `${this.size}px 'Courier New', monospace`;
                    ctx.fillStyle = colors.slate;
                    ctx.fillText(this.text, this.x + px, this.y + py);
                } else {
                    ctx.beginPath();
                    ctx.arc(this.x + px, this.y + py, this.size, 0, Math.PI * 2);
                    ctx.fillStyle = colors.mint;
                    ctx.fill();
                }
                ctx.restore();
            }
        }

        // Initialize particles
        const initParticles = () => {
            particles = [];
            const particleCount = Math.min(Math.floor(width * height / 15000), 100); // Density control
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };
        initParticles();

        // Circuit/Grid Drawing
        const drawGrid = () => {
            ctx.strokeStyle = 'rgba(136, 146, 176, 0.03)';
            ctx.lineWidth = 1;
            const gridSize = 100;

            // Vertical lines
            for (let x = 0; x <= width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            // Horizontal lines
            for (let y = 0; y <= height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw Grid
            drawGrid();

            // Connect nearby particles (Circuit effect)
            particles.forEach((p, i) => {
                p.update(mouse.x, mouse.y);

                // Connect lines between close geometric particles slightly
                if (!p.isText) {
                    particles.slice(i + 1).forEach(p2 => {
                        if (!p2.isText) {
                            const dx = p.x - p2.x;
                            const dy = p.y - p2.y;
                            const dist = Math.sqrt(dx * dx + dy * dy);
                            if (dist < 150) {
                                ctx.beginPath();
                                ctx.strokeStyle = `rgba(100, 255, 218, ${0.1 - dist / 1500})`; // Fades with distance
                                ctx.moveTo(p.x, p.y);
                                ctx.lineTo(p2.x, p2.y);
                                ctx.stroke();
                            }
                        }
                    });
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        // Event Listeners
        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initParticles();
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="background-container">
            <canvas ref={canvasRef} className="background-canvas" />
        </div>
    );
};

export default Background;
