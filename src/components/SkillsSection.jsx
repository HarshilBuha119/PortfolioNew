import React from 'react';
import { skills } from '../data/mockData';
import { Badge } from './ui/badge';
import { Terminal } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    { title: "Languages", skills: skills.languages },
    { title: "Mobile Development", skills: skills.mobile },
    { title: "State & Data", skills: skills.stateManagement },
    { title: "Backend & APIs", skills: skills.backend },
    { title: "Tools & Platforms", skills: skills.tools },
    { title: "Data Science", skills: skills.dataScience }
  ];

  return (
    <section id="skills" className="relative z-10 bg-transparent py-20 px-8">
      <div className="max-w-[87.5rem] mx-auto">
        {/* Section Label */}
        <div className="mb-6">
          <span className="text-[#ff9d6e] uppercase text-xs tracking-[0.4em] font-bold px-3 py-1 bg-[#ff4d00]/10 border-l-2 border-[#ff4d00]">
            Skills
          </span>
        </div>
        {/* Section Label */}
        {/* <div className="flex items-center gap-4 mb-6">
          <div className="h-[2px] w-12 bg-[#ff4d00]"></div>
          <span className="text-[#ff9d6e] uppercase text-xs tracking-[0.5em] font-black">
            System Capabilities
          </span>
        </div> */}

        {/* Section Title */}
        <h2 className="font-black text-[clamp(3.5rem,8vw,6rem)] leading-[0.8] text-white uppercase mb-16 italic tracking-tighter">
          Tech
          <br />
          <span className="text-transparent pr-5 bg-clip-text bg-gradient-to-r from-[#ff4d00] via-[#ffaa00] to-[#ff4d00] animate-gradient-x">
            Stack
          </span>
        </h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white/[0.02] backdrop-blur-2xl p-10 border border-white/10 transition-all duration-500 transition-all duration-500 group hover:bg-[#ff4d00]/5 hover:border-[#ff4d00]/60 hover:shadow-[0_0_35px_rgba(255,77,0,0.25)] hover:-translate-y-2"
            >
              {/* ROTATING BORDER LIGHT (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="none"
                  stroke="#ff4d00"
                  strokeWidth="3"
                  className="animate-border-flow"
                />
              </svg>

              {/* TOP-RIGHT CORNER ACCENT & INDEX NUMBER */}
              <div className="absolute top-0 right-0 w-16 h-16 transition-all duration-500">
                {/* The Orange Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-bl from-[#ff4d00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* The Index Number - Pinned to Top Right */}
                <span className="absolute top-4 right-5 text-xl font-black text-white/10 group-hover:text-[#ff4d00] transition-colors duration-500 select-none">
                  0{index + 1}
                </span>
              </div>

              {/* CONTENT WRAPPER */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <Terminal size={18} className="text-[#ff4d00]" />
                  <h3 className="text-white font-black text-xl uppercase tracking-tighter group-hover:text-[#ff9d6e] transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="border-white/5 text-gray-400 bg-white/5 hover:border-[#ff4d00]/40 hover:text-white hover:bg-[#ff4d00]/10 transition-all text-[10px] uppercase tracking-widest font-bold py-1.5 px-3 rounded-none"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;