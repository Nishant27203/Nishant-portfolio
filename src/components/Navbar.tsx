/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Activity', href: '#activity' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090D0B]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark with monogram accent */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-[#F4F6F2] hover:text-[#B7F23B] transition-colors whitespace-nowrap shrink-0"
        >
          <span className="w-8 h-8 rounded-lg bg-[#151D18] border border-[#B7F23B]/30 flex items-center justify-center text-xs font-mono font-bold text-[#B7F23B] group-hover:border-[#B7F23B] group-hover:bg-[#B7F23B]/10 transition-colors">
            NK
          </span>
          <span className="font-semibold">{PORTFOLIO_DATA.profile.fullName}</span>
        </a>

        {/* Zone 2: 4-6 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#9BA69E]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#F4F6F2] hover:underline underline-offset-8 decoration-[#B7F23B] decoration-2 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#090D0B] bg-[#B7F23B] hover:bg-[#8DBD35] active:scale-[0.98] rounded-md transition-all shadow-sm shadow-[#B7F23B]/20 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            aria-label="View Resume"
            className="p-2 text-[#B7F23B] bg-[#151D18] border border-white/[0.08] rounded-md hover:bg-[#1a251f]"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#9BA69E] hover:text-[#F4F6F2] bg-[#151D18] border border-white/[0.08] rounded-md"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#101713] border-b border-white/[0.08] px-6 py-5 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#9BA69E] hover:text-[#B7F23B] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-[#090D0B] bg-[#B7F23B] rounded-md"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-[#F4F6F2] bg-[#151D18] border border-white/[0.08] rounded-md hover:border-[#B7F23B]/40"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4 text-[#B7F23B]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
