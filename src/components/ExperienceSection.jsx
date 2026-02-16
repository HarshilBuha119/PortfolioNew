import React from 'react';
import { Briefcase, MapPin, TrendingUp, GraduationCap, Award } from 'lucide-react';
import { experience, education, certifications } from '../data/mockData';

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative z-10 bg-transparent py-32 px-8">
      <div className="max-w-[75rem] mx-auto">
        
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[2px] w-12 bg-[#ff4d00]"></div>
          <span className="text-[#ff9d6e] uppercase text-xs tracking-[0.5em] font-black">
            Career Journey
          </span>
        </div>

        {/* Section Title */}
        <h2 className="font-black text-[clamp(3.5rem,8vw,6rem)] leading-[0.8] text-white uppercase mb-24 italic tracking-tighter">
          Work<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d00] via-[#ffaa00] to-[#ff4d00] animate-gradient-x">
            History
          </span>
        </h2>

        {/* Experience Timeline */}
        <div className="mb-32">
          <div className="space-y-16">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative group">
                {/* Glowing Vertical Line */}
                {index !== experience.length - 1 && (
                  <div className="absolute left-[15px] top-[60px] bottom-[-64px] w-[2px] bg-gradient-to-b from-[#ff4d00] to-transparent opacity-20 group-hover:opacity-100 transition-opacity duration-500"></div>
                )}

                <div className="flex gap-8 md:gap-12">
                  {/* Timeline Node */}
                  <div className="relative flex-shrink-0">
                    <div className="w-[32px] h-[32px] bg-black border-2 border-[#ff4d00] flex items-center justify-center relative z-10 group-hover:shadow-[0_0_15px_#ff4d00] transition-all">
                      <Briefcase size={14} className="text-[#ff4d00]" />
                    </div>
                    {/* Pulsing Aura */}
                    <div className="absolute inset-0 w-[32px] h-[32px] bg-[#ff4d00] animate-ping opacity-20 rounded-full group-hover:opacity-40"></div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white/[0.02] backdrop-blur-2xl p-8 md:p-10 border border-white/10 hover:border-[#ff4d00]/50 transition-all duration-500 relative overflow-hidden">
                    
                    {/* Shiny Top Border Shimmer */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff4d00]/50 to-transparent -translate-x-full group-hover:animate-shimmer" />

                    <div className="flex flex-wrap justify-between items-start mb-6 gap-4">
                      <div>
                        <h3 className="text-white font-black text-2xl md:text-3xl uppercase tracking-tighter mb-2 group-hover:text-[#ff9d6e] transition-colors">
                          {exp.position}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-gray-500 text-xs font-bold uppercase tracking-widest">
                          <span className="text-white/80">{exp.company}</span>
                          <span className="flex items-center gap-1">
                            <MapPin size={12} className="text-[#ff4d00]" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <div className="text-left md:text-right">
                        <div className="text-[#ff4d00] font-mono text-sm font-bold tracking-tighter">{exp.period}</div>
                        <div className="text-gray-600 text-[10px] uppercase font-black tracking-[0.2em]">{exp.type}</div>
                      </div>
                    </div>

                    {/* Impact Metric */}
                    <div className="bg-[#ff4d00]/10 border-l-2 border-[#ff4d00] inline-flex items-center gap-3 px-4 py-2 mb-8">
                      <TrendingUp size={14} className="text-[#ff4d00]" />
                      <span className="text-[#ff9d6e] font-black text-[10px] uppercase tracking-widest">{exp.impact}</span>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-4">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-start gap-4 leading-relaxed group/li">
                          <span className="text-[#ff4d00] font-bold mt-0.5">/</span>
                          <span className="group-hover/li:text-gray-200 transition-colors">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="relative group bg-white/[0.02] backdrop-blur-2xl p-10 border border-white/10 hover:border-[#ff4d00]/30 transition-all">
            <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="text-[#ff4d00]" size={24} />
                <h3 className="text-white font-black text-xl uppercase tracking-tighter">Education</h3>
            </div>
            <div>
              <div className="text-[#ff9d6e] font-black text-lg uppercase leading-none mb-3 tracking-tighter">{education.degree}</div>
              <div className="text-gray-400 text-sm font-bold mb-4 uppercase tracking-widest">{education.university}</div>
              <div className="text-gray-500 text-xs flex items-center gap-2 mb-6 uppercase tracking-widest font-medium">
                <MapPin size={12} className="text-[#ff4d00]" />
                {education.location}
              </div>
              <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-[#ff4d00] text-xs font-mono font-bold">
                {education.period}
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="relative group bg-white/[0.02] backdrop-blur-2xl p-10 border border-white/10 hover:border-[#ff4d00]/30 transition-all">
            <div className="flex items-center gap-3 mb-8">
                <Award className="text-[#ff4d00]" size={24} />
                <h3 className="text-white font-black text-xl uppercase tracking-tighter">Certifications</h3>
            </div>
            <ul className="space-y-4">
              {certifications.map((cert, idx) => (
                <li key={idx} className="text-gray-400 text-xs flex items-start gap-3 uppercase tracking-widest leading-tight font-bold group/cert">
                  <span className="text-[#ff4d00] opacity-50 group-hover/cert:opacity-100 transition-opacity">0{idx + 1}</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;