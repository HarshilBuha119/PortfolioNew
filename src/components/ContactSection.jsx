import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare, Terminal } from 'lucide-react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "SYSTEM: MESSAGE DEPLOYED",
        description: "Transmission received. I will respond shortly.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="relative z-10 bg-transparent py-32 px-8">
      <div className="max-w-[75rem] mx-auto">
        
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[2px] w-12 bg-[#ff4d00]"></div>
          <span className="text-[#ff9d6e] uppercase text-xs tracking-[0.5em] font-black">
            Inquiry Protocol
          </span>
        </div>

        {/* Section Title */}
        <h2 className="font-black text-[clamp(3.5rem,8vw,6rem)] leading-[0.8] text-white uppercase mb-24 italic tracking-tighter">
          Get In<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d00] via-[#ffaa00] to-[#ff4d00] animate-gradient-x">
            Touch
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="relative p-8 border-l-2 border-[#ff4d00] bg-white/[0.02] backdrop-blur-xl">
              <p className="text-gray-300 text-lg font-medium leading-relaxed italic">
                "Available for high-performance mobile deployments and innovative system architecture. Let's build the next generation of mobile experiences."
              </p>
            </div>

            <div className="space-y-8">
              <div className="group flex items-center gap-6">
                <div className="bg-white/5 p-4 border border-white/10 group-hover:border-[#ff4d00]/50 transition-colors">
                  <Mail size={24} className="text-[#ff4d00]" />
                </div>
                <div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-black mb-1">Secure Channel</div>
                  <a
                    href="mailto:harshilbuha119@gmail.com"
                    className="text-white font-bold hover:text-[#ff4d00] transition-colors tracking-tight"
                  >
                    harshilbuha119@gmail.com
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-6">
                <div className="bg-white/5 p-4 border border-white/10 group-hover:border-[#ff4d00]/50 transition-colors">
                  <User size={24} className="text-[#ff4d00]" />
                </div>
                <div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-black mb-1">Base Location</div>
                  <div className="text-white font-bold tracking-tight">Ahmedabad, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative group">
            {/* Edgy Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ff4d00] to-[#ffaa00] opacity-10 blur-2xl group-hover:opacity-20 transition-opacity" />
            
            <div className="relative bg-[#1a1a1a] p-8 md:p-12 border border-white/10 clip-path-edgy shadow-2xl">
              <div className="flex items-center gap-2 mb-8 text-[#ff4d00]">
                <Terminal size={16} />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em]">Transmission.v1</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-400 uppercase text-[10px] font-black tracking-widest ml-1">
                    Operator Identity
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white focus:border-[#ff4d00] rounded-none h-12 transition-all placeholder:text-gray-700"
                    placeholder="ENTER NAME..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-400 uppercase text-[10px] font-black tracking-widest ml-1">
                    Return Signal (Email)
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white focus:border-[#ff4d00] rounded-none h-12 transition-all placeholder:text-gray-700"
                    placeholder="EMAIL_ADDRESS@DOMAIN.COM"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-400 uppercase text-[10px] font-black tracking-widest ml-1">
                    Data Payload (Message)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-white/5 border-white/10 text-white focus:border-[#ff4d00] rounded-none transition-all placeholder:text-gray-700 resize-none"
                    placeholder="DESCRIBE THE PROJECT SCOPE..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden bg-white text-black hover:text-white font-black uppercase py-8 rounded-none text-xs tracking-[0.3em] group/btn transition-colors"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? 'ENCRYPTING...' : (
                      <>INITIATE TRANSMISSION <Send size={14} /></>
                    )}
                  </span>
                  {/* Hover fill effect */}
                  <div className="absolute inset-0 bg-[#ff4d00] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;