import React, { Suspense, useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Github, Linkedin, Mail, Phone, Code2, Zap, Rocket } from 'lucide-react';
import { personalInfo } from '../data/mockData';

extend({ PointMaterial });

const ParticleSystem = ({ scrollPos, isHovered }) => {
  const pointsRef = useRef();
  const count = 3000; // Number of orange dots

  // Create the two states: Ball and Spread
  const [sphereKernal, randomField] = useMemo(() => {
    const sphere = new Float32Array(count * 3);
    const random = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // 1. Create Sphere (Ball) positions
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      sphere[i * 3] = 1.5 * Math.cos(theta) * Math.sin(phi);
      sphere[i * 3 + 1] = 1.5 * Math.sin(theta) * Math.sin(phi);
      sphere[i * 3 + 2] = 1.5 * Math.cos(phi);

      // 2. Create Random Spread positions
      random[i * 3] = (Math.random() - 0.5) * 15;
      random[i * 3 + 1] = (Math.random() - 0.5) * 15;
      random[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return [sphere, random];
  }, []);

  useFrame((state) => {
    const positions = pointsRef.current.geometry.attributes.position.array;
    
    // Smoothly transition factor based on scroll
    // scrollPos 0 = Ball, scrollPos 1 = Spread
    const t = THREE.MathUtils.lerp(0, 1, scrollPos);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Morph between Sphere and Random
      positions[i3] = THREE.MathUtils.lerp(sphereKernal[i3], randomField[i3], t);
      positions[i3 + 1] = THREE.MathUtils.lerp(sphereKernal[i3 + 1], randomField[i3 + 1], t);
      positions[i3 + 2] = THREE.MathUtils.lerp(sphereKernal[i3 + 2], randomField[i3 + 2], t);
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Rotate the whole group slowly
    pointsRef.current.rotation.y += 0.002;
    pointsRef.current.rotation.x += 0.001;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={new Float32Array(count * 3)}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        color="#ff4d00"
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const SceneContent = ({ isHovered }) => {
  const groupRef = useRef();
  const { viewport } = useThree();
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // We normalize the scroll so that the transition happens quickly at the top
      const scrolled = window.scrollY / (window.innerHeight * 0.8);
      setScrollPos(Math.min(scrolled, 1)); // Cap at 1
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    const mouseX = (state.mouse.x * viewport.width) / 15;
    const mouseY = (state.mouse.y * viewport.height) / 15;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouseY, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouseX, 0.05);
  });

  return (
    <group ref={groupRef}>
      {/* The Core Wireframe that fades out as dots spread */}
      <mesh scale={1 - scrollPos}>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshBasicMaterial 
          color="#ff4d00" 
          wireframe 
          transparent 
          opacity={0.3 * (1 - scrollPos)} 
        />
      </mesh>
      
      <ParticleSystem scrollPos={scrollPos} isHovered={isHovered} />
    </group>
  );
};

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[150vh] flex items-start pt-32 bg-[#0a0502]">
      {/* 3D Background - Fixed so it stays while we scroll */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#ff4d00" />
          <Suspense fallback={null}>
            <SceneContent isHovered={isHovered} />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 max-w-[87.5rem] mx-auto px-8 w-full sticky top-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-[#ff4d00]/10 border border-[#ff4d00]/30 backdrop-blur-md">
              <span className="text-[#ff9d6e] uppercase text-xs tracking-[0.2em] font-bold">
                Full-Stack Mobile Developer
              </span>
            </div>

            <h1 className="font-black text-[clamp(3.5rem,9vw,6rem)] leading-[0.9] text-white uppercase italic tracking-tighter">
              {personalInfo.name.split(' ')[0]}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d00] to-[#ffaa00]">
                {personalInfo.name.split(' ')[1]}
              </span>
            </h1>

            <p className="text-[#ff9d6e] text-xl font-semibold border-l-2 border-[#ff4d00] pl-4">
              {personalInfo.tagline}
            </p>

            <div className="flex gap-4">
              <button
                onClick={scrollToProjects}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="bg-gradient-to-r from-[#ff4d00] to-[#ffaa00] text-white font-black px-10 py-5 transition-all hover:shadow-[0_0_40px_rgba(255,77,0,0.6)]"
              >
                VIEW PROJECTS
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Latency Cut', val: '65%', icon: <Zap /> },
              { label: 'Major Projects', val: '3+', icon: <Code2 /> },
              { label: 'Updates/Sec', val: '1.2k', icon: <Rocket /> },
              { label: 'Experience', val: '1+', icon: <Github /> }
            ].map((s, i) => (
              <div key={i} className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 hover:border-[#ff4d00]/60 transition-all">
                <div className="text-[#ff4d00] mb-4">{s.icon}</div>
                <div className="text-4xl font-black text-white">{s.val}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;