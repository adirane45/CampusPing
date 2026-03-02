const reasons = [
  {
    icon: '🚀',
    title: 'Scalable SaaS Infrastructure',
    desc: 'Built on cloud-native architecture that scales automatically as your institution grows. Whether you have 500 or 50,000 students, CampusPing handles it seamlessly.',
    stat: '∞',
    statLabel: 'Scalability',
  },
  {
    icon: '🔒',
    title: 'Enterprise-Level Security',
    desc: 'Multi-tenant isolation, JWT authentication, authorization guards, and end-to-end encryption ensure your institutional data is always protected.',
    stat: '99.9%',
    statLabel: 'Security SLA',
  },
  {
    icon: '🎓',
    title: 'Designed for Universities',
    desc: 'Every feature is purpose-built for educational institutions. Not a generic CMS repurposed — a platform built from scratch for campus communication.',
    stat: '100%',
    statLabel: 'Education Focus',
  },
  {
    icon: '📈',
    title: 'Improves Engagement',
    desc: 'Multi-channel delivery and smart targeting ensure notices reach relevant audiences, dramatically increasing engagement rates versus traditional methods.',
    stat: '10x',
    statLabel: 'Better Reach',
  },
  {
    icon: '⚡',
    title: 'Reduces Communication Delays',
    desc: 'Real-time notifications mean zero lag between notice creation and student awareness. Critical updates reach everyone in under 2 seconds.',
    stat: '<2s',
    statLabel: 'Delivery Time',
  },
  {
    icon: '📊',
    title: 'Data-Driven Decisions',
    desc: 'Rich analytics help administrators understand which notices resonate, which departments are most active, and where communication gaps exist.',
    stat: '40+',
    statLabel: 'Metrics Tracked',
  },
];

const comparisons = [
  {
    feature: 'Multi-tenant architecture',
    campusping: true,
    traditional: false,
    generic: false,
  },
  {
    feature: 'Real-time notifications',
    campusping: true,
    traditional: false,
    generic: true,
  },
  {
    feature: 'Role-based access control',
    campusping: true,
    traditional: false,
    generic: false,
  },
  {
    feature: 'Department portals',
    campusping: true,
    traditional: false,
    generic: false,
  },
  {
    feature: 'Analytics & reporting',
    campusping: true,
    traditional: false,
    generic: false,
  },
  {
    feature: 'University-specific workflows',
    campusping: true,
    traditional: false,
    generic: false,
  },
  {
    feature: 'Smart scheduling & quiet hours',
    campusping: true,
    traditional: false,
    generic: false,
  },
];

export default function WhyCampusPing() {
  return (
    <section className="py-20 bg-white" id="why">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            Why CampusPing?
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why Universities Choose{' '}
            <span className="gradient-text">CampusPing</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Purpose-built for educational institutions, CampusPing delivers
            communication infrastructure that actually works at university scale.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group border border-slate-200 rounded-2xl p-6 card-hover hover:border-indigo-300 hover:shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{reason.icon}</div>
                <div className="text-right">
                  <div className="text-2xl font-black gradient-text">{reason.stat}</div>
                  <div className="text-slate-400 text-xs">{reason.statLabel}</div>
                </div>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{reason.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">
            How Does CampusPing Stack Up?
          </h3>
          <p className="text-slate-500 text-sm text-center mb-8">
            See how CampusPing compares to traditional methods and generic tools
          </p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left text-slate-600 text-sm font-semibold pb-4 pr-4">Feature</th>
                  <th className="text-center pb-4 px-4 min-w-32">
                    <div className="inline-flex flex-col items-center">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mb-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                        </svg>
                      </div>
                      <span className="text-indigo-700 font-bold text-sm">CampusPing</span>
                    </div>
                  </th>
                  <th className="text-center pb-4 px-4 min-w-32">
                    <div className="text-slate-500 font-semibold text-sm">Traditional<br />Notice Boards</div>
                  </th>
                  <th className="text-center pb-4 px-4 min-w-32">
                    <div className="text-slate-500 font-semibold text-sm">Generic<br />Email/CMS</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : ''}>
                    <td className="py-3 pr-4 text-slate-700 text-sm rounded-l-lg pl-3">{row.feature}</td>
                    <td className="py-3 px-4 text-center">
                      {row.campusping ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {row.traditional ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center rounded-r-lg">
                      {row.generic ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-100">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
