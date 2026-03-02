const roles = [
  {
    title: 'Super Admin',
    badge: 'Full Access',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30',
    color: 'from-indigo-600 to-violet-600',
    perms: ['Manage all universities', 'Configure tenants', 'System settings', 'Billing & plans', 'Global analytics'],
    icon: '👑',
  },
  {
    title: 'University Admin',
    badge: 'Admin',
    badgeColor: 'bg-violet-500/20 text-violet-300 border border-violet-500/30',
    color: 'from-violet-600 to-purple-600',
    perms: ['Create departments', 'Manage faculty', 'All notice control', 'University analytics', 'User management'],
    icon: '🏛️',
  },
  {
    title: 'Department Head',
    badge: 'Dept. Admin',
    badgeColor: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
    color: 'from-blue-600 to-indigo-600',
    perms: ['Post dept. notices', 'Manage dept. staff', 'Draft approvals', 'Dept. analytics', 'Targeted delivery'],
    icon: '🎓',
  },
  {
    title: 'Faculty / Staff',
    badge: 'Contributor',
    badgeColor: 'bg-teal-500/20 text-teal-300 border border-teal-500/30',
    color: 'from-teal-600 to-cyan-600',
    perms: ['Create notices', 'Submit for review', 'View analytics', 'Manage own drafts', 'Comment & reply'],
    icon: '👨‍🏫',
  },
  {
    title: 'Student',
    badge: 'Reader',
    badgeColor: 'bg-green-500/20 text-green-300 border border-green-500/30',
    color: 'from-green-600 to-emerald-600',
    perms: ['View notices', 'Save favourites', 'Set preferences', 'Receive alerts', 'Calendar view'],
    icon: '🎒',
  },
];

const ecosystemFeatures = [
  {
    title: 'Role-Based Access Control',
    desc: 'Granular RBAC ensures users only see and do what they are authorized for. Every action is permission-checked.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Department Portals',
    desc: 'Each department gets a dedicated portal with its own notice board, settings, and analytics.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: 'Draft Management',
    desc: 'Faculty create drafts for department heads to review and approve before publishing, ensuring quality control.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    title: 'User Preferences',
    desc: 'Students and staff can customize notification preferences, quiet hours, and preferred notice categories.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

export default function MultiUser() {
  return (
    <section className="py-20 section-gradient" id="multiuser">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Multi-User Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Every Role,{' '}
            <span className="gradient-text">Perfectly Served</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            CampusPing supports a complete university hierarchy with carefully designed
            permissions for every user type — from system admins to students.
          </p>
        </div>

        {/* Role Cards */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {roles.map((role) => (
            <div
              key={role.title}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-5 w-48 text-center hover:border-indigo-500/50 hover:-translate-y-1 transition-all card-hover group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center text-2xl mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                {role.icon}
              </div>
              <div className="text-white font-semibold text-sm mb-1">{role.title}</div>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${role.badgeColor}`}>{role.badge}</span>
              <ul className="mt-3 space-y-1">
                {role.perms.map((p) => (
                  <li key={p} className="text-slate-400 text-xs flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Ecosystem Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecosystemFeatures.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-slate-200 rounded-2xl p-6 card-hover hover:border-indigo-300 hover:shadow-lg group"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
                {f.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-sm">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
