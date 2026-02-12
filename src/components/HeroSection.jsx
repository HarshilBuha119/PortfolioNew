import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, Code2, Zap, Rocket } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = Math.min(window.innerHeight * 0.9, 650);

    // Particle system for animated background
    const particles = [];
    const particleCount = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(217, 251, 6, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    function animate() {
      ctx.fillStyle = 'rgba(26, 28, 27, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(217, 251, 6, ${0.15 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.min(window.innerHeight * 0.9, 650);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-[#1a1c1b] overflow-hidden min-h-screen flex items-center">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-64 h-64 border-2 border-[#3f4816] opacity-20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-[15%] w-48 h-48 border-2 border-[#d9fb06] opacity-10 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[87.5rem] mx-auto px-8 py-16 md:py-20 w-full">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 md:space-y-8 animate-fadeInUp">
            {/* Small Label */}
            <div className="inline-block">
              <span className="text-[#888680] uppercase text-xs tracking-[0.2em] font-bold px-4 py-2 bg-[#302f2c] border border-[#3f4816]">
                Full-Stack Mobile Developer
              </span>
            </div>

            {/* Main Heading with Gradient Effect */}
            <div>
              <h1 className="font-black text-[clamp(3rem,6vw,6rem)] leading-[0.9] text-[#d9fb06] uppercase mb-3 tracking-tight animate-slideInLeft">
                {personalInfo.name.split(' ')[0]}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d9fb06] to-[#888680]">
                  {personalInfo.name.split(' ')[1]}
                </span>
              </h1>
              
              {/* Animated Underline */}
              <div className="h-1 w-24 bg-gradient-to-r from-[#d9fb06] to-transparent animate-slideInLeft"></div>
            </div>

            {/* Tagline */}
            <p className="text-[#d9fb06] text-lg md:text-xl font-semibold leading-tight max-w-[25ch] animate-fadeIn">
              {personalInfo.tagline}
            </p>

            {/* Description */}
            <p className="text-[#888680] text-sm md:text-base leading-relaxed max-w-[50ch] animate-fadeIn">
              Specialized in performance optimization, real-time systems, and creating seamless mobile experiences. Proven track record of reducing API latency by <span className="text-[#d9fb06] font-bold">65%</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 md:gap-4 animate-fadeInUp">
              <button
                onClick={scrollToProjects}
                className="group bg-[#d9fb06] text-[#1a1c1b] px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm uppercase hover:shadow-[0_0_20px_rgba(217,251,6,0.5)] transition-all duration-300 flex items-center gap-2"
              >
                <Rocket size={18} className="group-hover:translate-x-1 transition-transform" />
                View Projects
              </button>
              <a
                href={`mailto:${personalInfo.email}`}
                className="border-2 border-[#d9fb06] text-[#d9fb06] px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm uppercase hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 md:gap-4 pt-2 animate-fadeInUp">
              {[
                { Icon: Github, href: personalInfo.github, label: 'GitHub' },
                { Icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { Icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
                { Icon: Phone, href: `tel:${personalInfo.phone}`, label: 'Phone' }
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label === 'GitHub' || label === 'LinkedIn' ? '_blank' : undefined}
                  rel={label === 'GitHub' || label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  className="group bg-[#302f2c] p-3 md:p-4 rounded-lg border border-[#3f4816] text-[#888680] hover:text-[#d9fb06] hover:border-[#d9fb06] hover:shadow-[0_0_15px_rgba(217,251,6,0.2)] transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Stats & Highlights */}
          <div className="space-y-4 md:space-y-6 animate-fadeInRight">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                { icon: <Zap size={28} />, stat: '65%', label: 'API Latency Cut' },
                { icon: <Code2 size={28} />, stat: '3+', label: 'Major Projects' },
                { icon: <Rocket size={28} />, stat: '1K+', label: 'Updates/Second' },
                { icon: <Github size={28} />, stat: '2+', label: 'Years Experience' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#302f2c] border border-[#3f4816] p-4 md:p-6 rounded-lg hover:border-[#d9fb06] hover:shadow-[0_0_20px_rgba(217,251,6,0.15)] transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-[#d9fb06] mb-2 md:mb-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="text-[#d9fb06] text-2xl md:text-3xl font-black mb-1">{item.stat}</div>
                  <div className="text-[#888680] text-xs uppercase tracking-wide">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Tech Highlights */}
            <div className="bg-gradient-to-br from-[#302f2c] to-[#1a1c1b] border border-[#3f4816] p-6 md:p-8 rounded-lg">
              <h3 className="text-[#d9fb06] font-bold text-base md:text-lg uppercase mb-3 md:mb-4">Core Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['React Native', 'Node.js', 'Firebase', 'WebSockets', 'Redux', 'MongoDB'].map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 md:px-4 py-1.5 md:py-2 bg-[#1a1c1b] border border-[#3f4816] text-[#d9fb06] text-xs md:text-sm font-medium rounded-full hover:border-[#d9fb06] hover:shadow-[0_0_10px_rgba(217,251,6,0.2)] transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1c1b] to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
