import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import heroImg from '../../assets/hero_profile_v5.png';

const HeroVisual = () => {
    const mesh = useRef();
    const texture = useTexture(heroImg);

    useFrame((state) => {
        if (!mesh.current) return;

        // Mouse position normalized (-1 to 1)
        const { x, y } = state.pointer;

        // Gentle Parallax/Tilt
        const targetRotX = -y * 0.05;
        const targetRotY = x * 0.05;
        const targetPosX = x * 0.1;
        const targetPosY = y * 0.1;

        const lerpFactor = 0.08;

        mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, targetRotX, lerpFactor);
        mesh.current.rotation.y = THREE.MathUtils.lerp(mesh.current.rotation.y, targetRotY, lerpFactor);
        mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, targetPosX, lerpFactor);
        mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, targetPosY, lerpFactor);
    });

    return (
        <mesh ref={mesh} scale={4.5}>
            <planeGeometry args={[1.5, 1.5]} />
            <meshBasicMaterial
                map={texture}
                transparent={true}
                side={THREE.DoubleSide}
                depthWrite={false}
            />
        </mesh>
    );
};

export default HeroVisual;
