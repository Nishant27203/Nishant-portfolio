/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  GraduationCap,
  Wrench,
  SearchCode,
  Compass,
  CheckCircle2,
  HardDrive,
  Workflow,
  Clock,
} from 'lucide-react';

export const About: React.FC = () => {
  const principles = [
    {
      title: "Root Cause Resolution",
      desc: "Investigate issues beyond immediate symptoms to prevent recurring incidents.",
      icon: SearchCode,
    },
    {
      title: "SLA & Availability Discipline",
      desc: "Treat system reliability and resolution turnaround times as critical commitments.",
      icon: Clock,
    },
    {
      title: "Structured Data Integrity",
      desc: "Respect relational schemas, query efficiency, and clean data migrations.",
      icon: HardDrive,
    },
    {
      title: "Continuous Observability",
      desc: "Leverage logs, metrics, and methodical triage to diagnose application health.",
      icon: Workflow,
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#101713] relative border-t border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-semibold text-[#B7F23B] tracking-wider uppercase mb-2">
            Professional Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F6F2] tracking-tight mb-4 [text-wrap:balance]">
            {PORTFOLIO_DATA.about.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#9BA69E] leading-relaxed">
            {PORTFOLIO_DATA.about.subheading}
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Editorial Background Narrative */}
          <div className="lg:col-span-6 space-y-6 text-[#9BA69E] leading-relaxed">
            <p className="text-[#F4F6F2] text-lg font-medium leading-relaxed">
              Technology operates best when architecture and maintenance are treated with equal rigor. My goal is to build, support, and troubleshoot systems that keep everyday workflows running without disruption.
            </p>

            <p>
              With an academic trajectory progressing from a Bachelor of Computer Applications (BCA) to currently pursuing a Master of Computer Applications (MCA) at Lovely Professional University, I pair formal theoretical computer science with hands-on systems engineering.
            </p>

            <p>
              My hands-on experience centers on application support, incident resolution, database querying, Linux administration, and full-stack software development. Whether diagnosing slow SQL queries, tracing API failure states, configuring scheduled cron jobs for SLA compliance, or building clean web tools, I focus on practical reliability over needless complexity.
            </p>

            {/* Core Operational Principles */}
            <div className="pt-6 border-t border-white/[0.08]">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#F4F6F2] mb-4">
                Operational Philosophy
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {principles.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-[#151D18] border border-white/[0.06] hover:border-[#B7F23B]/30 transition-colors"
                    >
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#F4F6F2] mb-1">
                        <Icon className="w-4 h-4 text-[#B7F23B]" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-xs text-[#9BA69E] leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Concise Information Blocks */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PORTFOLIO_DATA.about.blocks.map((block, index) => {
              const icons = [GraduationCap, Wrench, SearchCode, Compass];
              const BlockIcon = icons[index % icons.length];
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-[#151D18] border border-white/[0.08] hover:border-[#B7F23B]/35 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-[#8DBD35] uppercase tracking-wider">
                        {block.category}
                      </span>
                      <BlockIcon className="w-5 h-5 text-[#B7F23B] group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-lg font-bold text-[#F4F6F2] mb-2.5">
                      {block.title}
                    </h3>
                    <p className="text-sm text-[#9BA69E] leading-relaxed">
                      {block.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center text-xs text-[#B7F23B] font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                    <span>Verified Milestone</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
