const securityFeatures = [
  {
    title: 'Multi-Tenant SaaS Architecture',
    desc: 'Complete data isolation between university tenants. Each institution operates in its own isolated environment with separate databases, ensuring zero data leakage.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    details: ['Database-per-tenant isolation', 'Subdomain-based routing', 'Tenant configuration management', 'Cross-tenant access prevention'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'JWT Authentication',
    desc: 'Industry-standard JSON Web Token based authentication with short-lived access tokens and secure refresh token rotation.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    details: ['Short-lived access tokens', 'Secure refresh rotation', 'Token blacklisting', 'Device session management'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Authorization Guards',
    desc: 'Every API endpoint and UI route is protected by granular authorization guards that enforce role-based access policies at the request level.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    details: ['Per-route authorization', 'Resource-level guards', 'Policy enforcement', 'Audit logging'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Subdomain Routing',
    desc: 'Each university gets a dedicated subdomain (e.g., mituniversity.campusping.in) with automatic SSL, routing isolation, and custom branding.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    details: ['Auto-provisioned subdomains', 'SSL certificate management', 'Custom domain support', 'Traffic isolation'],
    color: 'from-teal-500 to-emerald-500',
  },
  {
    title: 'API Security',
    desc: 'Rate limiting, request validation, CORS policies, and input sanitization protect against common attack vectors.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    details: ['Rate limiting', 'CORS policies', 'Input sanitization', 'SQL injection prevention'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Data Encryption',
    desc: 'All data is encrypted at rest and in transit. Sensitive fields use additional encryption layers with key rotation policies.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    details: ['AES-256 encryption', 'TLS 1.3 in transit', 'Encrypted backups', 'Key rotation'],
    color: 'from-pink-500 to-rose-500',
  },
];

export default function Security() {
  return (
    <section className="py-20 bg-slate-900" id="security">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Security & Multi-Tenancy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Enterprise-Grade Security{' '}
            <span className="gradient-text">Built In</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            CampusPing is architected with security at its core — not as an afterthought.
            Every layer of the system is designed to protect institutional data.
          </p>
        </div>

        {/* Architecture Banner */}
        <div className="mb-12 bg-gradient-to-r from-indigo-900/50 to-violet-900/50 border border-indigo-500/20 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1">
              <div className="text-indigo-300 text-sm font-medium mb-2">Multi-Tenant Architecture</div>
              <h3 className="text-white text-xl font-bold mb-2">Complete Tenant Isolation</h3>
              <p className="text-slate-400 text-sm">
                Each university runs in its own isolated environment. A breach or issue in one
                tenant has zero impact on others. This is enterprise SaaS done right.
              </p>
            </div>
            {/* Architecture Diagram */}
            <div className="flex-shrink-0 flex items-center gap-3">
              {['MIT Uni', 'IIT Bombay', 'XLRI'].map((uni, i) => (
                <div key={uni} className="text-center">
                  <div className={`w-20 h-14 rounded-xl border-2 ${i === 1 ? 'border-indigo-400 bg-indigo-500/20' : 'border-slate-600 bg-slate-700/50'} flex flex-col items-center justify-center`}>
                    <div className="text-xl">{['🏛️', '🎓', '📚'][i]}</div>
                    <div className="text-xs text-slate-300 mt-0.5 font-medium">{uni}</div>
                  </div>
                  {i < 2 && (
                    <div className="hidden sm:block" />
                  )}
                </div>
              ))}
              <div className="flex flex-col items-center">
                <div className="text-slate-400 text-xs mb-1">Isolated</div>
                <svg width="40" height="20" viewBox="0 0 40 20">
                  <line x1="0" y1="10" x2="40" y2="10" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 2" />
                  <polygon points="35,5 40,10 35,15" fill="#6366f1" />
                </svg>
                <div className="text-slate-400 text-xs mt-1">Tenants</div>
              </div>
              <div className="w-16 h-20 rounded-xl border-2 border-indigo-500/50 bg-indigo-900/50 flex flex-col items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
                <div className="text-indigo-300 text-xs mt-1 text-center font-medium">CampusPing</div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature) => (
            <div
              key={feature.title}
              className="glass-dark rounded-2xl p-6 card-hover group"
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-white font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{feature.desc}</p>
              <ul className="space-y-1.5">
                {feature.details.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-slate-300 text-xs">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Compliance badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {['🔒 SOC 2 Ready', '🛡️ GDPR Compliant', '🔐 ISO 27001 Aligned', '✅ OWASP Top 10', '🏥 FERPA Ready'].map((badge) => (
            <div key={badge} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-slate-300 text-sm font-medium">
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
