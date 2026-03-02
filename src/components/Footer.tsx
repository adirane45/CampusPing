export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4 w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
              <span className="text-white font-bold text-xl">
                Campus<span className="text-indigo-400">Ping</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              A production-ready Smart University Noticeboard System with enterprise-grade
              multi-tenant architecture, real-time notifications, and comprehensive analytics.
              Built for modern educational institutions.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-slate-400 text-xs">Early access program — now open</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Features', href: '#features' },
                { label: 'Security', href: '#security' },
                { label: 'Notifications', href: '#notifications' },
                { label: 'Advanced Capabilities', href: '#advanced' },
                { label: 'Multi-User Ecosystem', href: '#multiuser' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5 mb-6">
              {[
                { label: 'About CampusPing', href: '#about' },
                { label: 'Why CampusPing', href: '#why' },
                { label: 'Early Access', href: '#waitlist' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold text-sm mb-3">Contact</h4>
            <a
              href="mailto:support@campusping.in"
              className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 text-sm transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              support@campusping.in
            </a>
            <div className="mt-2 flex items-center gap-2 text-slate-400 text-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              campusping.in
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} CampusPing. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-500 text-xs">
            <span>🔒 Privacy Policy</span>
            <span>•</span>
            <span>📋 Terms of Service</span>
            <span>•</span>
            <span>🍪 Cookie Policy</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
