import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleDownloadResume = () => {
    window.open(personalInfo.resumeUrl, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#120a05]/80 backdrop-blur-lg border-b border-[#ff4d00]/20 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-[87.5rem] mx-auto px-8">
        <div className="flex justify-between items-center">
          {/* Logo with Orange Glow */}
          <button
            onClick={() => scrollToSection('hero')}
            className="group relative text-white font-black text-2xl tracking-tighter hover:text-[#ff4d00] transition-colors"
          >
            HB<span className="text-[#ff4d00]">.</span>
            <div className="absolute -inset-2 bg-[#ff4d00]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {['about', 'projects', 'skills', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-400 hover:text-[#ff4d00] transition-all font-bold text-xs uppercase tracking-[0.2em] relative group"
              >
                {section}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff4d00] transition-all group-hover:w-full" />
              </button>
            ))}
            
            <button
              onClick={handleDownloadResume}
              className="group relative overflow-hidden bg-gradient-to-r from-[#ff4d00] to-[#ffaa00] text-white px-7 py-3 rounded-sm font-black text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,77,0,0.4)] transition-all active:scale-95 flex items-center gap-2"
            >
              <Download size={16} className="group-hover:bounce" />
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#ff4d00] p-2 hover:bg-[#ff4d00]/10 rounded-sm transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#120a05] border-b border-[#ff4d00]/20 p-8 flex flex-col gap-6 animate-fadeIn">
            {['about', 'projects', 'skills', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-400 hover:text-[#ff4d00] transition-colors font-black text-lg uppercase tracking-widest text-left"
              >
                {section}
              </button>
            ))}
            <button
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-[#ff4d00] to-[#ffaa00] text-white px-6 py-4 rounded-sm font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3"
            >
              <Download size={20} />
              Resume
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;