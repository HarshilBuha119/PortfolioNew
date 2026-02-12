import React from 'react';
import { MessageSquare, Star } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-[#1a1c1b] py-24 px-8">
      <div className="max-w-[87.5rem] mx-auto">
        {/* Section Label */}
        <div className="mb-6">
          <span className="text-[#888680] uppercase text-sm tracking-widest font-medium">
            What People Say
          </span>
        </div>

        {/* Section Title */}
        <h2 className="font-black text-[clamp(3rem,6vw,5rem)] leading-[0.85] text-[#d9fb06] uppercase mb-16">
          Testimonials
        </h2>

        {/* Empty State */}
        <div className="bg-[#302f2c] border border-[rgba(63,72,22,0.5)] p-16 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#1a1c1b] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare size={40} className="text-[#d9fb06]" />
            </div>
            <h3 className="text-[#d9fb06] font-bold text-2xl uppercase mb-4">
              Coming Soon
            </h3>
            <p className="text-[#888680] text-lg">
              Client testimonials and recommendations will be featured here soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
