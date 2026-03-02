const capabilities = [
  {
    title: 'Analytics Dashboard',
    desc: 'Deep insights into notice performance — reach rates, engagement metrics, department comparisons, and trend analysis over time.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    visual: (
      <div className="mt-4 bg-slate-50 rounded-xl p-3">
        <div className="flex items-end gap-1.5 h-16">
          {[60, 45, 80, 55, 90, 70, 85, 65, 75, 95, 80, 70].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-indigo-500 to-violet-400 opacity-80"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="mt-1 flex justify-between text-slate-400 text-xs">
          <span>Jan</span><span>Jun</span><span>Dec</span>
        </div>
      </div>
    ),
    badge: '↑ 34% engagement',
    badgeColor: 'text-green-600 bg-green-50',
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'Bulk Operations',
    desc: 'Select and act on multiple notices at once — bulk publish, archive, delete, or reassign to different departments with a single action.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    visual: (
      <div className="mt-4 space-y-1.5">
        {['Exam Schedule PDF', 'Workshop Notice', 'Fee Reminder', 'Holiday Notice'].map((item, i) => (
          <div key={item} className="flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-1.5">
            <div className={`w-3 h-3 rounded ${i < 3 ? 'bg-indigo-500' : 'bg-slate-200'} flex-shrink-0`} />
            <span className="text-slate-600 text-xs">{item}</span>
          </div>
        ))}
      </div>
    ),
    badge: '3 selected',
    badgeColor: 'text-indigo-600 bg-indigo-50',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Targeted Delivery',
    desc: 'Precisely target notices to specific departments, years, courses, or individual users. Zero noise for unrelated audiences.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    visual: (
      <div className="mt-4 flex flex-wrap gap-1.5">
        {[
          { label: 'CS Dept', active: true },
          { label: 'Year 3', active: true },
          { label: 'MBA', active: false },
          { label: 'All Staff', active: true },
          { label: 'Hostel', active: false },
          { label: 'Library', active: false },
        ].map((tag) => (
          <span
            key={tag.label}
            className={`text-xs px-2.5 py-1 rounded-full font-medium ${
              tag.active
                ? 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                : 'bg-slate-100 text-slate-400'
            }`}
          >
            {tag.label}
          </span>
        ))}
      </div>
    ),
    badge: '2.3K recipients',
    badgeColor: 'text-blue-600 bg-blue-50',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Smart Calendar Integration',
    desc: 'Event-based notices automatically appear in the university calendar. Students see all deadlines, events and notices in one timeline view.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    visual: (
      <div className="mt-4 bg-slate-50 rounded-xl p-3">
        <div className="grid grid-cols-7 gap-0.5 text-center">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d) => (
            <div key={d} className="text-slate-400 text-xs font-medium py-1">{d}</div>
          ))}
          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((d) => (
            <div
              key={d}
              className={`text-xs py-1 rounded-md ${
                [3, 7, 10, 14].includes(d)
                  ? 'bg-indigo-500 text-white font-semibold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {d}
            </div>
          ))}
        </div>
      </div>
    ),
    badge: '4 events this week',
    badgeColor: 'text-violet-600 bg-violet-50',
    gradient: 'from-teal-500 to-emerald-500',
  },
  {
    title: 'Deep Linking',
    desc: 'Every notice gets a unique shareable URL with deep link support. Share directly to WhatsApp, email, or embed in existing portals.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    visual: (
      <div className="mt-4 bg-slate-50 rounded-xl p-3">
        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          <span className="text-indigo-600 text-xs truncate">mit.campusping.in/notice/exam-sch-24</span>
        </div>
        <div className="flex gap-2 mt-2">
          {['📱 App', '🌐 Web', '📧 Email', '💬 Chat'].map((c) => (
            <span key={c} className="text-xs bg-white border border-slate-200 text-slate-600 px-2 py-0.5 rounded-md">{c}</span>
          ))}
        </div>
      </div>
    ),
    badge: 'Universal links',
    badgeColor: 'text-emerald-600 bg-emerald-50',
    gradient: 'from-orange-500 to-amber-500',
  },
];

export default function Advanced() {
  return (
    <section className="py-20 section-gradient" id="advanced">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            Advanced Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Beyond the Basics —{' '}
            <span className="gradient-text">Powerful at Every Level</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            CampusPing goes beyond simple notice posting with advanced capabilities
            that make it a true enterprise communication platform.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className={`bg-white border border-slate-200 rounded-2xl p-6 card-hover hover:border-indigo-300 hover:shadow-xl group ${
                i === capabilities.length - 1 && capabilities.length % 3 !== 0
                  ? 'sm:col-span-2 lg:col-span-1'
                  : ''
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cap.gradient} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                  {cap.icon}
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${cap.badgeColor}`}>
                  {cap.badge}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{cap.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{cap.desc}</p>
              {cap.visual}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
