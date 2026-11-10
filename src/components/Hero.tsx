/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  FileText,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Activity,
  Server,
  ShieldCheck,
  Cpu,
  Copy,
  Check,
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [pingTime, setPingTime] = useState(14);
  const [uptimeSeconds, setUptimeSeconds] = useState(86420);

  useEffect(() => {
    // Subtle realistic telemetry variation for the terminal monitor
    const interval = setInterval(() => {
      setPingTime(12 + Math.floor(Math.random() * 5));
      setUptimeSeconds((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatUptime = (totalSeconds: number) => {
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    return `${days}d ${hours}h ${mins}m`;
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glow */}
      <div className="ambient-glow-top top-10 left-1/2 -translate-x-1/2 -z-10 opacity-70" />
      <div className="absolute inset-0 bg-enterprise-grid opacity-60 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT SIDE: Typographic Hierarchy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Professional Role Kicker - Clean unboxed text with subtle separator */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-medium text-[#B7F23B] tracking-wide mb-4">
              <span>{PORTFOLIO_DATA.profile.roleHeadline}</span>
            </div>

            {/* Candidate Name */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F6F2] mb-3">
              {PORTFOLIO_DATA.profile.fullName}
            </h1>

            {/* Main Statement Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F4F6F2] leading-tight mb-6 [text-wrap:balance]">
              {PORTFOLIO_DATA.profile.mainHeadline}
            </h2>

            {/* Short Introduction Body Prose */}
            <p className="text-base sm:text-lg text-[#9BA69E] leading-relaxed max-w-2xl mb-8">
              {PORTFOLIO_DATA.profile.summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#090D0B] bg-[#B7F23B] hover:bg-[#8DBD35] active:scale-[0.98] rounded-md transition-all shadow-md shadow-[#B7F23B]/15 whitespace-nowrap"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#F4F6F2] bg-[#151D18] hover:bg-[#1a251f] border border-white/[0.12] hover:border-[#B7F23B]/40 active:scale-[0.98] rounded-md transition-all whitespace-nowrap cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#B7F23B]" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#9BA69E] hover:text-[#F4F6F2] bg-transparent hover:bg-white/[0.04] border border-white/[0.08] rounded-md transition-all whitespace-nowrap"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons & Direct Email Copy */}
            <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-white/[0.08] w-full text-xs text-[#9BA69E]">
              <span className="font-mono text-[11px] tracking-wider uppercase text-[#9BA69E]/80">Connect:</span>
              
              <a
                href={PORTFOLIO_DATA.profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#B7F23B] transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span className="font-mono">github.com/{PORTFOLIO_DATA.profile.githubUsername}</span>
              </a>

              <a
                href={PORTFOLIO_DATA.profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#B7F23B] transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PORTFOLIO_DATA.profile.leetcodeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#B7F23B] transition-colors"
                title="LeetCode Profile"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#FFA116]" aria-hidden="true">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.535 5.923 5.923 0 0 0 2.457-.348 5.768 5.768 0 0 0 1.254-.648l4.896-4.896a1.373 1.373 0 0 0-.97-2.344 1.36 1.36 0 0 0-.97.402l-4.896 4.896a3.25 3.25 0 0 1-2.28.91 3.275 3.275 0 0 1-2.658-1.942 3.09 3.09 0 0 1-.22-.593 3.16 3.16 0 0 1-.035-1.344 3.064 3.064 0 0 1 .685-1.189l3.854-4.126 5.406-5.788a1.374 1.374 0 0 0-.97-2.344zM16.14 8.788a1.373 1.373 0 0 0-.97 2.344l2.58 2.58a1.373 1.373 0 1 0 1.94-1.942l-2.58-2.58a1.373 1.373 0 0 0-.97-.402z" />
                  <path d="M8.2 13.788a1.374 1.374 0 0 0 0 2.748h9.8a1.374 1.374 0 0 0 0-2.748z" />
                </svg>
                <span>LeetCode</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 hover:text-[#F4F6F2] transition-colors cursor-pointer group"
                title="Click to copy email address"
              >
                <Mail className="w-4 h-4 text-[#B7F23B]" />
                <span className="font-mono">{PORTFOLIO_DATA.profile.email}</span>
                {copied ? (
                  <span className="flex items-center text-xs text-[#B7F23B] font-mono ml-1">
                    <Check className="w-3 h-3 mr-0.5" /> Copied
                  </span>
                ) : (
                  <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Custom 3D Technological Composition & Diagnostic Monitor */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Container */}
              <div className="relative rounded-xl overflow-hidden bg-[#101713] border border-white/[0.12] shadow-2xl shadow-black/80 group">
                
                {/* 3D Abstract Sphere Image Asset */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#090D0B]">
                  <img
                    src={PORTFOLIO_DATA.profile.heroImage}
                    alt="Nishant Kumar professional profile portrait"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    onError={(event) => {
                      // Fall back to the bundled abstract visual if the profile photo is unavailable.
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = "/images/hero-abstract-tech-sphere.jpg";
                    }}
                    className="w-full h-full object-cover object-[center_28%] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101713] via-transparent to-transparent opacity-90" />
                  
                  {/* Floating Tech Matrix Overlay Tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-[#090D0B]/85 backdrop-blur-md rounded-md border border-white/[0.09] text-[11px] font-mono text-[#F4F6F2]">
                    <Terminal className="w-3.5 h-3.5 text-[#B7F23B]" />
                    <span>sys_ops // run_mode: active</span>
                  </div>
                </div>

                {/* Simulated Telemetry / Diagnostic Console */}
                <div className="p-5 bg-[#101713] border-t border-white/[0.08] space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-[#9BA69E]">
                    <div className="flex items-center gap-2">
                      <Activity className="w-3.5 h-3.5 text-[#B7F23B]" />
                      <span className="text-[#F4F6F2] font-semibold">Operational Health</span>
                    </div>
                    <span className="text-[#B7F23B] tabular-nums">SLA 99.9% Target</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-[11px]">
                    <div className="p-2.5 rounded bg-[#151D18] border border-white/[0.06]">
                      <div className="text-[#9BA69E] mb-1 flex items-center gap-1.5">
                        <Server className="w-3 h-3 text-[#B7F23B]" />
                        <span>System Uptime</span>
                      </div>
                      <div className="text-[#F4F6F2] font-semibold tabular-nums">
                        {formatUptime(uptimeSeconds)}
                      </div>
                    </div>

                    <div className="p-2.5 rounded bg-[#151D18] border border-white/[0.06]">
                      <div className="text-[#9BA69E] mb-1 flex items-center gap-1.5">
                        <Cpu className="w-3 h-3 text-[#8DBD35]" />
                        <span>Latency Probe</span>
                      </div>
                      <div className="text-[#B7F23B] font-semibold tabular-nums">
                        {pingTime}ms (Healthy)
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded bg-[#090D0B] border border-white/[0.06] text-[11px] text-[#9BA69E]">
                    <div className="flex items-center gap-2 text-[#9BA69E]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#B7F23B]" />
                      <span className="text-[#F4F6F2]">Core Focus:</span>
                      <span>Incident Mitigation · Post-Mortem Analysis</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Subtle Corner Accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-[#B7F23B]/10 rounded-full blur-2xl pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Full-width Metrics & Competency Strip Below Split */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {PORTFOLIO_DATA.systemOperationalMetrics.map((item, index) => (
            <div key={index} className="flex flex-col space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#9BA69E]">
                {item.label}
              </span>
              <span className="text-sm sm:text-base font-semibold text-[#F4F6F2]">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
