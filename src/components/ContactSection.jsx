import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
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

    // Mock submission - will be replaced with backend integration
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="bg-[#1a1c1b] py-24 px-8">
      <div className="max-w-[87.5rem] mx-auto">
        {/* Section Label */}
        <div className="mb-6">
          <span className="text-[#888680] uppercase text-sm tracking-widest font-medium">
            Get in Touch
          </span>
        </div>

        {/* Section Title */}
        <h2 className="font-black text-[clamp(3rem,6vw,5rem)] leading-[0.85] text-[#d9fb06] uppercase mb-16">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <p className="text-[#d9fb06] text-xl font-medium mb-8 leading-relaxed">
              Let's work together to build something amazing. Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#302f2c] p-3 rounded-lg">
                  <Mail size={24} className="text-[#d9fb06]" />
                </div>
                <div>
                  <div className="text-[#888680] text-sm uppercase mb-1">Email</div>
                  <a
                    href="mailto:harshilbuha119@gmail.com"
                    className="text-[#d9fb06] font-medium hover:underline"
                  >
                    harshilbuha119@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#302f2c] p-3 rounded-lg">
                  <User size={24} className="text-[#d9fb06]" />
                </div>
                <div>
                  <div className="text-[#888680] text-sm uppercase mb-1">Location</div>
                  <div className="text-[#d9fb06] font-medium">Ahmedabad, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#302f2c] p-8 border border-[rgba(63,72,22,0.5)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-[#d9fb06] mb-2 block uppercase text-sm font-bold">
                  Your Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-[#1a1c1b] border-[#3f4816] text-[#d9fb06] focus:border-[#d9fb06] focus:ring-[#d9fb06]"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-[#d9fb06] mb-2 block uppercase text-sm font-bold">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[#1a1c1b] border-[#3f4816] text-[#d9fb06] focus:border-[#d9fb06] focus:ring-[#d9fb06]"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-[#d9fb06] mb-2 block uppercase text-sm font-bold">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-[#1a1c1b] border-[#3f4816] text-[#d9fb06] focus:border-[#d9fb06] focus:ring-[#d9fb06] resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#d9fb06] text-[#1a1c1b] hover:bg-[rgba(217,251,6,0.9)] font-bold uppercase py-6 rounded-full text-base"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
