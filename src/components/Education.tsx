/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-semibold text-[#B7F23B] tracking-wider uppercase mb-2">
            Academic Foundations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F6F2] tracking-tight mb-3">
            Education &amp; Academic Timeline
          </h2>
          <p className="text-base text-[#9BA69E]">
            Structured computer science education emphasizing core systems software, database design, operating systems, and distributed cloud computing.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l border-white/[0.12] ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {PORTFOLIO_DATA.education.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Marker */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-[#090D0B] border-2 border-[#B7F23B] flex items-center justify-center group-hover:scale-125 transition-transform">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B7F23B]" />
              </div>

              {/* Education Card */}
              <div className="p-6 sm:p-8 rounded-xl bg-[#151D18] border border-white/[0.08] hover:border-[#B7F23B]/35 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-mono text-[#8DBD35] uppercase tracking-wider block mb-1">
                      Academic Degree
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F4F6F2]">
                      {item.degree}
                    </h3>
                    <div className="text-base font-medium text-[#B7F23B] mt-0.5">
                      {item.institution}
                    </div>
                  </div>

                  <div className="flex sm:flex-col sm:items-end gap-3 sm:gap-1 text-xs font-mono text-[#9BA69E]">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#B7F23B]" />
                      <span>{item.period}</span>
                    </span>
                    {item.location && (
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#9BA69E]" />
                        <span>{item.location}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-white/[0.06] space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#9BA69E] mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#B7F23B]" />
                    <span>Core Coursework &amp; Competencies</span>
                  </div>
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-sm text-[#9BA69E]">
                      <span className="text-[#B7F23B] mt-1 font-mono">›</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
