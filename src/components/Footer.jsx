import React from 'react';
import { Github, Linkedin, Mail, Phone, Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-[#0a0a0a] border-t border-white/10 py-20 px-8">
      <div className="max-w-[87.5rem] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Mission */}
          <div className="md:col-span-2">
            <button 
              onClick={scrollToTop}
              className="text-white font-black text-3xl mb-6 tracking-tighter hover:text-[#ff4d00] transition-colors group flex items-center gap-2"
            >
              HB <span className="text-[#ff4d00] group-hover:animate-pulse">_</span>
            </button>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm uppercase tracking-wider font-medium">
              Architecting high-performance mobile deployments and digital ecosystems with a focus on speed, scale, and precision.
            </p>
          </div>

          {/* System Navigation */}
          <div>
            <h3 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8 text-[#ff4d00]">
              System Map
            </h3>
            <ul className="space-y-4">
              {['about', 'projects', 'skills', 'experience', 'contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item}`} 
                    className="text-gray-500 hover:text-white transition-colors text-xs uppercase font-bold tracking-widest flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-[#ff4d00] group-hover:w-4 transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Uplinks */}
          <div>
            <h3 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8 text-[#ff4d00]">
              Social Uplinks
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors text-xs font-bold"
              >
                <Github size={16} className="text-[#ff4d00]" /> GITHUB
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors text-xs font-bold"
              >
                <Linkedin size={16} className="text-[#ff4d00]" /> LINKEDIN
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors text-xs font-bold"
              >
                <Mail size={16} className="text-[#ff4d00]" /> EMAIL
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors text-xs font-bold"
              >
                <Phone size={16} className="text-[#ff4d00]" /> PHONE
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <p className="text-gray-600 text-[10px] font-black uppercase tracking-widest">
              © {currentYear} Harshil Buha 
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <p className="text-gray-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
              Built with <Heart size={12} className="text-[#ff4d00] fill-[#ff4d00]" /> 
              by <span className="text-white">Harshil Buha</span>
            </p>
            
            <button 
              onClick={scrollToTop}
              className="p-3 border border-white/10 hover:border-[#ff4d00] hover:text-[#ff4d00] transition-all group"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;