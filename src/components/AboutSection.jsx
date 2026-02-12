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
    <section id="about" className="bg-[#1a1c1b] py-24 px-8">
      <div className="max-w-[87.5rem] mx-auto">
        {/* Section Label */}
        <div className="mb-6">
          <span className="text-[#888680] uppercase text-sm tracking-widest font-medium">
            About Me
          </span>
        </div>

        {/* Section Title */}
        <h2 className="font-black text-[clamp(3rem,6vw,5rem)] leading-[0.85] text-[#d9fb06] uppercase mb-12">
          Building The
          <br />
          Future of
          <br />
          Mobile
        </h2>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <p className="text-[#d9fb06] text-lg md:text-xl font-medium mb-6 leading-relaxed">
              {personalInfo.about}
            </p>
            <p className="text-[#888680] text-base leading-relaxed">
              Currently working at DotPitch Technologies, I specialize in creating high-performance mobile applications that solve real-world problems. My expertise spans from building secure authentication systems to implementing real-time features that handle thousands of concurrent operations.
            </p>
          </div>

          <div className="bg-[#302f2c] p-8 rounded-lg">
            <h3 className="text-[#d9fb06] font-bold text-xl mb-4 uppercase">Quick Stats</h3>
            <div className="space-y-4">
              <div>
                <div className="text-[#d9fb06] text-3xl font-black">65%</div>
                <div className="text-[#888680] text-sm">API Latency Reduction</div>
              </div>
              <div className="h-px bg-[#3f4816]"></div>
              <div>
                <div className="text-[#d9fb06] text-3xl font-black">60%</div>
                <div className="text-[#888680] text-sm">Bug Reduction with Redux Toolkit</div>
              </div>
              <div className="h-px bg-[#3f4816]"></div>
              <div>
                <div className="text-[#d9fb06] text-3xl font-black">1K+</div>
                <div className="text-[#888680] text-sm">Updates/Second Processed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-[#302f2c] p-8 hover:bg-[#3f4816] transition-colors border border-[rgba(63,72,22,0.5)]"
            >
              <div className="text-[#d9fb06] mb-4">{item.icon}</div>
              <h3 className="text-[#d9fb06] font-bold text-lg mb-3 uppercase">{item.title}</h3>
              <p className="text-[#888680] text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
