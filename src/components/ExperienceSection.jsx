import React from 'react';
import { Briefcase, MapPin, TrendingUp } from 'lucide-react';
import { experience, education, certifications } from '../data/mockData';

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-[#1a1c1b] py-24 px-8">
      <div className="max-w-[87.5rem] mx-auto">
        {/* Section Label */}
        <div className="mb-6">
          <span className="text-[#888680] uppercase text-sm tracking-widest font-medium">
            Career Journey
          </span>
        </div>

        {/* Section Title */}
        <h2 className="font-black text-[clamp(3rem,6vw,5rem)] leading-[0.85] text-[#d9fb06] uppercase mb-16">
          Experience
        </h2>

        {/* Experience Timeline */}
        <div className="mb-20">
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Line */}
                {index !== experience.length - 1 && (
                  <div className="absolute left-[15px] top-[60px] bottom-[-48px] w-[2px] bg-[#3f4816]"></div>
                )}

                <div className="flex gap-6">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0">
                    <div className="w-[32px] h-[32px] rounded-full bg-[#d9fb06] flex items-center justify-center">
                      <Briefcase size={16} className="text-[#1a1c1b]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-[#302f2c] p-8 border border-[rgba(63,72,22,0.5)] hover:border-[#3f4816] transition-colors">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-[#d9fb06] font-black text-2xl uppercase mb-2">
                          {exp.position}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-[#888680] text-sm">
                          <span className="font-bold">{exp.company}</span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[#d9fb06] font-bold text-sm">{exp.period}</div>
                        <div className="text-[#888680] text-xs uppercase">{exp.type}</div>
                      </div>
                    </div>

                    {/* Impact Badge */}
                    <div className="bg-[#1a1c1b] inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6">
                      <TrendingUp size={16} className="text-[#d9fb06]" />
                      <span className="text-[#d9fb06] font-bold text-sm">{exp.impact}</span>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-[#888680] text-sm flex items-start gap-3">
                          <span className="text-[#d9fb06] mt-1 flex-shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-[#302f2c] p-8 border border-[rgba(63,72,22,0.5)]">
            <h3 className="text-[#d9fb06] font-bold text-xl uppercase mb-6">Education</h3>
            <div>
              <div className="text-[#d9fb06] font-bold text-lg mb-2">{education.degree}</div>
              <div className="text-[#888680] text-sm mb-1">{education.university}</div>
              <div className="text-[#888680] text-sm flex items-center gap-2">
                <MapPin size={14} />
                {education.location}
              </div>
              <div className="text-[#d9fb06] text-sm font-bold mt-4">{education.period}</div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-[#302f2c] p-8 border border-[rgba(63,72,22,0.5)]">
            <h3 className="text-[#d9fb06] font-bold text-xl uppercase mb-6">Certifications</h3>
            <ul className="space-y-3">
              {certifications.map((cert, idx) => (
                <li key={idx} className="text-[#888680] text-sm flex items-start gap-3">
                  <span className="text-[#d9fb06] mt-1 flex-shrink-0">•</span>
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
