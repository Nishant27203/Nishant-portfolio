/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Mail,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Github,
  Linkedin,
  MapPin,
  Clock,
  AlertCircle,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject line is required.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);

    // Reliable mailto transport opening candidate's default email client with exact contents
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#101713] relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-semibold text-[#B7F23B] tracking-wider uppercase mb-2">
            Initiate Collaboration
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F6F2] tracking-tight mb-3">
            Have a Technical Challenge? Let&apos;s Connect.
          </h2>
          <p className="text-base text-[#9BA69E]">
            Looking for an application support specialist, IT operations engineer, or dependable full-stack developer? Feel free to reach out directly.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          
          {/* Left Column: Direct Contact Info & Professional Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl bg-[#151D18] border border-white/[0.08] space-y-6">
              <div>
                <span className="text-xs font-mono text-[#8DBD35] uppercase tracking-wider block mb-1">
                  Direct Inquiries
                </span>
                <h3 className="text-xl font-bold text-[#F4F6F2]">
                  Nishant Kumar
                </h3>
                <p className="text-xs font-mono text-[#B7F23B] mt-0.5">
                  {PORTFOLIO_DATA.profile.roleHeadline}
                </p>
              </div>

              {/* Email Address with Copy Button */}
              <div className="p-4 rounded-lg bg-[#101713] border border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#9BA69E]">Primary Email</span>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 text-xs font-mono text-[#B7F23B] hover:text-[#8DBD35] cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  className="text-sm sm:text-base font-mono font-semibold text-[#F4F6F2] hover:text-[#B7F23B] transition-colors break-all block"
                >
                  {PORTFOLIO_DATA.profile.email}
                </a>
              </div>

              {/* Location & Response SLA */}
              <div className="space-y-3 text-xs text-[#9BA69E] pt-2">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B7F23B] shrink-0" />
                  <span>{PORTFOLIO_DATA.profile.location}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#8DBD35] shrink-0" />
                  <span>Turnaround Commitment: Replies within 24 hours</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/[0.06] grid grid-cols-3 gap-2.5">
                <a
                  href={PORTFOLIO_DATA.profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-mono font-semibold text-[#F4F6F2] bg-[#101713] hover:bg-[#1a251f] border border-white/[0.08] hover:border-[#B7F23B]/40 rounded-md transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-[#B7F23B]" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.profile.leetcodeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-mono font-semibold text-[#F4F6F2] bg-[#101713] hover:bg-[#1a251f] border border-white/[0.08] hover:border-[#FFA116]/40 rounded-md transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-[#FFA116]" aria-hidden="true">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.535 5.923 5.923 0 0 0 2.457-.348 5.768 5.768 0 0 0 1.254-.648l4.896-4.896a1.373 1.373 0 0 0-.97-2.344 1.36 1.36 0 0 0-.97.402l-4.896 4.896a3.25 3.25 0 0 1-2.28.91 3.275 3.275 0 0 1-2.658-1.942 3.09 3.09 0 0 1-.22-.593 3.16 3.16 0 0 1-.035-1.344 3.064 3.064 0 0 1 .685-1.189l3.854-4.126 5.406-5.788a1.374 1.374 0 0 0-.97-2.344zM16.14 8.788a1.373 1.373 0 0 0-.97 2.344l2.58 2.58a1.373 1.373 0 1 0 1.94-1.942l-2.58-2.58a1.373 1.373 0 0 0-.97-.402z" />
                    <path d="M8.2 13.788a1.374 1.374 0 0 0 0 2.748h9.8a1.374 1.374 0 0 0 0-2.748z" />
                  </svg>
                  <span>LeetCode</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.profile.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-mono font-semibold text-[#F4F6F2] bg-[#101713] hover:bg-[#1a251f] border border-white/[0.08] hover:border-[#0A66C2]/40 rounded-md transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Availability Callout */}
            <div className="p-4 rounded-lg bg-[#151D18]/70 border border-[#B7F23B]/30 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#B7F23B] shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-semibold text-[#F4F6F2] block mb-0.5">
                  Open for Opportunities
                </span>
                <span className="text-[#9BA69E]">
                  Available for Application Support Engineer, IT Operations Analyst, Cloud/DevOps Trainee, or Full-Stack developer positions.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-[#151D18] border border-white/[0.08]">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#B7F23B]/10 border border-[#B7F23B] flex items-center justify-center text-[#B7F23B] mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F4F6F2]">
                    Email Client Dispatched
                  </h3>
                  <p className="text-sm text-[#9BA69E] max-w-md mx-auto leading-relaxed">
                    Your email client was triggered with your message prefilled. If it did not open automatically, you can send an email directly to <span className="text-[#B7F23B] font-mono">{PORTFOLIO_DATA.profile.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 text-xs font-mono text-[#090D0B] bg-[#B7F23B] rounded-md cursor-pointer font-semibold"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#9BA69E] mb-1.5">
                        Your Name <span className="text-[#B7F23B]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-3.5 py-2.5 text-sm bg-[#101713] border rounded-md text-[#F4F6F2] placeholder-[#9BA69E]/50 focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-white/[0.08] focus:border-[#B7F23B]'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#9BA69E] mb-1.5">
                        Email Address <span className="text-[#B7F23B]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-3.5 py-2.5 text-sm bg-[#101713] border rounded-md text-[#F4F6F2] placeholder-[#9BA69E]/50 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-white/[0.08] focus:border-[#B7F23B]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#9BA69E] mb-1.5">
                      Subject <span className="text-[#B7F23B]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Application Support Discussion"
                      className={`w-full px-3.5 py-2.5 text-sm bg-[#101713] border rounded-md text-[#F4F6F2] placeholder-[#9BA69E]/50 focus:outline-none transition-colors ${
                        errors.subject
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-white/[0.08] focus:border-[#B7F23B]'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#9BA69E] mb-1.5">
                      Message <span className="text-[#B7F23B]">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, team requirements, or interview schedule..."
                      className={`w-full px-3.5 py-2.5 text-sm bg-[#101713] border rounded-md text-[#F4F6F2] placeholder-[#9BA69E]/50 focus:outline-none transition-colors ${
                        errors.message
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-white/[0.08] focus:border-[#B7F23B]'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#9BA69E]">
                      Direct zero-failure transport via mail client
                    </span>
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-[#090D0B] bg-[#B7F23B] hover:bg-[#8DBD35] active:scale-[0.98] rounded-md transition-all shadow-md shadow-[#B7F23B]/15 cursor-pointer"
                    >
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
