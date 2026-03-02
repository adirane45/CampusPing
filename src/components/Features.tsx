const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: 'Intelligent Notice Management',
    desc: 'Create, schedule, pin, and archive notices with smart categorization. Supports rich text, attachments, priority tagging, and expiration dates for complete lifecycle management.',
    highlights: ['Auto-expiry & archiving', 'Priority tags', 'Bulk operations', 'Version history'],
    gradient: 'from-indigo-500 to-blue-500',
    bgGlow: 'bg-indigo-500/10',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: 'Advanced Analytics',
    desc: 'Track notice reach, engagement metrics, read receipts, and department-level performance with intuitive dashboards and exportable reports.',
    highlights: ['Read receipts', 'Reach analytics', 'Dept. performance', 'Export reports'],
    gradient: 'from-violet-500 to-purple-500',
    bgGlow: 'bg-violet-500/10',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: 'Smart Search & Filter',
    desc: 'Full-text search with advanced filters by department, date range, notice type, and priority. Instant results with highlighted matches.',
    highlights: ['Full-text search', 'Faceted filtering', 'Recent searches', 'Saved filters'],
    gradient: 'from-blue-500 to-cyan-500',
    bgGlow: 'bg-blue-500/10',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
      </svg>
    ),
    title: 'File Attachments',
    desc: 'Attach PDFs, images, spreadsheets, and documents directly to notices. Secure cloud storage with preview support and download tracking.',
    highlights: ['Multi-format support', 'Secure storage', 'Download tracking', 'Preview in-app'],
    gradient: 'from-emerald-500 to-teal-500',
    bgGlow: 'bg-emerald-500/10',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    title: 'Rich Text Editor',
    desc: 'WYSIWYG editor with formatting tools, embedded media support, tables, code blocks, and structured templates for professional notices.',
    highlights: ['WYSIWYG editing', 'Embedded media', 'Templates library', 'Markdown support'],
    gradient: 'from-orange-500 to-amber-500',
    bgGlow: 'bg-orange-500/10',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: 'Smart Calendar Integration',
    desc: 'Automatically sync event-based notices to university calendar. Students and staff get a unified view of all upcoming academic activities.',
    highlights: ['Auto-sync events', 'iCal export', 'Reminders', 'Recurring notices'],
    gradient: 'from-pink-500 to-rose-500',
    bgGlow: 'bg-pink-500/10',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            Core Noticeboard Features
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need for{' '}
            <span className="gradient-text">Intelligent Notice Management</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            A complete suite of tools designed for modern educational institutions
            to manage, distribute, and track all internal communications.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white border border-slate-200 rounded-2xl p-6 card-hover hover:border-indigo-300 overflow-hidden"
            >
              {/* Background glow on hover */}
              <div className={`absolute inset-0 ${feature.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{feature.desc}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {feature.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold rounded-xl hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5"
          >
            Explore All Features
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
