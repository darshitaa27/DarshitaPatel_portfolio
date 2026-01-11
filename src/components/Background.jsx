import React, { useRef, useEffect } from 'react';
import './Background.css';

const Background = () => {
    const canvasRef = useRef(null);
    const wrapperRef = useRef(null);
    const gridRef = useRef(null);
    const glowRef = useRef(null);

    // Mouse state
    const mouse = useRef({ x: 0, y: 0 });
    const target = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // Theme Colors
        const colors = {
            navy: '#0a192f',
            slate: 'rgba(136, 146, 176, 0.25)', // Increased visibility
            mint: 'rgba(212, 175, 55, 0.25)', // Increased contrast for Gold
            white: 'rgba(230, 241, 255, 0.4)',
        };

        const codeSnippets = [
            'class System', 'void init()', '0x2A', 'return true;', 'npm install',
            '127.0.0.1', 'git push', '<div>', '<App />', 'SELECT *', 'while(1)',
            'const data', 'padding: 0;', '010101', 'NULL', '=>', 'async await',
            'malloc()', '#include', 'std::cout'
        ];

        let particles = [];

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.z = Math.random() * 2 + 1; // Depth
                this.isText = Math.random() > 0.9; // 10% chance to be text (reduced from 15%)
                this.text = this.isText ? codeSnippets[Math.floor(Math.random() * codeSnippets.length)] : null;
                // Smaller elements for denser look
                this.size = this.isText ? Math.random() * 6 + 10 : Math.random() * 2 + 1;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                // Higher base opacity for better visibility
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Boundary Check
                if (this.x < -50) this.x = width + 50;
                if (this.x > width + 50) this.x = -50;
                if (this.y < -50) this.y = height + 50;
                if (this.y > height + 50) this.y = -50;

                this.draw(ctx);
            }

            draw(ctx) {
                ctx.save();
                ctx.globalAlpha = this.opacity;
                if (this.isText) {
                    ctx.font = `${this.size}px 'Courier New', monospace`;
                    ctx.fillStyle = colors.slate;
                    ctx.fillText(this.text, this.x, this.y);
                } else {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fillStyle = colors.mint;
                    ctx.fill();
                }
                ctx.restore();
            }
        }

        const initParticles = () => {
            particles = [];
            // Increased density: divider reduced from 15000 to 9000, cap increased to 150
            const particleCount = Math.min(Math.floor(width * height / 9000), 150);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };
        initParticles();

        // Animation Loop
        let animationFrameId;
        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Lerp mouse values for smooth camera
            // Current += (Target - Current) * factor
            mouse.current.x += (target.current.x - mouse.current.x) * 0.05;
            mouse.current.y += (target.current.y - mouse.current.y) * 0.05;

            // Apply CSS Transforms to layers
            const x = mouse.current.x; // -1 to 1
            const y = mouse.current.y; // -1 to 1

            // Layer 1: Glow (Furthest - moves least)
            if (glowRef.current) {
                glowRef.current.style.transform = `translate3d(${x * 5}px, ${y * 5}px, 0)`;
            }

            // Layer 2: Grid (Mid-ground)
            if (gridRef.current) {
                // Subtle tilt + translate
                gridRef.current.style.transform = `translate3d(${x * 10}px, ${y * 10}px, 0) rotateX(${y * 1}deg) rotateY(${x * 1}deg)`;
            }

            // Layer 3: Particles/Canvas (Closest - moves most)
            if (canvasRef.current) {
                // Stronger parallax (clamped to ~18px) + subtle 3D tilt
                canvasRef.current.style.transform = `translate3d(${x * 18}px, ${y * 18}px, 0) rotateX(${y * 2}deg) rotateY(${x * 2}deg)`;
            }

            // Draw Particles
            particles.forEach((p, i) => {
                p.update();
                // Connect lines
                if (!p.isText) {
                    particles.slice(i + 1).forEach(p2 => {
                        if (!p2.isText) {
                            const dx = p.x - p2.x;
                            const dy = p.y - p2.y;
                            const dist = Math.sqrt(dx * dx + dy * dy);
                            // Connectivity threshold reduced slightly to keep clean look with higher density
                            if (dist < 130) {
                                ctx.beginPath();
                                ctx.strokeStyle = `rgba(100, 255, 218, ${0.15 - dist / 1000})`;
                                ctx.moveTo(p.x, p.y);
                                ctx.lineTo(p2.x, p2.y);
                                ctx.stroke();
                            }
                        }
                    });
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        // Listeners
        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initParticles();
        };

        const handleMouseMove = (e) => {
            // Normalize to -1 to 1 range
            const normX = (e.clientX / window.innerWidth) * 2 - 1;
            const normY = (e.clientY / window.innerHeight) * 2 - 1;
            target.current = { x: normX, y: normY };
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="background-container">
            <div className="parallax-wrapper" ref={wrapperRef}>
                {/* Layer 1: Glow */}
                <div className="parallax-layer layer-glow" ref={glowRef}></div>

                {/* Layer 2: Grid */}
                <div className="parallax-layer layer-grid" ref={gridRef}></div>

                {/* Layer 3: Particles & Text */}
                <div className="parallax-layer layer-particles">
                    <canvas ref={canvasRef} className="background-canvas" />
                </div>
            </div>
        </div>
    );
};

export default Background;
