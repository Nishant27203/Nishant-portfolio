/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { GitHubActivity } from './components/GitHubActivity';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090D0B] text-[#F4F6F2] font-sans selection:bg-[#B7F23B] selection:text-[#090D0B]">
      {/* Top Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Flow */}
      <main>
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Professional Profile / About */}
        <About />

        {/* Technical Skills */}
        <Skills />

        {/* Featured & Additional Projects */}
        <Projects />

        {/* Education & Academic Timeline */}
        <Education />

        {/* Certifications & Verified Tracks */}
        <Certifications />

        {/* GitHub & Open Source Activity */}
        <GitHubActivity />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Printable Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
