import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

const ThreeDTilt = ({ children, className, glare = true, tiltEnable = true, spotlight = false, scaleOnHover = true, shadowEnable = true, ...props }) => {
    const ref = useRef(null);

    // Mouse position relative to the element (0 to 1)
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    // Smooth spring animation for the tilt
    const springConfig = { damping: 30, stiffness: 500 };

    // Tilt values (Degrees)
    const rotateX = useSpring(useTransform(y, [0, 1], tiltEnable ? [15, -15] : [0, 0]), springConfig);
    const rotateY = useSpring(useTransform(x, [0, 1], tiltEnable ? [-15, 15] : [0, 0]), springConfig);

    const mouseXPct = useTransform(x, (val) => val * 100 + "%");
    const mouseYPct = useTransform(y, (val) => val * 100 + "%");
    const spotlightBg = useMotionTemplate`radial-gradient(600px circle at ${mouseXPct} ${mouseYPct}, rgba(212, 175, 55, 0.15), transparent 80%)`;

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const clientX = e.clientX;
        const clientY = e.clientY;
        const newX = (clientX - rect.left) / rect.width;
        const newY = (clientY - rect.top) / rect.height;
        x.set(newX);
        y.set(newY);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0.5);
        y.set(0.5);
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                ...props.style,
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 1000
            }}
            animate={{
                // If scaleOnHover is false, scale stays at 1
                scale: isHovered && scaleOnHover ? 1.05 : 1,
                // Golden highlight shadow + border glow on hover
                // "Remove distance" -> 0 offset. "Show all sides" -> Centered glow.
                boxShadow: isHovered && shadowEnable
                    ? "0 0 40px 5px rgba(212, 175, 55, 0.5)"
                    : "0 0 0 rgba(0,0,0,0)",
                borderColor: isHovered && shadowEnable
                    ? "rgba(212, 175, 55, 0.6)"
                    : "transparent"
            }}
            transition={{
                scale: { type: "spring", stiffness: 400, damping: 30 },
                boxShadow: { duration: 0.3, ease: "easeOut" },
                borderColor: { duration: 0.3, ease: "easeOut" }
            }}
            {...props}
        >
            <div style={{ transform: "translateZ(30px)" }}>
                {children}
            </div>

            {/* Gloss/Glare Effect */}
            {glare && (
                <motion.div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: "inherit",
                        background: "linear-gradient(125deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)",
                        opacity: isHovered ? 1 : 0,
                        pointerEvents: "none",
                        zIndex: 10,
                    }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.1 }}
                />
            )}

            {/* Spotlight Effect */}
            {spotlight && (
                <motion.div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: "inherit",
                        background: spotlightBg,
                        opacity: isHovered ? 1 : 0,
                        pointerEvents: "none",
                        zIndex: 10,
                    }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            )}
        </motion.div>
    );
};

export default ThreeDTilt;
