export default function Hero() {
  const floatingCards = [
    {
      icon: '📢',
      title: 'New Notice Posted',
      desc: 'Exam Schedule – CS Dept',
      time: '2 min ago',
      color: 'from-indigo-500/20 to-violet-500/20',
      border: 'border-indigo-500/30',
      delay: 'animate-float',
    },
    {
      icon: '🔔',
      title: 'Urgent Alert',
      desc: 'Campus maintenance tomorrow',
      time: '5 min ago',
      color: 'from-violet-500/20 to-purple-500/20',
      border: 'border-violet-500/30',
      delay: 'animate-float2',
    },
    {
      icon: '📅',
      title: 'Event Reminder',
      desc: 'Annual Tech Fest – Register Now',
      time: '10 min ago',
      color: 'from-blue-500/20 to-indigo-500/20',
      border: 'border-blue-500/30',
      delay: 'animate-float3',
    },
  ];

  return (
    <section className="relative min-h-screen hero-gradient flex items-center overflow-hidden" id="hero">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl particle-1" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl particle-2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl particle-3" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              Now accepting early access applications
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Transform University{' '}
              <span className="gradient-text">Communication</span> with
              Intelligent Digital Notice Management
            </h1>

            {/* Subheadline */}
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
              A production-ready Smart University Noticeboard System built with
              enterprise-grade architecture, real-time notifications, and
              multi-tenant SaaS capabilities.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { value: '10x', label: 'Faster Communication' },
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '100%', label: 'Multi-Tenant Ready' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 px-6 py-3 shimmer-btn text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all duration-200"
              >
                🚀 Request Early Access
              </a>
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 hover:-translate-y-1 transition-all duration-200 backdrop-blur-sm"
              >
                📩 Join Waitlist
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex items-center gap-3 text-slate-400 text-sm">
              <div className="flex -space-x-2">
                {['bg-indigo-500', 'bg-violet-500', 'bg-blue-500', 'bg-purple-500'].map((color, i) => (
                  <div key={i} className={`w-7 h-7 rounded-full ${color} border-2 border-slate-900 flex items-center justify-center text-white text-xs font-bold`}>
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span>Trusted by university administrators nationwide</span>
            </div>
          </div>

          {/* Right: Floating Cards */}
          <div className="relative hidden lg:flex items-center justify-center h-[500px]">
            {/* Central dashboard preview */}
            <div className="absolute w-72 h-80 bg-slate-800/80 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-4 shadow-2xl animate-pulse-glow">
              {/* Dashboard Header */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="ml-2 flex-1 bg-slate-700 rounded h-4" />
              </div>
              <div className="space-y-2">
                {/* Nav bar mock */}
                <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg p-2 flex items-center justify-between">
                  <span className="text-white text-xs font-semibold">CampusPing Dashboard</span>
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white text-xs">A</span>
                  </div>
                </div>
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Notices', value: '248', color: 'text-indigo-400' },
                    { label: 'Active', value: '32', color: 'text-green-400' },
                    { label: 'Depts', value: '12', color: 'text-violet-400' },
                  ].map((s) => (
                    <div key={s.label} className="bg-slate-700/60 rounded p-2 text-center">
                      <div className={`text-sm font-bold ${s.color}`}>{s.value}</div>
                      <div className="text-slate-400 text-xs">{s.label}</div>
                    </div>
                  ))}
                </div>
                {/* Notice list mock */}
                {[
                  { title: 'Exam Schedule', dept: 'CS Dept', tag: 'Urgent', tagColor: 'bg-red-500/20 text-red-400' },
                  { title: 'Workshop Registration', dept: 'Admin', tag: 'Event', tagColor: 'bg-blue-500/20 text-blue-400' },
                  { title: 'Fee Payment Deadline', dept: 'Finance', tag: 'Notice', tagColor: 'bg-green-500/20 text-green-400' },
                ].map((item) => (
                  <div key={item.title} className="bg-slate-700/40 rounded-lg p-2 flex items-center justify-between">
                    <div>
                      <div className="text-slate-200 text-xs font-medium">{item.title}</div>
                      <div className="text-slate-400 text-xs">{item.dept}</div>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.tagColor}`}>{item.tag}</span>
                  </div>
                ))}
                {/* Analytics mini chart */}
                <div className="bg-slate-700/40 rounded-lg p-2">
                  <div className="text-slate-400 text-xs mb-1">Weekly Activity</div>
                  <div className="flex items-end gap-1 h-8">
                    {[40, 70, 55, 90, 65, 85, 75].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-indigo-500 to-violet-500 opacity-70"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating notification cards */}
            {floatingCards.map((card, i) => (
              <div
                key={card.title}
                className={`absolute glass border ${card.border} bg-gradient-to-br ${card.color} rounded-xl p-3 w-52 shadow-xl ${card.delay}`}
                style={{
                  top: i === 0 ? '5%' : i === 1 ? 'auto' : '15%',
                  bottom: i === 1 ? '10%' : 'auto',
                  left: i === 0 ? '-5%' : i === 2 ? 'auto' : 'auto',
                  right: i === 0 ? 'auto' : i === 1 ? '-8%' : '-10%',
                }}
              >
                <div className="flex items-start gap-2">
                  <span className="text-lg">{card.icon}</span>
                  <div>
                    <div className="text-white text-xs font-semibold">{card.title}</div>
                    <div className="text-slate-300 text-xs">{card.desc}</div>
                    <div className="text-slate-400 text-xs mt-1">{card.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
    </section>
  );
}
