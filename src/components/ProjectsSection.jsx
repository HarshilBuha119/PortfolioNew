import React from 'react';
import { ExternalLink, Github, Zap } from 'lucide-react';
import { projects } from '../data/mockData';
import { Badge } from './ui/badge';

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-[#1a1c1b] py-24 px-8">
      <div className="max-w-[87.5rem] mx-auto">
        {/* Section Label */}
        <div className="mb-6">
          <span className="text-[#888680] uppercase text-sm tracking-widest font-medium">
            Featured Work
          </span>
        </div>

        {/* Section Title */}
        <h2 className="font-black text-[clamp(3rem,6vw,5rem)] leading-[0.85] text-[#d9fb06] uppercase mb-16">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid md:grid-cols-2 gap-8 items-stretch ${index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
            >
              {/* Project Image */}
              <div
                className={`relative h-[800px] overflow-hidden group ${index % 2 === 1 ? "md:col-start-2" : ""
                  }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1b] via-transparent to-transparent opacity-60" />
              </div>

              {/* Project Details */}
              <div
                className={`bg-[#302f2c] p-8 flex flex-col justify-between border border-[rgba(63,72,22,0.5)] hover:border-[#3f4816] transition-colors ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''
                  }`}
              >
                <div>
                  {/* Project Title */}
                  <h3 className="text-[#d9fb06] font-black text-2xl md:text-3xl uppercase mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#888680] text-sm uppercase tracking-wide mb-6">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-[#d9fb06] text-base mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <h4 className="text-[#d9fb06] font-bold text-sm uppercase mb-3 flex items-center gap-2">
                      <Zap size={16} /> Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-[#888680] text-sm flex items-start gap-2">
                          <span className="text-[#d9fb06] mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Performance Metrics */}
                  <div className="bg-[#1a1c1b] p-4 rounded mb-6">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="mb-2 last:mb-0">
                        <span className="text-[#d9fb06] font-bold text-lg">{value}</span>
                        <span className="text-[#888680] text-xs uppercase ml-2">({key})</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-[#3f4816] text-[#d9fb06] bg-transparent hover:bg-[#3f4816] text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    className="flex-1 bg-[#d9fb06] text-[#1a1c1b] px-6 py-3 rounded-full font-bold text-sm uppercase hover:scale-105 active:scale-95 transition-transform flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="border border-[#d9fb06] text-[#d9fb06] px-6 py-3 rounded-full font-bold text-sm uppercase hover:bg-[#d9fb06] hover:text-[#1a1c1b] transition-all flex items-center justify-center gap-2"
                  >
                    <Github size={16} />
                    Code
                  </a>
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
