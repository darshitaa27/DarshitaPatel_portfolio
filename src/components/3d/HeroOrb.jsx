import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const HeroOrb = () => {
    const mesh = useRef();

    useFrame((state) => {
        if (!mesh.current) return;

        // Mouse position normalized (-1 to 1)
        const { x, y } = state.pointer;

        // Smoothly interpolate rotation to target mouse position
        // "3D object moves/tilts the most"
        const targetRotX = -y * 0.5; // Invert Y for natural feel
        const targetRotY = x * 0.5;

        // Lerp current rotation to target
        mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, targetRotX, 0.1);
        mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, targetRotY, 0.1);

        // Add a gentle base floating rotation
        mesh.current.rotation.z += 0.002;
    });

    return (
        <Sphere ref={mesh} args={[1, 100, 200]} scale={2.2}>
            <MeshDistortMaterial
                color="#64ffda"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.2}
                metalness={0.8}
                wireframe={true}
            />
        </Sphere>
    );
};

export default HeroOrb;
