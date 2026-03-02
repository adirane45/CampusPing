'use client';
import { useState, FormEvent } from 'react';

interface FormData {
  universityName: string;
  contactPerson: string;
  email: string;
  phone: string;
  studentStrength: string;
}

export default function WaitlistForm() {
  const [formData, setFormData] = useState<FormData>({
    universityName: '',
    contactPerson: '',
    email: '',
    phone: '',
    studentStrength: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="py-20 section-gradient" id="waitlist">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Join the Waitlist
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Get <span className="gradient-text">Early Access</span> to CampusPing
          </h2>
          <p className="text-slate-500 text-lg">
            Join forward-thinking universities already on our waitlist.
            Be among the first to transform your campus communication.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white border border-green-200 rounded-2xl p-10 text-center shadow-xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">You&apos;re on the list! 🎉</h3>
            <p className="text-slate-500 mb-6">
              Thank you for your interest in CampusPing. Our team will reach out to
              <strong> {formData.email}</strong> within 24–48 hours to discuss your university&apos;s
              requirements and next steps.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                ✅ Application received
              </div>
              <div className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                📧 Confirmation email sent
              </div>
              <div className="px-4 py-2 bg-violet-50 text-violet-700 rounded-full text-sm font-medium">
                🎓 Demo call will be scheduled
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xl">
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-3 mb-8 pb-6 border-b border-slate-100">
              {[
                { icon: '🔒', text: 'Data is secure & private' },
                { icon: '⚡', text: 'Response within 24h' },
                { icon: '🆓', text: 'Free to join, no commitment' },
              ].map((t) => (
                <div key={t.text} className="flex items-center gap-1.5 text-slate-500 text-xs">
                  <span>{t.icon}</span>
                  <span>{t.text}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* University Name */}
              <div>
                <label htmlFor="universityName" className="block text-sm font-semibold text-slate-700 mb-1.5">
                  University / Institution Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="universityName"
                  name="universityName"
                  value={formData.universityName}
                  onChange={handleChange}
                  required
                  placeholder="e.g., MIT World Peace University"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow text-sm"
                />
              </div>

              {/* Contact Person */}
              <div>
                <label htmlFor="contactPerson" className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Contact Person <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Dr. Priya Sharma, IT Director"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow text-sm"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Official Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="admin@university.edu"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow text-sm"
                  />
                </div>
              </div>

              {/* Student Strength */}
              <div>
                <label htmlFor="studentStrength" className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Expected Student Strength <span className="text-red-500">*</span>
                </label>
                <select
                  id="studentStrength"
                  name="studentStrength"
                  value={formData.studentStrength}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow text-sm bg-white"
                >
                  <option value="">Select approximate student count</option>
                  <option value="under-500">Under 500 students</option>
                  <option value="500-2000">500 – 2,000 students</option>
                  <option value="2000-5000">2,000 – 5,000 students</option>
                  <option value="5000-15000">5,000 – 15,000 students</option>
                  <option value="15000-plus">15,000+ students</option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 shimmer-btn text-white font-bold rounded-xl text-base shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    🚀 Request Early Access
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-center text-slate-400 text-xs">
                By submitting, you agree to receive communications from CampusPing.
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        )}

        {/* Contact direct */}
        <div className="mt-8 text-center text-slate-500 text-sm">
          Prefer to talk directly?{' '}
          <a
            href="mailto:support@campusping.in"
            className="text-indigo-600 font-medium hover:text-indigo-700 hover:underline"
          >
            support@campusping.in
          </a>
        </div>
      </div>
    </section>
  );
}
