import React, { useState } from 'react';
import { Send, Mail, User, Terminal } from 'lucide-react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';
import { log } from 'three';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://backend-portfolio-6f94.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      log(response)

      if (response.ok) {
        toast({ 
          title: "SYSTEM: MESSAGE DEPLOYED", 
          className: "bg-[#1a1a1a] border-[#ff4d00] text-[#ff4d00] font-bold" 
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error();
      }
    } catch (err) {
      toast({ variant: "destructive", title: "UPLINK ERROR" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative z-10 bg-transparent py-20 px-8">
      <div className="max-w-[75rem] mx-auto">
        <div className="mb-6">
          <span className="text-[#ff9d6e] uppercase text-xs tracking-[0.4em] font-bold px-3 py-1 bg-[#ff4d00]/10 border-l-2 border-[#ff4d00]">
            Contact Me
          </span>
        </div>

        <h2 className="font-black text-[clamp(3.5rem,8vw,6rem)] leading-[0.8] text-white uppercase mb-16 italic tracking-tighter">
          Get in
          <br />
          <span className="text-transparent pr-5 bg-clip-text bg-gradient-to-r from-[#ff4d00] via-[#ffaa00] to-[#ff4d00] animate-gradient-x">
            Touch
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="relative p-8 border-l-2 border-[#ff4d00] bg-white/[0.02] backdrop-blur-xl">
              <p className="text-gray-300 text-lg font-medium leading-relaxed italic">
                "Available for high-performance deployments and innovative architecture. Let's build the next generation of experiences."
              </p>
            </div>

            <div className="space-y-8">
              <div className="group flex items-center gap-6">
                <div className="bg-white/5 p-4 border border-white/10 group-hover:border-[#ff4d00]/50 transition-colors">
                  <Mail size={24} className="text-[#ff4d00]" />
                </div>
                <div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-black mb-1">Secure Channel</div>
                  <a href="mailto:harshilbuha119@gmail.com" className="text-white font-bold hover:text-[#ff4d00] transition-colors">
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
                  <div className="text-white font-bold">Ahmedabad, India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ff4d00] to-[#ffaa00] opacity-10 blur-2xl group-hover:opacity-20 transition-opacity" />
            <div className="relative bg-[#1a1a1a] p-8 md:p-12 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 mb-8 text-[#ff4d00]">
                <Terminal size={16} />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em]">Build Transmission</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <Label className="text-gray-400 uppercase text-[10px] font-black tracking-widest ml-1">Full Name</Label>
                  <Input name="name" value={formData.name} onChange={handleChange} required className="bg-white/5 border-white/10 text-white focus:border-[#ff4d00] rounded-none h-12" placeholder="ENTER NAME..." />
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-400 uppercase text-[10px] font-black tracking-widest ml-1">Email Address</Label>
                  <Input name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-white/5 border-white/10 text-white focus:border-[#ff4d00] rounded-none h-12" placeholder="EMAIL@DOMAIN.COM" />
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-400 uppercase text-[10px] font-black tracking-widest ml-1">Your Message</Label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="bg-white/5 border-white/10 text-white focus:border-[#ff4d00] rounded-none resize-none" placeholder="DESCRIBE SCOPE..." />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full relative overflow-hidden bg-white text-black hover:text-white font-black uppercase py-8 rounded-none text-xs tracking-[0.3em] group/btn">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? 'Sending...' : <>Send Message <Send size={14} /></>}
                  </span>
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