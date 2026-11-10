/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090D0B] border-t border-white/[0.08] py-14 text-xs text-[#9BA69E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-white/[0.06]">
          {/* Brand & Identity */}
          <div>
            <div className="flex items-center gap-2 text-base font-bold text-[#F4F6F2] mb-1">
              <span className="w-6 h-6 rounded bg-[#151D18] border border-[#B7F23B]/30 flex items-center justify-center text-[10px] font-mono text-[#B7F23B]">
                NK
              </span>
              <span>{PORTFOLIO_DATA.profile.fullName}</span>
            </div>
            <p className="text-xs font-mono text-[#8DBD35]">
              {PORTFOLIO_DATA.profile.roleHeadline}
            </p>
          </div>

          {/* Quick Nav Anchors */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium">
            <a href="#about" className="hover:text-[#F4F6F2] transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-[#F4F6F2] transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-[#F4F6F2] transition-colors">
              Projects
            </a>
            <a href="#education" className="hover:text-[#F4F6F2] transition-colors">
              Education
            </a>
            <a href="#certifications" className="hover:text-[#F4F6F2] transition-colors">
              Certifications
            </a>
            <a href="#activity" className="hover:text-[#F4F6F2] transition-colors">
              GitHub
            </a>
            <a href="#contact" className="hover:text-[#F4F6F2] transition-colors">
              Contact
            </a>
          </nav>

          {/* Socials & Back To Top */}
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-[#9BA69E] hover:text-[#B7F23B] bg-[#151D18] rounded-md border border-white/[0.06] transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-[#9BA69E] hover:text-[#B7F23B] bg-[#151D18] rounded-md border border-white/[0.06] transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.profile.leetcodeUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-[#9BA69E] hover:text-[#FFA116] bg-[#151D18] rounded-md border border-white/[0.06] transition-colors"
              title="LeetCode"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.535 5.923 5.923 0 0 0 2.457-.348 5.768 5.768 0 0 0 1.254-.648l4.896-4.896a1.373 1.373 0 0 0-.97-2.344 1.36 1.36 0 0 0-.97.402l-4.896 4.896a3.25 3.25 0 0 1-2.28.91 3.275 3.275 0 0 1-2.658-1.942 3.09 3.09 0 0 1-.22-.593 3.16 3.16 0 0 1-.035-1.344 3.064 3.064 0 0 1 .685-1.189l3.854-4.126 5.406-5.788a1.374 1.374 0 0 0-.97-2.344zM16.14 8.788a1.373 1.373 0 0 0-.97 2.344l2.58 2.58a1.373 1.373 0 1 0 1.94-1.942l-2.58-2.58a1.373 1.373 0 0 0-.97-.402z" />
                <path d="M8.2 13.788a1.374 1.374 0 0 0 0 2.748h9.8a1.374 1.374 0 0 0 0-2.748z" />
              </svg>
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="p-2 text-[#9BA69E] hover:text-[#B7F23B] bg-[#151D18] rounded-md border border-white/[0.06] transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#F4F6F2] bg-[#151D18] hover:bg-[#1a251f] border border-white/[0.08] hover:border-[#B7F23B]/40 rounded-md transition-colors cursor-pointer ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#B7F23B]" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Metadata & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#9BA69E]/80">
          <div>
            &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.profile.fullName}. Built with precision for production environments.
          </div>
          <div>
            Configuration: <span className="text-[#8DBD35]">src/data/portfolioData.ts</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
