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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1a1c1b] shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[87.5rem] mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-[#d9fb06] font-bold text-xl tracking-tight hover:opacity-80 transition-opacity"
          >
            HB
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#d9fb06] hover:text-[rgba(217,251,6,0.8)] transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-[#d9fb06] hover:text-[rgba(217,251,6,0.8)] transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-[#d9fb06] hover:text-[rgba(217,251,6,0.8)] transition-colors font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-[#d9fb06] hover:text-[rgba(217,251,6,0.8)] transition-colors font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#d9fb06] hover:text-[rgba(217,251,6,0.8)] transition-colors font-medium"
            >
              Contact
            </button>
            <button
              onClick={handleDownloadResume}
              className="bg-[#d9fb06] text-[#1a1c1b] px-6 py-3 rounded-full font-semibold hover:scale-105 active:scale-95 transition-transform flex items-center gap-2"
            >
              <Download size={18} />
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#d9fb06] hover:opacity-80 transition-opacity"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#d9fb06] hover:text-[rgba(217,251,6,0.8)] transition-colors font-medium text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-[#d9fb06] hover:text-[rgba(217,251,6,0.8)] transition-colors font-medium text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-[#d9fb06] hover:text-[rgba(217,251,6,0.8)] transition-colors font-medium text-left"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-[#d9fb06] hover:text-[rgba(217,251,6,0.8)] transition-colors font-medium text-left"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#d9fb06] hover:text-[rgba(217,251,6,0.8)] transition-colors font-medium text-left"
            >
              Contact
            </button>
            <button
              onClick={handleDownloadResume}
              className="bg-[#d9fb06] text-[#1a1c1b] px-6 py-3 rounded-full font-semibold hover:scale-105 active:scale-95 transition-transform flex items-center gap-2 justify-center"
            >
              <Download size={18} />
              Resume
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
