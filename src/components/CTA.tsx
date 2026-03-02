export default function CTA() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden" id="cta">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-2xl shadow-indigo-500/30 mb-6 animate-pulse-glow">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Be Among the First Universities to Experience{' '}
          <span className="gradient-text">Smart Communication</span>
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          CampusPing is in active development and we are onboarding select universities
          for our early access program. Get priority access, influence the product roadmap,
          and enjoy special founding-university pricing.
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            '✅ Free onboarding assistance',
            '✅ Priority feature requests',
            '✅ Founding university pricing',
            '✅ Dedicated support channel',
          ].map((benefit) => (
            <div
              key={benefit}
              className="px-4 py-2 bg-white/10 border border-white/20 text-slate-200 text-sm rounded-full backdrop-blur-sm"
            >
              {benefit}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 shimmer-btn text-white font-bold rounded-xl text-lg shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all duration-200"
          >
            🎓 Request Demo
          </a>
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-bold rounded-xl text-lg hover:bg-white/20 hover:-translate-y-1 transition-all duration-200 backdrop-blur-sm"
          >
            🚀 Join Early Access
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-10 flex items-center justify-center gap-6 text-slate-400 text-sm">
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            No credit card required
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-600" />
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Setup in under 24 hours
          </div>
          <div className="w-1 h-1 rounded-full bg-slate-600" />
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.32 2 2 0 0 1 3.6 1.11h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8a16 16 0 0 0 6 6l.77-.77a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Dedicated support
          </div>
        </div>
      </div>
    </section>
  );
}
