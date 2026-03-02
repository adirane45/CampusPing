export default function WhatIs() {
  const pillars = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Multi-Tenant SaaS',
      desc: 'Each university gets its own isolated environment with custom subdomain routing.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      ),
      title: 'Real-Time Delivery',
      desc: 'Instant push notifications across web, mobile and email channels.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
      title: 'Role-Based Access',
      desc: 'Granular permissions for admins, faculty, department heads, and students.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Enterprise Security',
      desc: 'JWT auth, authorization guards, encrypted data, and audit trails.',
    },
  ];

  return (
    <section className="py-20 bg-slate-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
              What is CampusPing?
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Smarter Communication for{' '}
              <span className="gradient-text">Modern Universities</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              CampusPing is a comprehensive Smart University Noticeboard System
              that digitalizes and streamlines institutional communication.
              Designed for universities, colleges, and educational institutions,
              it replaces outdated physical bulletin boards and fragmented email
              chains with a unified, intelligent platform.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              From posting urgent exam schedules to broadcasting campus events,
              CampusPing ensures every notice reaches the right person at the
              right time — with full analytics, role-based access controls, and
              multi-channel delivery.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {pillars.map((p) => (
                <div key={p.title} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">{p.title}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Animated dashboard mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl p-6 shadow-2xl border border-indigo-500/20">
              {/* Header bar */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-sm">CampusPing Portal</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs">Live</span>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 mb-4">
                {['All Notices', 'Urgent', 'Events', 'Drafts'].map((tab, i) => (
                  <button
                    key={tab}
                    className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                      i === 0
                        ? 'bg-indigo-500 text-white'
                        : 'bg-slate-700/50 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Notice cards */}
              <div className="space-y-3">
                {[
                  {
                    title: 'End Semester Examination Schedule',
                    dept: 'Academic Affairs',
                    time: '2 hours ago',
                    tag: 'Urgent',
                    tagColor: 'bg-red-500/20 text-red-400 border border-red-500/30',
                    read: 142,
                  },
                  {
                    title: 'Annual Technology Symposium 2024',
                    dept: 'Computer Science',
                    time: '5 hours ago',
                    tag: 'Event',
                    tagColor: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
                    read: 89,
                  },
                  {
                    title: 'Library Timings – Holiday Schedule',
                    dept: 'Library',
                    time: '1 day ago',
                    tag: 'Notice',
                    tagColor: 'bg-green-500/20 text-green-400 border border-green-500/30',
                    read: 234,
                  },
                ].map((notice) => (
                  <div
                    key={notice.title}
                    className="bg-slate-800/60 border border-slate-700/50 rounded-xl p-3 hover:border-indigo-500/40 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="text-slate-100 text-sm font-medium truncate">{notice.title}</div>
                        <div className="text-slate-400 text-xs mt-0.5">{notice.dept} • {notice.time}</div>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${notice.tagColor}`}>{notice.tag}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-slate-500 text-xs">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                      {notice.read} views
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom stats */}
              <div className="mt-4 pt-4 border-t border-slate-700/50 grid grid-cols-3 gap-3">
                {[
                  { label: 'Delivery Rate', value: '99.2%', icon: '📬' },
                  { label: 'Avg Response', value: '1.2s', icon: '⚡' },
                  { label: 'Uptime', value: '99.9%', icon: '🟢' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-lg">{s.icon}</div>
                    <div className="text-white text-sm font-bold">{s.value}</div>
                    <div className="text-slate-400 text-xs">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
