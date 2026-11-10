/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  X,
  Printer,
  Copy,
  Check,
  Download,
  Mail,
  Phone,
  Github,
  Linkedin,
  GraduationCap,
  Briefcase,
  Terminal,
  Award,
  FileText,
  ExternalLink,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'pdf' | 'text'>('pdf');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textResume = `
${PORTFOLIO_DATA.profile.fullName}
${PORTFOLIO_DATA.profile.roleHeadline}
Email: ${PORTFOLIO_DATA.profile.email} | Phone: ${PORTFOLIO_DATA.profile.phone}
LinkedIn: ${PORTFOLIO_DATA.profile.linkedinUrl} | GitHub: ${PORTFOLIO_DATA.profile.githubUrl}
Location: ${PORTFOLIO_DATA.profile.location}

PROFESSIONAL SUMMARY
${PORTFOLIO_DATA.profile.summary}

EDUCATION
1. Master of Computer Applications (MCA) — Lovely Professional University (2024 - 2026)
2. Bachelor of Computer Applications (BCA) — Chaudhary Charan Singh University (2021 - 2024)

TECHNICAL SKILLS
- Application / IT Support: Troubleshooting, issue triage, incident & ticket management, SLA monitoring, escalation, runbooks.
- Systems & Networking: Windows, Linux fundamentals, Bash, TCP/IP, DNS, DHCP, HTTP/HTTPS.
- Monitoring & Operations: Endpoint health monitoring, application checks, CPU/memory/disk checks, ping/TCP diagnostics.
- Databases & APIs: SQL, PostgreSQL, MySQL, SQLite, Microsoft SQL Server, REST APIs.
- Tools & Programming: Python, Node.js, Git, GitHub.

TECHNICAL PROJECTS
1. NEXUS IT Command Center – IT Operations & Monitoring Platform (Jul 2026 – Sep 2026)
   - React, Node.js, Express.js, SQLite, WebSocket, systeminformation.
   - Incident coordination, endpoint visibility, health checks, and read-only diagnostics for CPU/memory/disk.
2. Enterprise IT Help Desk & Ticket Management System (Apr 2026 – Jun 2026)
   - React, Node.js, Express.js, PostgreSQL.
   - Role-based portal for employee ticket creation, L1/L2/L3 escalation, adjustable SLAs, and searchable IT knowledge base.
   - GitHub: https://github.com/Nishant27203/enterprise-it-helpdesk-system.git
3. Distributed Log Monitoring & Alerting System (Nov 2025 – Feb 2026)
   - TypeScript, Fastify, Redis Streams, Elasticsearch, PostgreSQL, Docker.
   - Core log-ingestion and worker-processing pipeline.

CERTIFICATIONS
- Introduction to Linux (LFS101) – The Linux Foundation
- Operating Systems Basics – Cisco Networking Academy
- Agile Software Development – University of Minnesota
- AWS APAC Solutions Architecture Simulation – Forage
- Python for Data Science – IBM
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[94vh] flex flex-col bg-[#101713] border border-white/[0.12] rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/[0.08] bg-[#151D18] gap-3">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B7F23B]" />
            <div className="text-xs sm:text-sm font-bold text-[#F4F6F2]">
              Nishant Kumar — Official Resume
            </div>
            
            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center gap-1 p-0.5 bg-[#101713] rounded-md border border-white/[0.08]">
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-2.5 py-1 text-xs font-mono rounded transition-colors cursor-pointer ${
                  viewMode === 'pdf'
                    ? 'bg-[#B7F23B] text-[#090D0B] font-semibold'
                    : 'text-[#9BA69E] hover:text-[#F4F6F2]'
                }`}
              >
                PDF View
              </button>
              <button
                onClick={() => setViewMode('text')}
                className={`px-2.5 py-1 text-xs font-mono rounded transition-colors cursor-pointer ${
                  viewMode === 'text'
                    ? 'bg-[#B7F23B] text-[#090D0B] font-semibold'
                    : 'text-[#9BA69E] hover:text-[#F4F6F2]'
                }`}
              >
                Text Sheet
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* DIRECT DOWNLOAD PDF BUTTON */}
            <a
              href={PORTFOLIO_DATA.profile.resumeUrl}
              download={PORTFOLIO_DATA.profile.resumeFilename}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-bold text-[#090D0B] bg-[#B7F23B] hover:bg-[#8DBD35] active:scale-[0.98] rounded-md transition-all shadow-sm shadow-[#B7F23B]/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handleCopyText}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-[#F4F6F2] bg-[#101713] hover:bg-[#1a251f] border border-white/[0.08] rounded-md transition-colors cursor-pointer"
              title="Copy plain text format"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-[#B7F23B]" />
                  <span className="text-[#B7F23B]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-[#F4F6F2] bg-[#101713] hover:bg-[#1a251f] border border-white/[0.08] rounded-md transition-colors cursor-pointer"
              title="Print resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close resume viewer"
              className="p-1.5 text-[#9BA69E] hover:text-[#F4F6F2] bg-[#101713] rounded-md border border-white/[0.08] cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile View Switcher */}
        <div className="sm:hidden flex items-center justify-around border-b border-white/[0.08] bg-[#101713] p-1.5">
          <button
            onClick={() => setViewMode('pdf')}
            className={`flex-1 py-1 text-xs font-mono text-center rounded ${
              viewMode === 'pdf' ? 'bg-[#B7F23B] text-[#090D0B] font-bold' : 'text-[#9BA69E]'
            }`}
          >
            PDF Preview
          </button>
          <button
            onClick={() => setViewMode('text')}
            className={`flex-1 py-1 text-xs font-mono text-center rounded ${
              viewMode === 'text' ? 'bg-[#B7F23B] text-[#090D0B] font-bold' : 'text-[#9BA69E]'
            }`}
          >
            Text Breakdown
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto bg-[#090D0B] p-4 sm:p-6">
          {viewMode === 'pdf' ? (
            <div className="flex flex-col h-full min-h-[65vh]">
              {/* PDF Preview Frame */}
              <iframe
                src={`${PORTFOLIO_DATA.profile.resumeUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                title="Nishant Kumar Resume Document"
                className="w-full flex-1 min-h-[65vh] rounded-lg border border-white/[0.08] bg-[#151D18]"
              />

              {/* Direct fallback / download banner */}
              <div className="mt-3 p-3 rounded-lg bg-[#151D18] border border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs text-[#9BA69E]">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#B7F23B]" />
                  <span>Viewing official document: <strong className="text-[#F4F6F2]">{PORTFOLIO_DATA.profile.resumeFilename}</strong></span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={PORTFOLIO_DATA.profile.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-[#8DBD35] hover:text-[#B7F23B] font-mono"
                  >
                    <span>Open in new tab</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <a
                    href={PORTFOLIO_DATA.profile.resumeUrl}
                    download={PORTFOLIO_DATA.profile.resumeFilename}
                    className="flex items-center gap-1.5 px-3 py-1 bg-[#B7F23B] hover:bg-[#8DBD35] text-[#090D0B] font-semibold rounded font-mono"
                  >
                    <Download className="w-3 h-3" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            /* Formatted Text Sheet View */
            <div className="space-y-8 p-4 sm:p-8 bg-[#101713] rounded-xl border border-white/[0.08] text-[#F4F6F2]">
              {/* Resume Header */}
              <div className="border-b border-white/[0.12] pb-6">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F4F6F2] mb-1">
                  {PORTFOLIO_DATA.profile.fullName}
                </h1>
                <div className="text-sm font-mono text-[#B7F23B] font-semibold mb-3">
                  APPLICATION SUPPORT ENGINEER | TECHNICAL SUPPORT | L1 PRODUCTION SUPPORT
                </div>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono text-[#9BA69E]">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-[#B7F23B]" />
                    <span>{PORTFOLIO_DATA.profile.email}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#B7F23B]" />
                    <span>{PORTFOLIO_DATA.profile.phone}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Linkedin className="w-3.5 h-3.5 text-[#B7F23B]" />
                    <a href={PORTFOLIO_DATA.profile.linkedinUrl} target="_blank" rel="noreferrer" className="hover:underline">
                      linkedin.com/in/nishant-kumar-272
                    </a>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Github className="w-3.5 h-3.5 text-[#B7F23B]" />
                    <a href={PORTFOLIO_DATA.profile.githubUrl} target="_blank" rel="noreferrer" className="hover:underline">
                      github.com/{PORTFOLIO_DATA.profile.githubUsername}
                    </a>
                  </span>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-[#B7F23B] font-bold mb-2">
                  Professional Summary
                </h2>
                <p className="text-xs sm:text-sm text-[#9BA69E] leading-relaxed">
                  MCA graduate (2026) with practical project experience in Application Support, IT Operations, System Monitoring, and Technical Troubleshooting. Knowledge of SQL, PostgreSQL, Linux, Windows, TCP/IP, DNS, DHCP, and REST APIs. Developed projects involving incident management, ticket handling, SLA monitoring, application health checks, and endpoint diagnostics. Interested in resolving technical issues and ensuring smooth application operations. Seeking an entry-level Application Support Engineer or L1 Production Support role.
                </p>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-[#B7F23B] font-bold mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  <span>Technical Skills</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-[#151D18] border border-white/[0.06]">
                    <span className="font-mono text-[#8DBD35] block mb-1 font-semibold">Application / IT Support:</span>
                    <span className="text-[#9BA69E]">
                      Application troubleshooting, technical issue triage, incident &amp; ticket management, SLA monitoring, issue prioritization, escalation, resolution notes, knowledge base.
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#151D18] border border-white/[0.06]">
                    <span className="font-mono text-[#8DBD35] block mb-1 font-semibold">Systems &amp; Networking:</span>
                    <span className="text-[#9BA69E]">
                      Windows desktop troubleshooting, Linux fundamentals, Bash / shell fundamentals, TCP/IP, DNS, DHCP, HTTP/HTTPS, client-server communication.
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#151D18] border border-white/[0.06]">
                    <span className="font-mono text-[#8DBD35] block mb-1 font-semibold">Monitoring &amp; Operations:</span>
                    <span className="text-[#9BA69E]">
                      Endpoint health monitoring, application health checks, log monitoring fundamentals, CPU / memory / disk checks, DNS / ping / TCP diagnostics, runbook documentation.
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#151D18] border border-white/[0.06]">
                    <span className="font-mono text-[#8DBD35] block mb-1 font-semibold">Databases &amp; APIs:</span>
                    <span className="text-[#9BA69E]">
                      SQL, PostgreSQL, MySQL, SQLite, Microsoft SQL Server, REST APIs, API health checks, database querying and validation.
                    </span>
                  </div>
                </div>
              </div>

              {/* Technical Projects from Resume */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-[#B7F23B] font-bold mb-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <span>Technical Projects</span>
                </h2>
                <div className="space-y-4">
                  {/* Project 1 */}
                  <div className="p-4 rounded-lg bg-[#151D18] border border-white/[0.06]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <span className="text-sm font-bold text-[#F4F6F2]">
                        NEXUS IT Command Center – IT Operations &amp; Monitoring Platform
                      </span>
                      <span className="text-xs font-mono text-[#8DBD35]">Jul 2026 – Sep 2026</span>
                    </div>
                    <div className="text-xs font-mono text-[#B7F23B] mb-2">
                      React, Node.js, Express.js, SQLite, WebSocket, systeminformation
                    </div>
                    <ul className="text-xs text-[#9BA69E] space-y-1 pl-4 list-disc marker:text-[#B7F23B]">
                      <li>Developed an IT operations MVP covering incident coordination, endpoint visibility, application health checks, support knowledge, and operational reporting.</li>
                      <li>Implemented SLA-backed incident lifecycle, problem / change records, audit history, and degraded-application checks that can raise incidents.</li>
                      <li>Added an authorized endpoint agent and read-only diagnostics for CPU, memory, disk, network interfaces, DNS, ping, TCP connectivity, processes, and services.</li>
                    </ul>
                  </div>

                  {/* Project 2 */}
                  <div className="p-4 rounded-lg bg-[#151D18] border border-white/[0.06]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <span className="text-sm font-bold text-[#F4F6F2]">
                        Enterprise IT Help Desk &amp; Ticket Management System
                      </span>
                      <span className="text-xs font-mono text-[#8DBD35]">Apr 2026 – Jun 2026</span>
                    </div>
                    <div className="text-xs font-mono text-[#B7F23B] mb-2">
                      React, Node.js, Express.js, PostgreSQL
                    </div>
                    <ul className="text-xs text-[#9BA69E] space-y-1 pl-4 list-disc marker:text-[#B7F23B]">
                      <li>Built a role-based support portal for employee ticket creation, technician assignment, incident tracking, and ticket resolution.</li>
                      <li>Implemented L1 / L2 / L3 escalation, adjustable response and resolution SLAs, scheduled SLA monitoring, and ticket activity history.</li>
                      <li>Developed REST APIs, PostgreSQL data models, role-based access controls, resolution notes, and a searchable IT knowledge base.</li>
                    </ul>
                  </div>

                  {/* Project 3 */}
                  <div className="p-4 rounded-lg bg-[#151D18] border border-white/[0.06]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <span className="text-sm font-bold text-[#F4F6F2]">
                        Distributed Log Monitoring &amp; Alerting System
                      </span>
                      <span className="text-xs font-mono text-[#8DBD35]">Nov 2025 – Feb 2026</span>
                    </div>
                    <div className="text-xs font-mono text-[#B7F23B] mb-2">
                      TypeScript, Fastify, Redis Streams, Elasticsearch, PostgreSQL, Docker
                    </div>
                    <ul className="text-xs text-[#9BA69E] space-y-1 pl-4 list-disc marker:text-[#B7F23B]">
                      <li>Implemented core log-ingestion and worker-processing components to receive, queue, process, and index application log events.</li>
                      <li>Added PostgreSQL-based operational metrics and threshold-alerting foundations; analytics API and dashboard integration remain in progress.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-[#B7F23B] font-bold mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>Education</span>
                </h2>
                <div className="space-y-3">
                  <div className="p-3.5 rounded-lg bg-[#151D18] border border-white/[0.06]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm font-bold text-[#F4F6F2]">
                      <span>Lovely Professional University, Punjab</span>
                      <span className="text-xs font-mono text-[#8DBD35] font-normal">Aug 2024 – Jul 2026</span>
                    </div>
                    <div className="text-xs text-[#9BA69E]">Master of Computer Applications (MCA)</div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#151D18] border border-white/[0.06]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm font-bold text-[#F4F6F2]">
                      <span>Chaudhary Charan Singh University, Uttar Pradesh</span>
                      <span className="text-xs font-mono text-[#8DBD35] font-normal">Apr 2021 – Jul 2024</span>
                    </div>
                    <div className="text-xs text-[#9BA69E]">Bachelor of Computer Applications (BCA)</div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#151D18] border border-white/[0.06]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm font-bold text-[#F4F6F2]">
                      <span>Kendriya Vidyalaya, Bulandshahr</span>
                      <span className="text-xs font-mono text-[#8DBD35] font-normal">Apr 2020 – Mar 2021</span>
                    </div>
                    <div className="text-xs text-[#9BA69E]">Intermediate (12th Grade)</div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-[#B7F23B] font-bold mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Certifications</span>
                </h2>
                <div className="p-3.5 rounded-lg bg-[#151D18] border border-white/[0.06] text-xs text-[#9BA69E] leading-relaxed">
                  Introduction to Linux (LFS101) – The Linux Foundation &nbsp;·&nbsp; Operating Systems Basics – Cisco Networking Academy &nbsp;·&nbsp; SQL Programming Essentials – Udemy
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-4 sm:px-6 py-3 border-t border-white/[0.08] bg-[#151D18] flex items-center justify-between text-xs text-[#9BA69E] font-mono">
          <span className="hidden sm:inline">Role Targets: Application Support Engineer · L1 Production Support</span>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <a
              href={PORTFOLIO_DATA.profile.resumeUrl}
              download={PORTFOLIO_DATA.profile.resumeFilename}
              className="flex items-center gap-1.5 text-[#B7F23B] hover:underline"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Direct Download ({PORTFOLIO_DATA.profile.resumeFilename})</span>
            </a>
            <button
              onClick={onClose}
              className="px-3 py-1 text-xs text-[#F4F6F2] hover:text-[#B7F23B] rounded border border-white/[0.08] cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
