import React, { useState } from 'react';
import { SITE_CONFIG } from '../../data/config';

interface ContactSectionProps {
  prefilledService?: string;
  onOpenPrivacy: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledService = '',
  onOpenPrivacy,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    serviceInterest: prefilledService || SITE_CONFIG.services[0].title,
    budgetRange: '',
    projectDescription: '',
    preferredContact: 'Work Email',
    consent: false,
    honeypot: '', // Spam bot protection
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedPayload, setSubmittedPayload] = useState<{
    summary: string;
    mailtoUrl: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  // Update prefilled if prop changes
  React.useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, serviceInterest: prefilledService }));
    }
  }, [prefilledService]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!formData.workEmail.trim()) {
      errs.workEmail = 'Work email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs.workEmail = 'Please provide a valid email format.';
    }
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required.';
    if (!formData.projectDescription.trim() || formData.projectDescription.length < 20) {
      errs.projectDescription = 'Please provide at least 20 characters describing your project goals.';
    }
    if (!formData.consent) {
      errs.consent = 'You must acknowledge the privacy notice to submit an inquiry.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Silent discard for bots

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate validation pass
    setTimeout(() => {
      setIsSubmitting(false);

      const summaryText = `INQUIRY FOR TECHNOVINZ
From: ${formData.fullName} (${formData.companyName})
Email: ${formData.workEmail}
Practice of Interest: ${formData.serviceInterest}
Budget Scope: ${formData.budgetRange || 'Not specified'}
Preferred Contact: ${formData.preferredContact}

Project Description:
${formData.projectDescription}`;

      const subject = encodeURIComponent(`Project Inquiry: ${formData.companyName} - ${formData.serviceInterest}`);
      const body = encodeURIComponent(summaryText);
      const mailto = `mailto:${SITE_CONFIG.contact.inquiryEmail}?subject=${subject}&body=${body}`;

      setSubmittedPayload({
        summary: summaryText,
        mailtoUrl: mailto,
      });
    }, 600);
  };

  const handleCopy = () => {
    if (submittedPayload) {
      navigator.clipboard.writeText(submittedPayload.summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context, Disclaimers & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A38B70]" />
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#777269]">
                INITIATE COLLABORATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#272722] leading-[1.12]">
              Have an Idea Worth Building?
            </h2>

            <p className="text-base sm:text-lg text-[#777269] leading-relaxed">
              Tell us what you are working on, what is getting in the way, and what you would like to achieve. We will use that information to understand the opportunity and discuss the next steps.
            </p>

            {/* Configured Contact Info Box */}
            <div className="p-6 rounded-2xl bg-[#FFFCF7] border border-[#E4DACE] space-y-4">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#A38B70]">
                DIRECT COMMUNICATION ENDPOINTS
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[10px] text-[#777269] font-mono block">Primary Inquiries:</span>
                  <span className="font-mono font-medium text-[#272722]">
                    {SITE_CONFIG.contact.inquiryEmail}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-[#777269] font-mono block">Operating Region:</span>
                  <span className="text-[#272722]">{SITE_CONFIG.contact.location}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#777269] font-mono block">Turnaround:</span>
                  <span className="text-[#272722]">{SITE_CONFIG.contact.responseCommitment}</span>
                </div>
              </div>

              {/* Clear Transparent Notice on Configuration */}
              <div className="pt-3 border-t border-[#F1E9DC] text-[11px] font-mono text-[#777269]">
                <span className="text-[#A38B70] font-bold block mb-0.5">ENDPOINT TRANSPARENCY:</span>
                {SITE_CONFIG.contact.placeholderNotice}
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form or Submission Review */}
          <div className="lg:col-span-7">
            {submittedPayload ? (
              /* Honest status view when submitted without live email backend */
              <div className="bg-[#FFFCF7] border border-[#A38B70] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm animate-in fade-in duration-200">
                <div className="flex items-center gap-3 pb-4 border-b border-[#E4DACE]">
                  <div className="w-8 h-8 rounded-full bg-[#D8C4A8] text-[#272722] flex items-center justify-center font-mono text-xs font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-editorial font-bold text-[#272722]">
                      Inquiry Package Prepared
                    </h3>
                    <p className="text-xs font-mono text-[#777269]">
                      VALIDATED AGAINST SPECIFICATION
                    </p>
                  </div>
                </div>

                {/* Honest disclaimer notice */}
                <div className="p-4 rounded-xl bg-[#F8F5EF] border border-[#E4DACE] text-xs text-[#777269] space-y-1.5 leading-relaxed">
                  <p className="font-semibold text-[#272722]">
                    Submission Status Notification:
                  </p>
                  <p>
                    Because this demonstration environment operates without an active third-party email routing service configured, your inquiry has not been silently dispatched to a commercial CRM.
                  </p>
                  <p>
                    You can inspect your compiled inquiry package below and transmit it directly via your mail client or copy the structured text:
                  </p>
                </div>

                {/* Structured Payload display */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#777269]">
                    <span>STRUCTURED INQUIRY PAYLOAD</span>
                    <button
                      onClick={handleCopy}
                      className="text-[#272722] hover:text-[#A38B70] underline cursor-pointer font-sans"
                    >
                      {copied ? 'Copied to Clipboard!' : 'Copy Summary'}
                    </button>
                  </div>
                  <pre className="p-4 rounded-xl bg-[#282923] text-[#F8F5EF] text-xs font-mono overflow-x-auto leading-relaxed">
                    {submittedPayload.summary}
                  </pre>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={submittedPayload.mailtoUrl}
                    className="px-5 py-2.5 text-xs font-semibold text-[#F8F5EF] bg-[#282923] rounded-lg hover:bg-[#3d3f37] transition-colors"
                  >
                    Open Mail Client ({SITE_CONFIG.contact.inquiryEmail})
                  </a>
                  <button
                    onClick={() => setSubmittedPayload(null)}
                    className="px-4 py-2.5 text-xs font-medium text-[#777269] hover:text-[#272722] bg-white border border-[#E4DACE] rounded-lg transition-colors cursor-pointer"
                  >
                    Edit Information
                  </button>
                </div>
              </div>
            ) : (
              /* The Form */
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-[#FFFCF7] border border-[#E4DACE] rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm"
              >
                {/* Honeypot field */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="organization_identifier"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#272722]">
                      Full Name <span className="text-[#A38B70]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Elena Rostova"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-xs text-[#272722] placeholder:text-[#777269]/50 focus:outline-none focus:border-[#272722] ${
                        errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#E4DACE]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Work Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#272722]">
                      Work Email <span className="text-[#A38B70]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="e.g. elena@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-xs text-[#272722] placeholder:text-[#777269]/50 focus:outline-none focus:border-[#272722] ${
                        errors.workEmail ? 'border-red-400 bg-red-50/20' : 'border-[#E4DACE]'
                      }`}
                    />
                    {errors.workEmail && (
                      <p className="text-[11px] text-red-600">{errors.workEmail}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#272722]">
                      Company / Organization <span className="text-[#A38B70]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Apex Health Systems"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-xs text-[#272722] placeholder:text-[#777269]/50 focus:outline-none focus:border-[#272722] ${
                        errors.companyName ? 'border-red-400 bg-red-50/20' : 'border-[#E4DACE]'
                      }`}
                    />
                    {errors.companyName && (
                      <p className="text-[11px] text-red-600">{errors.companyName}</p>
                    )}
                  </div>

                  {/* Service of Interest */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#272722]">
                      Practice of Interest
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E4DACE] text-xs text-[#272722] focus:outline-none focus:border-[#272722] cursor-pointer"
                    >
                      {SITE_CONFIG.services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Optional Budget & Preferred Contact Method */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#272722]">
                      Estimated Budget Range <span className="text-[#777269] text-[10px]">(Optional)</span>
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E4DACE] text-xs text-[#272722] focus:outline-none focus:border-[#272722] cursor-pointer"
                    >
                      <option value="">To be discussed in discovery</option>
                      <option value="$25k - $50k">$25,000 - $50,000 (Defined project scope)</option>
                      <option value="$50k - $100k">$50,000 - $100,000 (Multi-sprint build)</option>
                      <option value="$100k+">$100,000+ (Comprehensive enterprise system)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#272722]">
                      Preferred Contact Method
                    </label>
                    <div className="grid grid-cols-3 gap-1.5 pt-0.5">
                      {['Work Email', 'Video Call', 'Phone'].map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredContact: method })}
                          className={`py-2 text-[11px] font-medium rounded-lg border transition-colors cursor-pointer ${
                            formData.preferredContact === method
                              ? 'bg-[#282923] text-[#F8F5EF] border-[#282923]'
                              : 'bg-white text-[#777269] border-[#E4DACE] hover:text-[#272722]'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#272722]">
                    Project Description & Goals <span className="text-[#A38B70]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    placeholder="Describe what you are working on, operational bottlenecks, constraints, and your intended timeline..."
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-white border text-xs text-[#272722] placeholder:text-[#777269]/50 focus:outline-none focus:border-[#272722] leading-relaxed ${
                      errors.projectDescription ? 'border-red-400 bg-red-50/20' : 'border-[#E4DACE]'
                    }`}
                  />
                  {errors.projectDescription && (
                    <p className="text-[11px] text-red-600">{errors.projectDescription}</p>
                  )}
                </div>

                {/* Privacy Consent Checkbox */}
                <div className="space-y-1 pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 rounded border-[#E4DACE] text-[#282923] focus:ring-0"
                    />
                    <span className="text-xs text-[#777269] leading-snug">
                      I agree to the processing of submitted information to evaluate this project inquiry, in accordance with the{' '}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          onOpenPrivacy();
                        }}
                        className="text-[#272722] underline hover:text-[#A38B70]"
                      >
                        Privacy Policy
                      </button>
                      .
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-[11px] text-red-600">{errors.consent}</p>
                  )}
                </div>

                {/* Submit CTA */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-7 py-3 text-xs font-semibold tracking-wide text-[#F8F5EF] bg-[#282923] rounded-lg hover:bg-[#3d3f37] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? 'Validating Inquiry...' : 'Submit Project Inquiry'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
