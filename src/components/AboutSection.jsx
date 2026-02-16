import React from 'react';
import { Code2, Zap, Target } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code2 size={32} />,
      title: "Technical Excellence",
      description: "Expert in React Native, performance optimization, and building scalable mobile architectures"
    },
    {
      icon: <Zap size={32} />,
      title: "Performance Focused",
      description: "Reduced API latency by 65% and achieved sub-second data operations through smart optimization"
    },
    {
      icon: <Target size={32} />,
      title: "Real-World Impact",
      description: "Delivered production-ready apps handling 1,000+ updates/second and 10K+ records"
    }
  ];

  return (
    <section id="about" className="relative z-10 py-24 px-8 bg-transparent">
      <div className="max-w-[87.5rem] mx-auto">
        
        {/* Section Label */}
        <div className="mb-6">
          <span className="text-[#ff9d6e] uppercase text-xs tracking-[0.4em] font-bold px-3 py-1 bg-[#ff4d00]/10 border-l-2 border-[#ff4d00]">
            About Me
          </span>
        </div>

        {/* Section Title */}
        <h2 className="font-black text-[clamp(3rem,6vw,5rem)] leading-[0.85] text-white uppercase mb-16">
          Building The
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d00] to-[#ffaa00]">
            Future of Mobile
          </span>
        </h2>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-6">
            <p className="text-[#ff9d6e] text-xl md:text-2xl font-semibold leading-relaxed">
              {personalInfo.about}
            </p>
            <p className="text-gray-400 text-lg leading-relaxed border-l border-white/10 pl-6">
              Currently working at <span className="text-white font-bold">DotPitch Technologies</span>. I specialize in high-performance mobile apps and real-time features.
            </p>
          </div>

          {/* Quick Stats - Styled EXACTLY like Hero Stats */}
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-10 group hover:border-[#ff4d00]/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,77,0,0.15)]">
            <h3 className="text-white font-black text-xl mb-8 uppercase tracking-widest border-b border-[#ff4d00]/20 pb-2">
              System Metrics
            </h3>
            <div className="space-y-8">
              {[
                { val: "65%", label: "API Latency Reduction" },
                { val: "60%", label: "Bug Reduction with Redux" },
                { val: "1K+", label: "Updates/Second" }
              ].map((stat, i) => (
                <div key={i} className="group/item">
                  <div className="text-[#ff4d00] text-4xl font-black group-hover/item:scale-105 transition-transform origin-left group-hover/item:drop-shadow-[0_0_10px_rgba(255,77,0,0.5)]">
                    {stat.val}
                  </div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-widest mt-1 font-bold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights Cards - Styled EXACTLY like Hero Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white/[0.03] backdrop-blur-xl p-10 border border-white/10 transition-all duration-500 group hover:bg-[#ff4d00]/5 hover:border-[#ff4d00]/60 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(255,77,0,0.25)]"
            >
              <div className="text-[#ff4d00] mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,77,0,0.6)] transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-white font-black text-lg mb-4 uppercase tracking-tighter">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;