/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';
import {
  Github,
  ChevronRight,
  X,
  Server,
  Activity,
  ShieldCheck,
  CheckCircle2,
  Info,
  Sparkles,
  Layers,
  ArrowUpRight,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const majorProjects = PORTFOLIO_DATA.projects.filter((p) => p.priorityTier === 'major');
  const supportingProjects = PORTFOLIO_DATA.projects.filter((p) => p.priorityTier === 'supporting');
  const additionalProjects = PORTFOLIO_DATA.projects.filter((p) => p.priorityTier === 'additional');

  return (
    <section id="projects" className="py-24 bg-[#090D0B] relative border-t border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* ========================================================= */}
        {/* SECTION HEADER */}
        {/* ========================================================= */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-semibold text-[#B7F23B] tracking-wider uppercase mb-2 flex items-center gap-2">
            <Server className="w-4 h-4 text-[#B7F23B]" />
            <span>PRIMARY PORTFOLIO SHOWCASE · 3D CONCEPTUAL DIRECTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4F6F2] tracking-tight mb-3 [text-wrap:balance]">
            Featured Systems &amp; Engineering Projects
          </h2>
          <p className="text-base sm:text-lg text-[#9BA69E] leading-relaxed">
            Production-focused architectures engineered for IT Support, Application Support, Endpoint Telemetry, and Linux Operations — visually articulated through custom 3D technical concept artwork.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 1. TIER 1: MAJOR FEATURED PROJECTS (PROJECT 01 & 02) */}
        {/* ========================================================= */}
        <div className="space-y-12">
          {majorProjects.map((project, index) => {
            const projectNumber = index === 0 ? '01' : '02';
            const isFirst = index === 0;

            return (
              <div
                key={project.id}
                className="rounded-2xl bg-[#151D18] border border-white/[0.10] hover:border-[#B7F23B]/30 transition-all duration-300 overflow-hidden shadow-2xl shadow-black/70 group"
              >
                {/* 3D Artwork Container (~55-60% Visual Area) */}
                <div
                  className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/8] overflow-hidden bg-[#090D0B] cursor-pointer"
                  onClick={() => setActiveModalProject(project)}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} - 3D Conceptual Artwork`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151D18] via-transparent to-black/30 pointer-events-none" />

                  {/* Top Artwork Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#090D0B]/85 backdrop-blur-md border border-white/[0.12] text-xs font-mono">
                      <span className="text-[#B7F23B] font-bold">PROJECT {projectNumber}</span>
                      <span className="text-white/30">·</span>
                      <span className="text-[#F4F6F2]">{project.category}</span>
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#090D0B]/85 backdrop-blur-md border border-white/[0.10] text-[11px] font-mono text-[#9BA69E]">
                      <Sparkles className="w-3 h-3 text-[#B7F23B]" />
                      <span>3D Conceptual Artwork</span>
                    </div>
                  </div>

                  {/* Bottom Hover Interaction Prompt */}
                  <div className="absolute bottom-4 right-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#090D0B]/85 backdrop-blur-md border border-white/[0.12] text-xs font-mono text-[#B7F23B] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Inspect System Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="space-y-3 max-w-3xl">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#8DBD35]">
                        <span>{project.tagline}</span>
                      </div>
                      <h3
                        onClick={() => setActiveModalProject(project)}
                        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F4F6F2] tracking-tight group-hover:text-[#B7F23B] transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#9BA69E] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Action Controls */}
                    <div className="flex flex-wrap items-center gap-3 shrink-0">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-bold text-[#090D0B] bg-[#B7F23B] hover:bg-[#8DBD35] rounded-md transition-colors shadow-sm shadow-[#B7F23B]/20"
                        >
                          <Github className="w-4 h-4" />
                          <span>View Repository</span>
                        </a>
                      )}
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-semibold text-[#F4F6F2] bg-[#101713] hover:bg-[#1a251f] border border-white/[0.10] hover:border-[#B7F23B]/40 rounded-md transition-all cursor-pointer"
                      >
                        <Layers className="w-4 h-4 text-[#B7F23B]" />
                        <span>Specifications</span>
                      </button>
                    </div>
                  </div>

                  {/* Technical Accuracy Note for NEXUS Command Center */}
                  {project.technicalAccuracyNote && (
                    <div className="p-4 rounded-xl bg-[#101713] border border-amber-500/30 flex items-start gap-3 text-xs leading-relaxed">
                      <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono font-bold text-amber-300 block mb-0.5">
                          Technical Architecture &amp; Diagnostic Scope:
                        </span>
                        <span className="text-[#9BA69E]">
                          {project.technicalAccuracyNote}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Demonstrated Competencies Strip */}
                  {project.competencies && (
                    <div className="p-4 rounded-xl bg-[#101713] border border-white/[0.06]">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#B7F23B] mb-2 font-semibold flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#B7F23B]" />
                        <span>Core Professional Competencies:</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {project.competencies.map((comp, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 text-xs font-mono text-[#F4F6F2] bg-[#151D18] border border-white/[0.08] rounded"
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Architecture & Stack Details */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
                    <div className="lg:col-span-5 space-y-3">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#9BA69E]">
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono text-[#F4F6F2] bg-[#101713] border border-white/[0.08] rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.architectureHighlight && (
                        <div className="p-3.5 rounded-lg bg-[#101713] border border-[#B7F23B]/20 text-xs text-[#9BA69E] leading-relaxed mt-3">
                          <span className="text-[#B7F23B] font-mono font-bold block mb-1">Architecture Implementation:</span>
                          {project.architectureHighlight}
                        </div>
                      )}
                    </div>

                    <div className="lg:col-span-7 space-y-3">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#9BA69E]">
                        Key Operational Capabilities
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F4F6F2]">
                        {project.keyFeatures.slice(0, 6).map((feat, idx) => (
                          <div key={idx} className="p-2.5 rounded bg-[#101713] border border-white/[0.04] flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B7F23B] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* 2. TIER 2: SECONDARY FEATURED SYSTEMS (PROJECT 03 & 04) */}
        {/* ========================================================= */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#9BA69E]">
            <Activity className="w-4 h-4 text-[#B7F23B]" />
            <span>OPERATIONAL TOOLS &amp; DATA SYSTEMS · FEATURED GRID</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {supportingProjects.map((project, idx) => {
              const projectNumber = idx === 0 ? '03' : '04';

              return (
                <div
                  key={project.id}
                  className="rounded-2xl bg-[#151D18] border border-white/[0.10] hover:border-[#B7F23B]/30 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl shadow-black/50 group"
                >
                  <div>
                    {/* 3D Artwork (~55% visual area) */}
                    <div
                      className="relative aspect-[16/10] overflow-hidden bg-[#090D0B] cursor-pointer"
                      onClick={() => setActiveModalProject(project)}
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} - 3D Conceptual Artwork`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#151D18] via-transparent to-black/20 pointer-events-none" />

                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 pointer-events-none">
                        <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#090D0B]/85 backdrop-blur-md border border-white/[0.12] text-xs font-mono">
                          <span className="text-[#B7F23B] font-bold">PROJECT {projectNumber}</span>
                          <span className="text-white/30">·</span>
                          <span className="text-[#F4F6F2]">{project.category}</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#090D0B]/85 backdrop-blur-md border border-white/[0.10] text-[10px] font-mono text-[#9BA69E]">
                          <Sparkles className="w-3 h-3 text-[#B7F23B]" />
                          <span>3D Artwork</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-8 space-y-4">
                      <div>
                        <span className="text-xs font-mono text-[#8DBD35] block mb-1">
                          {project.tagline}
                        </span>
                        <h3
                          onClick={() => setActiveModalProject(project)}
                          className="text-xl sm:text-2xl font-bold text-[#F4F6F2] group-hover:text-[#B7F23B] transition-colors cursor-pointer"
                        >
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-sm text-[#9BA69E] leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Experimental Results for Plant Disease Detector */}
                      {project.experimentalResults && (
                        <div className="p-3 rounded-lg bg-[#101713] border border-white/[0.04] grid grid-cols-3 gap-2 text-center text-xs font-mono">
                          {project.experimentalResults.map((r, rIdx) => (
                            <div key={rIdx}>
                              <span className="text-[10px] text-[#9BA69E] block truncate">{r.label}</span>
                              <span className="text-xs font-bold text-[#B7F23B]">{r.value}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono text-[#F4F6F2] bg-[#101713] border border-white/[0.08] rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-6 sm:p-8 pt-0 flex items-center justify-between gap-3 border-t border-white/[0.06] mt-4">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-mono font-semibold text-[#F4F6F2] hover:text-[#B7F23B] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Layers className="w-3.5 h-3.5 text-[#B7F23B]" />
                      <span>View Details</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#B7F23B]" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold text-[#F4F6F2] bg-[#101713] hover:bg-[#1a251f] border border-white/[0.08] hover:border-[#B7F23B]/40 rounded-md transition-colors"
                      >
                        <Github className="w-3.5 h-3.5 text-[#B7F23B]" />
                        <span>Repository</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. TIER 3: ADDITIONAL PROJECTS GRID (PROJECTS 05, 06, 07) */}
        {/* ========================================================= */}
        <div className="pt-8 border-t border-white/[0.08] space-y-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#8DBD35] mb-1">
              ADDITIONAL ENGINEERING &amp; AI SYSTEMS
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F4F6F2] tracking-tight mb-2">
              Full-Stack Applications &amp; Analytics
            </h3>
            <p className="text-sm text-[#9BA69E] max-w-3xl">
              Software engineering, data parsing, workforce intelligence, and modular application development — rendered in complementary 3D aesthetic artwork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProjects.map((project, idx) => {
              const projectNumber = `0${idx + 5}`;

              return (
                <div
                  key={project.id}
                  className="rounded-xl bg-[#151D18] border border-white/[0.08] hover:border-[#B7F23B]/30 hover:bg-[#18221c] transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-lg shadow-black/40"
                >
                  <div>
                    {/* 3D Artwork (~55% visual area) */}
                    <div
                      className="relative aspect-[16/10] overflow-hidden bg-[#090D0B] cursor-pointer"
                      onClick={() => setActiveModalProject(project)}
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} - 3D Conceptual Artwork`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#151D18] via-transparent to-transparent pointer-events-none" />

                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                        <span className="px-2 py-0.5 rounded bg-[#090D0B]/85 backdrop-blur-md border border-white/[0.12] text-[11px] font-mono text-[#B7F23B] font-bold">
                          PROJECT {projectNumber}
                        </span>
                        <span className="text-[11px] font-mono text-[#9BA69E] px-2 py-0.5 rounded bg-[#090D0B]/85 backdrop-blur-md border border-white/[0.08]">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <h4
                        onClick={() => setActiveModalProject(project)}
                        className="text-lg font-bold text-[#F4F6F2] group-hover:text-[#B7F23B] transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h4>
                      <p className="text-xs text-[#9BA69E] leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[11px] font-mono text-[#9BA69E] bg-[#101713] border border-white/[0.06] rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center justify-between border-t border-white/[0.06] mt-4">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-mono text-[#F4F6F2] hover:text-[#B7F23B] flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Details</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#B7F23B]" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-[#F4F6F2] bg-[#101713] hover:bg-[#1a251f] rounded border border-white/[0.08] hover:border-[#B7F23B]/30 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5 text-[#B7F23B]" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* ========================================================= */}
      {/* PROJECT DEEP-DIVE MODAL */}
      {/* ========================================================= */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#101713] border border-white/[0.12] rounded-xl shadow-2xl p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/[0.08]">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#B7F23B] mb-1">
                  <span>{activeModalProject.category}</span>
                  <span className="text-white/20">·</span>
                  <span>Technical Specification</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F4F6F2] tracking-tight">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
                className="p-1.5 text-[#9BA69E] hover:text-[#F4F6F2] bg-[#151D18] rounded-md border border-white/[0.08] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-res 3D Artwork Preview */}
            <div className="relative rounded-lg overflow-hidden border border-white/[0.08] bg-[#090D0B] aspect-[16/9]">
              <img
                src={activeModalProject.image}
                alt={`${activeModalProject.title} - 3D Conceptual Artwork`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Artwork Disclosure Caption */}
              <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-[#090D0B]/85 backdrop-blur-md rounded border border-white/[0.08] text-xs flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#B7F23B] shrink-0" />
                <span className="text-[#9BA69E]">
                  <strong className="text-[#F4F6F2] mr-1">3D Conceptual Artwork:</strong>
                  {activeModalProject.artworkConcept || 'Conceptual 3D visual communication of system architecture.'}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-[#9BA69E] leading-relaxed">
              {activeModalProject.description}
            </p>

            {/* Technical Accuracy Note if present */}
            {activeModalProject.technicalAccuracyNote && (
              <div className="p-3.5 rounded-lg bg-[#151D18] border border-amber-500/30 text-xs text-[#9BA69E] leading-relaxed flex items-start gap-2.5">
                <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono font-bold text-amber-300 block mb-0.5">Architecture &amp; Scope Note:</span>
                  <span>{activeModalProject.technicalAccuracyNote}</span>
                </div>
              </div>
            )}

            {/* Demonstrated Competencies */}
            {activeModalProject.competencies && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#B7F23B] mb-2 font-semibold">
                  Demonstrated Professional Competencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.competencies.map((comp) => (
                    <span
                      key={comp}
                      className="px-2.5 py-1 text-xs font-mono text-[#F4F6F2] bg-[#151D18] border border-white/[0.08] rounded"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Highlight */}
            {activeModalProject.architectureHighlight && (
              <div className="p-3.5 rounded-lg bg-[#151D18] border border-[#B7F23B]/20 text-xs text-[#9BA69E] leading-relaxed">
                <span className="font-mono font-bold text-[#B7F23B] block mb-1">Architecture Implementation:</span>
                <span>{activeModalProject.architectureHighlight}</span>
              </div>
            )}

            {/* Full Features Breakdown */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#9BA69E] mb-3">
                Key Features &amp; Workflows
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F4F6F2]">
                {activeModalProject.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-[#151D18] border border-white/[0.04] flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B7F23B] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Breakdown */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#9BA69E] mb-2">
                Technologies &amp; Libraries
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono text-[#F4F6F2] bg-[#151D18] border border-white/[0.08] rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-4">
              <span className="text-xs font-mono text-[#9BA69E]">
                Nishant Kumar Portfolio
              </span>

              <div className="flex items-center gap-3">
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold text-[#090D0B] bg-[#B7F23B] hover:bg-[#8DBD35] rounded-md transition-colors shadow-sm shadow-[#B7F23B]/20"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 text-xs font-mono text-[#F4F6F2] bg-[#151D18] hover:bg-[#1a251f] rounded-md border border-white/[0.08] cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
