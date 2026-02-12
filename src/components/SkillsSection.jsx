import React from 'react';
import { skills } from '../data/mockData';
import { Badge } from './ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    { title: "Languages", skills: skills.languages, color: "#d9fb06" },
    { title: "Mobile Development", skills: skills.mobile, color: "#d9fb06" },
    { title: "State & Data", skills: skills.stateManagement, color: "#d9fb06" },
    { title: "Backend & APIs", skills: skills.backend, color: "#d9fb06" },
    { title: "Tools & Platforms", skills: skills.tools, color: "#d9fb06" },
    { title: "Data Science", skills: skills.dataScience, color: "#d9fb06" }
  ];

  return (
    <section id="skills" className="bg-[#1a1c1b] py-24 px-8">
      <div className="max-w-[87.5rem] mx-auto">
        {/* Section Label */}
        <div className="mb-6">
          <span className="text-[#888680] uppercase text-sm tracking-widest font-medium">
            Technical Expertise
          </span>
        </div>

        {/* Section Title */}
        <h2 className="font-black text-[clamp(3rem,6vw,5rem)] leading-[0.85] text-[#d9fb06] uppercase mb-16">
          Tech Stack
        </h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#302f2c] p-8 border border-[rgba(63,72,22,0.5)] hover:border-[#3f4816] transition-all hover:translate-y-[-4px]"
            >
              <h3 className="text-[#d9fb06] font-bold text-lg uppercase mb-6 tracking-wide">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="border-[#3f4816] text-[#d9fb06] bg-[#1a1c1b] hover:bg-[#3f4816] text-sm py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
