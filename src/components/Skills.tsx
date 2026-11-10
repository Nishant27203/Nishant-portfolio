/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Monitor,
  Terminal,
  Network,
  Wrench,
  ShieldAlert,
  Ticket,
  Clock,
  Database,
  Code,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Layers,
  Cloud,
  Cpu,
  BarChart3,
  GitBranch,
  Sparkles,
  Server,
  ArrowRight,
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [isAdditionalExpanded, setIsAdditionalExpanded] = useState(false);

  // Helper to map icon based on skill type
  const getPrimaryIcon = (iconType: string) => {
    switch (iconType) {
      case 'windows':
        return Monitor;
      case 'linux':
        return Terminal;
      case 'network':
        return Network;
      case 'tool':
        return Wrench;
      case 'incident':
        return ShieldAlert;
      case 'ticket':
        return Ticket;
      case 'sla':
        return Clock;
      case 'database':
        return Database;
      case 'code':
        return Code;
      case 'terminal':
        return Terminal;
      default:
        return Server;
    }
  };

  const getAdditionalCategoryIcon = (category: string) => {
    switch (category) {
      case 'PROGRAMMING & WEB DEVELOPMENT':
        return Code;
      case 'DATABASE & DATA':
        return Database;
      case 'CLOUD & DEVOPS':
        return Cloud;
      case 'DATA & ARTIFICIAL INTELLIGENCE':
        return Cpu;
      default:
        return Layers;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#090D0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* 1. SECTION HEADER */}
        {/* ========================================================= */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold text-[#B7F23B] tracking-wider uppercase mb-2">
            TECHNICAL CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4F6F2] tracking-tight mb-3">
            Technical Expertise &amp; Tooling
          </h2>
          <p className="text-base sm:text-lg text-[#9BA69E] leading-relaxed mb-6">
            Focused on IT Support, Application Support, troubleshooting, and IT operations, backed by practical development and database skills.
          </p>

          {/* Primary Career Focus Ribbon */}
          <div className="p-4 rounded-xl bg-[#101713] border border-white/[0.08] shadow-lg shadow-black/30">
            <div className="text-[11px] font-mono text-[#8DBD35] uppercase tracking-wider mb-2 font-semibold">
              Primary Career Specialization:
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {PORTFOLIO_DATA.careerFocusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-md bg-[#151D18] border border-[#B7F23B]/30 text-xs sm:text-sm font-semibold text-[#F4F6F2] flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B7F23B]" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. PRIMARY SKILLS — DISPLAYED FIRST */}
        {/* ========================================================= */}
        <div className="space-y-12">
          {PORTFOLIO_DATA.primarySkillGroups.map((group) => (
            <div key={group.id} className="space-y-4">
              
              {/* Group Title & Subtitle */}
              <div className="border-b border-white/[0.08] pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-base sm:text-lg font-bold text-[#F4F6F2] tracking-wide flex items-center gap-2 font-mono">
                  <span className="text-[#B7F23B]">›</span>
                  <span>{group.title}</span>
                </h3>
                <span className="text-xs text-[#9BA69E] sm:text-right">
                  {group.description}
                </span>
              </div>

              {/* Skill Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {group.skills.map((skill, idx) => {
                  const Icon = getPrimaryIcon(skill.iconType);
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-[#151D18] border border-white/[0.08] hover:border-[#B7F23B]/40 hover:bg-[#1a251f] transition-all duration-200 flex flex-col justify-between group shadow-sm shadow-black/20"
                    >
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-[#101713] border border-white/[0.08] flex items-center justify-center text-[#B7F23B] group-hover:scale-105 group-hover:border-[#B7F23B]/30 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#9BA69E]/70">
                          Core
                        </span>
                      </div>

                      <div>
                        <h4 className="text-base font-bold text-[#F4F6F2] group-hover:text-[#B7F23B] transition-colors mb-2">
                          {skill.name}
                        </h4>

                        {/* Status Label */}
                        <div className="flex items-center gap-1.5 text-xs font-mono text-[#9BA69E]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B7F23B] shrink-0" />
                          <span>Practical Experience</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* 3. ADDITIONAL SKILLS — COLLAPSIBLE SECTION */}
        {/* ========================================================= */}
        <div className="mt-20 pt-12 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F4F6F2] tracking-tight mb-2">
                Additional Skills &amp; Technologies
              </h3>
              <p className="text-sm text-[#9BA69E]">
                Additional technologies, development tools, and emerging areas I have explored.
              </p>
            </div>

            {/* Expand / Collapse Button */}
            <button
              onClick={() => setIsAdditionalExpanded(!isAdditionalExpanded)}
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold text-[#090D0B] bg-[#B7F23B] hover:bg-[#8DBD35] active:scale-[0.98] rounded-md transition-all shadow-sm shadow-[#B7F23B]/20 shrink-0 cursor-pointer self-start sm:self-auto"
            >
              <span>{isAdditionalExpanded ? 'Show Less −' : 'Explore Additional Skills +'}</span>
              {isAdditionalExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Collapsible Content Area */}
          {isAdditionalExpanded && (
            <div className="space-y-10 animate-in fade-in slide-in-from-top-4 duration-300">
              {PORTFOLIO_DATA.additionalSkillCategories.map((catGroup, cIdx) => {
                const CatIcon = getAdditionalCategoryIcon(catGroup.category);
                return (
                  <div key={cIdx} className="p-6 rounded-xl bg-[#101713] border border-white/[0.08]">
                    
                    {/* Category Title */}
                    <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/[0.06]">
                      <div className="w-7 h-7 rounded-md bg-[#151D18] border border-white/[0.08] flex items-center justify-center text-[#B7F23B]">
                        <CatIcon className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-sm font-bold font-mono text-[#F4F6F2] tracking-wide">
                        {catGroup.category}
                      </h4>
                      <span className="text-[11px] font-mono text-[#9BA69E] ml-auto">
                        {catGroup.skills.length} Capabilities
                      </span>
                    </div>

                    {/* Compact Skill Cards Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                      {catGroup.skills.map((skill, sIdx) => {
                        const isLearning = skill.status === 'learning';
                        return (
                          <div
                            key={sIdx}
                            className="p-3.5 rounded-lg bg-[#151D18] border border-white/[0.06] hover:border-[#B7F23B]/30 hover:bg-[#1a251f] transition-all flex flex-col justify-between"
                          >
                            <h5 className="text-xs sm:text-sm font-semibold text-[#F4F6F2] mb-2">
                              {skill.name}
                            </h5>

                            <div className="flex items-center gap-1.5 text-[11px] font-mono">
                              {isLearning ? (
                                <>
                                  <Clock className="w-3 h-3 text-[#8DBD35] shrink-0" />
                                  <span className="text-[#8DBD35]">Active Learning Track</span>
                                </>
                              ) : (
                                <>
                                  <CheckCircle2 className="w-3 h-3 text-[#B7F23B] shrink-0" />
                                  <span className="text-[#9BA69E]">Practical Experience</span>
                                </>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                  </div>
                );
              })}
            </div>
          )}

          {/* Quick Explanatory Note */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#9BA69E] pt-6 border-t border-white/[0.06]">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B7F23B]" />
                <span>Practical Experience: Verified through academic coursework &amp; projects</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#8DBD35]" />
                <span>Active Learning Track: In-progress certification studies</span>
              </span>
            </div>
            <span className="text-[#9BA69E]/70">Strict Zero-Inflation Skill Policy</span>
          </div>

        </div>

      </div>
    </section>
  );
};
