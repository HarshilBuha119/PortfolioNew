import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Github, Linkedin, Mail, Phone, Code2, Zap, Rocket } from 'lucide-react';
import { personalInfo } from '../data/mockData';

extend({ PointMaterial });

const SceneContent = ({ isHovered }) => {
  const groupRef = useRef();
  const { viewport } = useThree();
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setScrollPos(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    const mouseX = (state.mouse.x * viewport.width) / 10;
    const mouseY = (state.mouse.y * viewport.height) / 10;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouseY + (scrollPos * 2), 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouseX + (scrollPos * 5), 0.05);

    const scale = isHovered ? 1.15 + Math.sin(state.clock.elapsedTime * 6) * 0.02 : 1;
    groupRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[5, 2]} />
        <meshBasicMaterial color="#ff4d00" wireframe transparent opacity={0.5} />
      </mesh>
      <Points>
        <sphereGeometry args={[2, 48, 48]} />
        <pointsMaterial
          transparent
          color="#ffaa00"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      {/* <Float speed={5} rotationIntensity={10} floatIntensity={0.5}>
        <mesh>
          <sphereGeometry args={[0.8, 64, 64]} />
          <MeshDistortMaterial
            color={isHovered ? "#ffffff" : "#ff6b00"}
            speed={isHovered ? 4 : 2}
            distort={0.5}
            radius={1}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float> */}
    </group>
  );
};

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 bg-[#120a05] transition-colors duration-500">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#ff4d00" />
          <pointLight position={[-10, -10, 10]} intensity={1} color="#ffaa00" />
          <Suspense fallback={null}>
            <SceneContent isHovered={isHovered} />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 max-w-[87.5rem] mx-auto px-8 py-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
          <div className="space-y-8">
            <div className="inline-block group cursor-default">
              <span className="text-[#ff9d6e] uppercase text-xs tracking-[0.2em] font-bold px-4 py-2 bg-[#ff4d00]/10 border border-[#ff4d00]/30 backdrop-blur-md transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,77,0,0.4)] group-hover:border-[#ff4d00]">
                Full-Stack Mobile Developer
              </span>
            </div>

            <div className="group cursor-default">
              <h1 className="font-black text-[clamp(3.5rem,9vw,6rem)] leading-[0.9] text-white uppercase mb-20 italic tracking-tighter">
                {personalInfo.name.split(' ')[0]}<br />
                <span className="text-transparent pr-2 bg-clip-text bg-gradient-to-r from-[#ff4d00] to-[#ffaa00]">
                  {personalInfo.name.split(' ')[1]}
                </span>
              </h1>
            </div>

            <p className="text-[#ff9d6e] text-xl font-semibold border-l-2 border-[#ff4d00] pl-4 transition-all hover:shadow-[0_0_15px_rgba(255,77,0,0.2)]">
              {personalInfo.tagline}
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => scrollToProjects()}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="bg-gradient-to-r from-[#ff4d00] to-[#ffaa00] text-white font-black px-10 py-5 rounded-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,77,0,0.6)] active:scale-95"
              >
                VIEW PROJECTS
              </button>
            </div>

            {/* Social Icons with Glow */}
            <div className="flex gap-5">
              {[Github, Linkedin, Mail, Phone].map((Icon, i) => (
                <div key={i} className="group p-2 rounded-full transition-all duration-300 hover:bg-[#ff4d00]/10 hover:shadow-[0_0_20px_rgba(255,77,0,0.3)]">
                  <Icon className="text-gray-500 group-hover:text-[#ff4d00] cursor-pointer transition-colors" size={24} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats with Heavy Glow */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Latency Cut', val: '65%', icon: <Zap /> },
              { label: 'Major Projects', val: '3+', icon: <Code2 /> },
              { label: 'Updates/Sec', val: '1.2k', icon: <Rocket /> },
              { label: 'Experience', val: '1+', icon: <Github /> }
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 transition-all duration-500 group hover:bg-[#ff4d00]/5 hover:border-[#ff4d00]/60 hover:shadow-[0_0_35px_rgba(255,77,0,0.25)] hover:-translate-y-2"
              >
                <div className="text-[#ff4d00] mb-4 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,77,0,0.8)] transition-all">
                  {s.icon}
                </div>
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