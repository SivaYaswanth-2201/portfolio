import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate sending with graceful response & fallback mailto
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Also trigger mailto so message can actually be sent directly via user's email client
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoUrl;

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-t border-bone/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-signal font-semibold mb-2">
              <span className="text-bone/40">05 //</span>
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-bone">
              Initiate Contact & Collaboration
            </h2>
            <div className="h-1 w-16 bg-signal mt-3"></div>
          </div>

          <p className="font-mono text-xs text-dim mt-4 md:mt-0 max-w-sm">
            Whether for junior developer roles, internships, or technical conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Direct Channels & Closing Message (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Professional Closing Message */}
            <div className="p-6 bg-panel border border-bone/10">
              <div className="font-mono text-xs uppercase tracking-widest text-signal font-semibold mb-3">
                // Direct Communication
              </div>
              <p className="text-sm text-bone/85 leading-relaxed mb-4">
                I am actively seeking full-time opportunities as an entry-level Python Full Stack Developer.
                If you are looking for a disciplined, fast-learning engineer who values clean code, problem-solving, and continuous growth, I would love to connect.
              </p>
              <div className="pt-3 border-t border-bone/10 flex items-center gap-2 font-mono text-xs text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Immediate Joining & Open to Relocation</span>
              </div>
            </div>

            {/* Contact Channels List */}
            <div className="space-y-3 font-mono text-xs">
              
              {/* Email Card with Copy Button */}
              <div className="p-4 bg-panel border border-bone/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-panel-light flex items-center justify-center text-signal">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-dim block">EMAIL ADDRESS</span>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-bone hover:text-signal transition-colors font-medium"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 text-dim hover:text-signal hover:bg-panel-light transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 bg-panel border border-bone/10 flex items-center gap-3">
                <div className="w-8 h-8 bg-panel-light flex items-center justify-center text-signal">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-dim block">PHONE NUMBER</span>
                  <a 
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-bone hover:text-signal transition-colors font-medium"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 bg-panel border border-bone/10 flex items-center gap-3">
                <div className="w-8 h-8 bg-panel-light flex items-center justify-center text-signal">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-dim block">CURRENT LOCATION</span>
                  <span className="text-bone font-medium">
                    {personalInfo.locationDisplay}
                  </span>
                </div>
              </div>

            </div>

            {/* Social Network Profiles */}
            <div className="pt-2 flex items-center gap-3 font-mono text-xs">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-panel hover:bg-panel-light border border-bone/10 hover:border-signal text-bone hover:text-signal flex items-center justify-center gap-2 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-signal" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-panel hover:bg-panel-light border border-bone/10 hover:border-signal text-bone hover:text-signal flex items-center justify-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4 text-signal" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="hud-frame p-6 sm:p-8 bg-panel border border-bone/10">
              
              <div className="flex items-center justify-between border-b border-bone/10 pb-4 mb-6 font-mono text-xs">
                <span className="text-signal font-bold uppercase tracking-wider">&gt; contact_form.jsx</span>
                <span className="text-dim">TLS_ENCRYPTED</span>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Message Dispatched Successfully!</p>
                    <p className="text-[11px] text-emerald-400/80">
                      Opening your email client to send the inquiry directly to {personalInfo.email}. Thank you for reaching out!
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block font-mono text-[11px] uppercase tracking-wider text-signal font-semibold">
                      &gt; Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full bg-ink border px-3.5 py-2.5 text-sm text-bone placeholder-dim/40 font-mono focus:outline-none transition-colors ${
                        errors.name ? 'border-red-400 focus:border-red-400' : 'border-bone/15 focus:border-signal'
                      }`}
                    />
                    {errors.name && (
                      <p className="font-mono text-[11px] text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block font-mono text-[11px] uppercase tracking-wider text-signal font-semibold">
                      &gt; Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={`w-full bg-ink border px-3.5 py-2.5 text-sm text-bone placeholder-dim/40 font-mono focus:outline-none transition-colors ${
                        errors.email ? 'border-red-400 focus:border-red-400' : 'border-bone/15 focus:border-signal'
                      }`}
                    />
                    {errors.email && (
                      <p className="font-mono text-[11px] text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block font-mono text-[11px] uppercase tracking-wider text-signal font-semibold">
                    &gt; Subject / Position <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Python Full Stack Developer Opening / Technical Interview"
                    className={`w-full bg-ink border px-3.5 py-2.5 text-sm text-bone placeholder-dim/40 font-mono focus:outline-none transition-colors ${
                      errors.subject ? 'border-red-400 focus:border-red-400' : 'border-bone/15 focus:border-signal'
                    }`}
                  />
                  {errors.subject && (
                    <p className="font-mono text-[11px] text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block font-mono text-[11px] uppercase tracking-wider text-signal font-semibold">
                    &gt; Message Body <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe the role, requirements or question..."
                    className={`w-full bg-ink border px-3.5 py-2.5 text-sm text-bone placeholder-dim/40 font-mono focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-red-400 focus:border-red-400' : 'border-bone/15 focus:border-signal'
                    }`}
                  />
                  {errors.message && (
                    <p className="font-mono text-[11px] text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-signal text-ink hover:bg-bone font-mono text-xs font-bold uppercase tracking-[0.25em] transition-all duration-200 flex items-center justify-between disabled:opacity-50 group mt-4 shadow-lg shadow-signal/20 hover:shadow-none"
                >
                  <span>{isSubmitting ? 'Transmitting Data...' : 'Transmit Message'}</span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
