/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PORTFOLIO_DATA, CertificationItem } from '../data/portfolioData';
import {
  Award,
  ExternalLink,
  Copy,
  Check,
  ShieldCheck,
  Calendar,
  KeyRound,
  Sparkles,
  X,
  FileCheck2,
  ChevronRight,
  GraduationCap,
  Layers,
  Terminal,
} from 'lucide-react';

export const Certifications: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeModalCert, setActiveModalCert] = useState<CertificationItem | null>(null);

  const handleCopyId = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getIssuerBadgeIcon = (issuer: string) => {
    if (issuer.includes('Minnesota')) return GraduationCap;
    if (issuer.includes('Linux')) return Terminal;
    if (issuer.includes('Cisco')) return Layers;
    if (issuer.includes('CodingBlocks')) return Terminal;
    if (issuer.includes('Forage')) return Award;
    return Award;
  };

  return (
    <section id="certifications" className="py-24 bg-[#101713] relative border-t border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Editorial Style */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-semibold text-[#B7F23B] tracking-wider uppercase mb-2 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B7F23B]" />
            <span>Validated Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4F6F2] tracking-tight mb-3 [text-wrap:balance]">
            Certifications &amp; Continuous Learning
          </h2>
          <p className="text-base sm:text-lg text-[#9BA69E] leading-relaxed">
            Building knowledge, validating skills, and staying ahead in technology.
          </p>
        </div>

        {/* 6-Card Gallery Grid (3 on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {PORTFOLIO_DATA.certifications.map((cert) => {
            const IssuerIcon = getIssuerBadgeIcon(cert.issuer);
            const isCopied = copiedId === cert.credentialId;

            return (
              <div
                key={cert.id}
                onClick={() => setActiveModalCert(cert)}
                className="rounded-xl bg-[#151D18] border border-white/[0.08] hover:border-[#B7F23B]/40 hover:bg-[#1a251f] transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer shadow-lg shadow-black/40"
              >
                {/* Visual Issuer Banner */}
                <div
                  className={`relative h-28 sm:h-32 bg-gradient-to-br ${cert.bannerTheme.bgGradient} p-4 sm:p-5 flex flex-col justify-between overflow-hidden border-b border-white/[0.06]`}
                >
                  {/* Subtle Geometric Graphic / Brand Watermark */}
                  <div className="absolute -right-4 -bottom-6 text-white/[0.06] font-mono text-7xl font-black select-none pointer-events-none tracking-tighter">
                    {cert.bannerTheme.brandText}
                  </div>

                  {/* Banner Top Row */}
                  <div className="flex items-center justify-between z-10">
                    <div
                      className="px-2.5 py-1 rounded text-[11px] font-mono font-bold uppercase tracking-wider backdrop-blur-md border"
                      style={{
                        backgroundColor: cert.bannerTheme.tagBg,
                        borderColor: cert.bannerTheme.borderAccent,
                        color: cert.bannerTheme.accentColor,
                      }}
                    >
                      {cert.bannerTheme.issuerAbbr}
                    </div>

                    <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 group-hover:scale-110 transition-transform">
                      <IssuerIcon className="w-4 h-4" style={{ color: cert.bannerTheme.accentColor }} />
                    </div>
                  </div>

                  {/* Banner Bottom Label */}
                  <div className="z-10">
                    <span className="text-[11px] font-mono text-white/60 block">
                      Official Issuer
                    </span>
                    <span className="text-xs font-semibold text-white/90 truncate block">
                      {cert.issuer}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-[#F4F6F2] group-hover:text-[#B7F23B] transition-colors leading-snug">
                      {cert.title}
                    </h3>

                    {/* Metadata Strip */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-[#9BA69E]">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#B7F23B]" />
                        <span>Issued: {cert.date}</span>
                      </span>
                    </div>

                    {/* Credential ID with Copy Action */}
                    <div className="p-2.5 rounded-lg bg-[#101713] border border-white/[0.06] flex items-center justify-between gap-2 text-xs font-mono">
                      <div className="flex items-center gap-1.5 text-[#9BA69E] truncate">
                        <KeyRound className="w-3 h-3 text-[#B7F23B] shrink-0" />
                        <span className="text-[11px] text-[#9BA69E]/70 shrink-0">ID:</span>
                        <span className="text-[#F4F6F2] truncate select-all">{cert.credentialId}</span>
                      </div>

                      <button
                        onClick={(e) => handleCopyId(e, cert.credentialId)}
                        className="p-1 text-[#9BA69E] hover:text-[#B7F23B] rounded transition-colors shrink-0 cursor-pointer"
                        title="Copy Credential ID"
                      >
                        {isCopied ? (
                          <Check className="w-3.5 h-3.5 text-[#B7F23B]" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    {/* Relevant Skills */}
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="pt-1">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-[#9BA69E]/70 mb-1.5">
                          Relevant Skills
                        </div>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-[#8DBD35]">
                          {cert.skills.map((skill, sIdx) => (
                            <React.Fragment key={skill}>
                              <span>{skill}</span>
                              {sIdx < cert.skills!.length - 1 && (
                                <span className="text-white/20">·</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
                    <span className="text-xs font-mono text-[#9BA69E] group-hover:text-[#F4F6F2] transition-colors flex items-center gap-1">
                      <span>View details</span>
                      <ChevronRight className="w-3 h-3 text-[#B7F23B]" />
                    </span>

                    {cert.verifyUrl ? (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold text-[#090D0B] bg-[#B7F23B] hover:bg-[#8DBD35] rounded-md transition-colors shadow-sm whitespace-nowrap"
                      >
                        <span>Verify Certificate</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-[#9BA69E] px-2.5 py-1 bg-white/[0.03] rounded border border-white/[0.06]">
                        Verification link pending
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Certificate Detail Modal */}
      {activeModalCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in"
          onClick={() => setActiveModalCert(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#101713] border border-white/[0.12] rounded-xl p-6 sm:p-8 space-y-6 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Banner */}
            <div
              className={`-mx-6 -mt-6 sm:-mx-8 sm:-mt-8 p-6 bg-gradient-to-r ${activeModalCert.bannerTheme.bgGradient} border-b border-white/[0.08] flex items-center justify-between`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center">
                  <Award className="w-5 h-5" style={{ color: activeModalCert.bannerTheme.accentColor }} />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider block" style={{ color: activeModalCert.bannerTheme.accentColor }}>
                    {activeModalCert.issuer}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {activeModalCert.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setActiveModalCert(null)}
                aria-label="Close modal"
                className="p-1.5 text-white/70 hover:text-white bg-black/40 rounded-md border border-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Credential Specification List */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-lg bg-[#151D18] border border-white/[0.06]">
                  <span className="text-[#9BA69E] block mb-1">Issuing Authority:</span>
                  <span className="text-[#F4F6F2] font-semibold text-sm">{activeModalCert.issuer}</span>
                </div>
                <div className="p-3 rounded-lg bg-[#151D18] border border-white/[0.06]">
                  <span className="text-[#9BA69E] block mb-1">Issue Date:</span>
                  <span className="text-[#B7F23B] font-semibold text-sm">{activeModalCert.date}</span>
                </div>
              </div>

              {/* Full ID box */}
              <div className="p-3.5 rounded-lg bg-[#151D18] border border-white/[0.08] space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono text-[#9BA69E]">
                  <span>Official Credential ID</span>
                  <button
                    onClick={(e) => handleCopyId(e, activeModalCert.credentialId)}
                    className="text-[#B7F23B] hover:text-[#8DBD35] flex items-center gap-1 cursor-pointer"
                  >
                    {copiedId === activeModalCert.credentialId ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy ID</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="text-sm font-mono text-[#F4F6F2] break-all select-all font-semibold bg-[#101713] p-2.5 rounded border border-white/[0.04]">
                  {activeModalCert.credentialId}
                </div>
              </div>

              {/* Verified Competencies */}
              {activeModalCert.skills && (
                <div className="p-4 rounded-lg bg-[#151D18] border border-white/[0.06]">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#9BA69E] block mb-2">
                    Verified Competencies &amp; Domain Topics
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeModalCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-mono text-[#F4F6F2] bg-[#101713] border border-white/[0.08] rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
              <span className="text-xs font-mono text-[#9BA69E]">
                Holder: Nishant Kumar
              </span>

              <div className="flex items-center gap-3">
                {activeModalCert.verifyUrl && (
                  <a
                    href={activeModalCert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold text-[#090D0B] bg-[#B7F23B] hover:bg-[#8DBD35] rounded-md transition-colors"
                  >
                    <span>Open Official Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setActiveModalCert(null)}
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
