import React from 'react';
import { Github, Zap, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/mockData';

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative z-10 bg-transparent py-10 px-8">
      <div className="max-w-[75rem] mx-auto"> {/* Tightened container for better focus */}
        {/* Section Label */}
        <div className="mb-6">
          <span className="text-[#ff9d6e] uppercase text-xs tracking-[0.4em] font-bold px-3 py-1 bg-[#ff4d00]/10 border-l-2 border-[#ff4d00]">
            Projects
          </span>
        </div>
        {/* Section Label */}
        {/* <div className="flex items-center gap-4 mb-6">
          <div className="h-[2px] w-12 bg-[#ff4d00]"></div>
          <span className="text-[#ff9d6e] uppercase text-xs tracking-[0.5em] font-black">
            Archive / 2024
          </span>
        </div> */}

        {/* Section Title */}
        <h2 className="font-black text-[clamp(3.3rem,9vw,6rem)] leading-[0.8] text-white uppercase mb-20 italic tracking-tighter">
          Featured<br />
          <span className="text-transparent pr-5 bg-clip-text text-[clamp(3.3rem,7vw,5.5rem)] l bg-gradient-to-r from-[#ff4d00] via-[#ffaa00] to-[#ff4d00] animate-gradient-x">
            Deployments
          </span>
        </h2>

        {/* Projects List */}
        <div className="flex flex-col gap-20"> {/* Using Flex Column for perfect alignment */}
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                } gap-12 items-center group`}
            >
              {/* Project Image Box (Edgy & Sharp) */}
              <div className="relative w-full md:w-1/2 overflow-hidden border border-white/10 clip-path-edgy bg-[#1a1a1a]">
                {/* Shiny Shimmer Overlay */}
                <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-stretch grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[#120a05]/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Project Details (Perfectly Aligned Card) */}
              <div className="w-full md:w-1/2">
                <div className="relative bg-[#1a1a1a]/80 backdrop-blur-2xl p-10 border border-white/10 shadow-2xl transition-all duration-500 transition-all duration-500 group hover:bg-[#ff4d00]/5 hover:border-[#ff4d00]/60 hover:shadow-[0_0_35px_rgba(255,77,0,0.25)] hover:-translate-y-2">

                  {/* Edgy Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#ff4d00]/10 to-transparent" />

                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-white font-black text-3xl md:text-4xl uppercase tracking-tighter leading-none">
                      {project.title}
                    </h3>
                    <span className="text-[#ff4d00] font-mono text-sm">0{index + 1}</span>
                  </div>

                  <p className="text-[#ff9d6e] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                    {project.subtitle}
                  </p>

                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Tech Grid */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="text-[9px] text-white/50 border border-white/10 px-2 py-1 bg-white/5 uppercase tracking-widest font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Shiny Actions */}
                  <div className="flex gap-6 items-center">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative overflow-hidden bg-white text-black px-8 py-4 font-black text-[10px] uppercase tracking-widest transition-all"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Execute Demo <ArrowUpRight size={14} />
                      </span>
                      <div className="absolute inset-0 bg-[#ff4d00] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                    </a>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-[#ff4d00] transition-colors"
                    >
                      <Github size={22} />
                    </a>
                  </div>
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