import React from 'react';
import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f10] border-t border-[#3f4816] py-12 px-8">
      <div className="max-w-[87.5rem] mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-[#d9fb06] font-black text-2xl mb-4">HB</div>
            <p className="text-[#888680] text-sm leading-relaxed">
              Building high-performance mobile experiences with React Native and modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#d9fb06] font-bold text-sm uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-[#888680] hover:text-[#d9fb06] transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-[#888680] hover:text-[#d9fb06] transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-[#888680] hover:text-[#d9fb06] transition-colors text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-[#888680] hover:text-[#d9fb06] transition-colors text-sm">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#888680] hover:text-[#d9fb06] transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-[#d9fb06] font-bold text-sm uppercase mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#302f2c] p-3 rounded-lg text-[#888680] hover:text-[#d9fb06] hover:bg-[#3f4816] transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#302f2c] p-3 rounded-lg text-[#888680] hover:text-[#d9fb06] hover:bg-[#3f4816] transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="bg-[#302f2c] p-3 rounded-lg text-[#888680] hover:text-[#d9fb06] hover:bg-[#3f4816] transition-all"
              >
                <Mail size={20} />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="bg-[#302f2c] p-3 rounded-lg text-[#888680] hover:text-[#d9fb06] hover:bg-[#3f4816] transition-all"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#3f4816] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#888680] text-sm">
            © {currentYear} Harshil Buha. All rights reserved.
          </p>
          <p className="text-[#888680] text-sm flex items-center gap-2">
            Built with <Heart size={16} className="text-[#d9fb06] fill-[#d9fb06]" /> using React & FastAPI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
