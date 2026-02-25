import React, { useState } from 'react';
import { Github, ArrowUpRight, ChevronDown, ChevronUp, Zap, BarChart2 } from 'lucide-react';
import { projects } from '../data/mockData';

const ProjectsSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="relative z-10 bg-transparent py-10 px-8">
      <div className="max-w-[75rem] mx-auto">

        {/* Section Label */}
        <div className="mb-6">
          <span className="text-[#ff9d6e] uppercase text-xs tracking-[0.4em] font-bold px-3 py-1 bg-[#ff4d00]/10 border-l-2 border-[#ff4d00]">
            Projects
          </span>
        </div>

        {/* Section Title */}
        <h2 className="font-black text-[clamp(3.3rem,9vw,6rem)] leading-[0.8] text-white uppercase mb-20 italic tracking-tighter">
          Featured<br />
          <span className="text-transparent pr-5 bg-clip-text text-[clamp(3.3rem,7vw,5.5rem)] bg-gradient-to-r from-[#ff4d00] via-[#ffaa00] to-[#ff4d00]">
            Deployments
          </span>
        </h2>

        {/* Projects List */}
        <div className="flex flex-col gap-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              } gap-12 items-start group`}
            >
              {/* ── Image Side ── */}
              <div className="relative w-full md:w-1/2 overflow-hidden border border-white/10 bg-[#1a1a1a] self-start sticky top-10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-fill grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#120a05]/20 group-hover:bg-transparent transition-colors duration-500" />

                {/* Index badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm border border-white/10 px-3 py-1">
                  <span className="text-[#ff4d00] font-mono text-xs font-bold">0{index + 1}</span>
                </div>
              </div>

              {/* ── Details Side ── */}
              <div className="w-full md:w-1/2">
                <div className="relative bg-[#1a1a1a]/80 backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-500 hover:bg-[#ff4d00]/5 hover:border-[#ff4d00]/60 hover:shadow-[0_0_35px_rgba(255,77,0,0.25)] hover:-translate-y-2">

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#ff4d00]/10 to-transparent pointer-events-none" />

                  {/* ── Main Info Block ── */}
                  <div className="p-10 pb-6">

                    {/* Title */}
                    <h3 className="text-white font-black text-3xl md:text-4xl uppercase tracking-tighter leading-none mb-3">
                      {project.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-[#ff9d6e] text-[10px] font-bold uppercase tracking-[0.3em] mb-5">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-7">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] text-white/50 border border-white/10 px-2 py-1 bg-white/5 uppercase tracking-widest font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* ── Metrics Grid ── */}
                    {project.metrics && Object.keys(project.metrics).length > 0 && (
                      <div className="mb-8">
                        {/* Metrics label */}
                        <div className="flex items-center gap-2 mb-3">
                          <BarChart2 size={11} className="text-[#ff4d00]" />
                          <span className="text-[8px] text-[#ff4d00] uppercase tracking-[0.4em] font-black">
                            Metrics
                          </span>
                          <div className="flex-1 h-px bg-[#ff4d00]/20" />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          {Object.entries(project.metrics).map(([key, value]) => (
                            <div
                              key={key}
                              className="bg-[#ff4d00]/5 border border-[#ff4d00]/20 px-4 py-3"
                            >
                              <span className="block text-[8px] text-[#ff4d00]/70 uppercase tracking-[0.25em] font-black mb-1">
                                {key}
                              </span>
                              <p className="text-white/80 text-[11px] font-bold leading-snug">
                                {value}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ── Action Buttons ── */}
                    <div className="flex gap-6 items-center mb-2">
                      {project.liveLink && project.liveLink !== '#' ? (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn relative overflow-hidden bg-white text-black px-8 py-4 font-black text-[10px] uppercase tracking-widest transition-all duration-300"
                        >
                          <span className="relative z-10 flex items-center gap-2 group-hover/btn:text-white transition-colors duration-300">
                            Execute Demo <ArrowUpRight size={14} />
                          </span>
                          <div className="absolute inset-0 bg-[#ff4d00] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                        </a>
                      ) : (
                        <span className="bg-white/10 text-white/30 px-8 py-4 font-black text-[10px] uppercase tracking-widest cursor-not-allowed border border-white/10 flex items-center gap-2">
                          Coming Soon <ArrowUpRight size={14} />
                        </span>
                      )}

                      {project.githubLink && project.githubLink !== '#' ? (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/40 hover:text-[#ff4d00] transition-colors duration-300"
                          aria-label={`GitHub repo for ${project.title}`}
                        >
                          <Github size={22} />
                        </a>
                      ) : (
                        <span className="text-white/20 cursor-not-allowed" title="Private repository">
                          <Github size={22} />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* ── Highlights Accordion ── */}
                  {project.highlights && project.highlights.length > 0 && (
                    <>
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="w-full flex items-center justify-between px-10 py-4 border-t border-white/10 text-white/40 hover:text-[#ff9d6e] hover:bg-[#ff4d00]/5 transition-all duration-300"
                      >
                        <div className="flex items-center gap-2">
                          <Zap size={12} className="text-[#ff4d00]" />
                          <span className="text-[9px] uppercase tracking-[0.4em] font-black">
                            Key Highlights
                          </span>
                          <span className="text-[9px] font-mono text-[#ff4d00]/60">
                            [{project.highlights.length}]
                          </span>
                        </div>
                        {expandedId === project.id
                          ? <ChevronUp size={14} className="text-[#ff4d00]" />
                          : <ChevronDown size={14} />
                        }
                      </button>

                      {/* Animated panel */}
                      <div
                        className="overflow-hidden transition-all duration-500 ease-in-out"
                        style={{
                          maxHeight: expandedId === project.id ? '600px' : '0px',
                          opacity: expandedId === project.id ? 1 : 0,
                        }}
                      >
                        <ul className="px-10 pt-5 pb-8 flex flex-col gap-3 border-t border-white/5">
                          {project.highlights.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 group/item">
                              {/* Square bullet */}
                              <div className="mt-[7px] shrink-0 w-1.5 h-1.5 bg-[#ff4d00] group-hover/item:scale-150 transition-transform duration-200" />
                              <p className="text-gray-400 text-[12px] leading-relaxed group-hover/item:text-white/80 transition-colors duration-200">
                                {item}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;