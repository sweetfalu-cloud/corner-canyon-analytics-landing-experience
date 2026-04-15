import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Github, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
export function CTAFooter() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Welcome aboard!", {
      description: "Our solutions architect will contact you within 24 hours."
    });
  };
  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://twitter.com/cornercanyon',
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/corner-canyon-analytics',
      icon: Linkedin,
    },
    {
      name: 'Github',
      href: 'https://github.com/corner-canyon',
      icon: Github,
    },
  ];
  return (
    <footer className="bg-canyon-dark text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-canyon-blue to-canyon-dark border border-white/10 p-12 md:p-20 mb-24">
          <div className="absolute top-0 right-0 w-64 h-64 bg-canyon-cyan/20 rounded-full blur-[100px]" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to unlock your data's full potential?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Join 500+ forward-thinking organizations using Corner Canyon to drive strategic advantage.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                   {[1,2,3].map(i => <img key={i} src={`https://i.pravatar.cc/100?u=${i+10}`} className="w-10 h-10 rounded-full border-2 border-slate-900" alt="avatar" />)}
                </div>
                <span className="text-slate-400 text-sm font-medium">Join our growing ecosystem</span>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <Input
                  placeholder="Enter your work email"
                  className="h-14 bg-white/10 border-white/20 text-white placeholder:text-slate-400 rounded-full px-6 focus:ring-canyon-cyan"
                  required
                  type="email"
                />
                <Button type="submit" className="h-14 bg-canyon-cyan hover:bg-canyon-cyan/90 text-canyon-dark font-bold px-8 rounded-full group">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
              <p className="mt-4 text-xs text-slate-400 text-center sm:text-left px-4">
                By clicking "Get Started", you agree to our Terms and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img
                src="/logo.png"
                alt="Corner Canyon Analytics"
                className="h-8 w-8 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="text-xl font-bold tracking-tight">Corner Canyon</span>
            </div>
            <p className="text-slate-400 max-w-xs mb-8">
              The premier data intelligence platform for modern enterprises. Precision. Scale. Insight.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.name}`}
                  className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-canyon-cyan hover:text-canyon-dark transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-canyon-cyan">Features</a></li>
              <li><a href="#" className="hover:text-canyon-cyan">Analytics</a></li>
              <li><a href="#" className="hover:text-canyon-cyan">Integrations</a></li>
              <li><a href="#" className="hover:text-canyon-cyan">Cloud Storage</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-canyon-cyan">About Us</a></li>
              <li><a href="#" className="hover:text-canyon-cyan">Careers</a></li>
              <li><a href="#" className="hover:text-canyon-cyan">Press</a></li>
              <li><a href="#" className="hover:text-canyon-cyan">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-canyon-cyan">Documentation</a></li>
              <li><a href="#" className="hover:text-canyon-cyan">API Reference</a></li>
              <li><a href="#" className="hover:text-canyon-cyan">Community</a></li>
              <li><a href="#" className="hover:text-canyon-cyan">Status</a></li>
            </ul>
          </div>
        </div>
        <div className="py-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© 2024 Corner Canyon Analytics, Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}