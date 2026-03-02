const notificationFeatures = [
  {
    icon: '📱',
    title: 'Multi-Channel Delivery',
    desc: 'Deliver notifications through push notifications, email, in-app alerts, and SMS simultaneously, ensuring maximum reach.',
    channels: [
      { label: 'Push Notification', icon: '📲', active: true },
      { label: 'Email', icon: '📧', active: true },
      { label: 'In-App', icon: '🔔', active: true },
      { label: 'SMS', icon: '💬', active: false },
    ],
  },
  {
    icon: '⏰',
    title: 'Smart Scheduling',
    desc: 'Schedule notices to be delivered at optimal times. Set automatic reminders and expiry alerts for time-sensitive notices.',
    channels: [
      { label: 'Schedule delivery', icon: '📅', active: true },
      { label: 'Auto reminders', icon: '⏰', active: true },
      { label: 'Expiry alerts', icon: '⚠️', active: true },
      { label: 'Recurring notices', icon: '🔄', active: false },
    ],
  },
  {
    icon: '🌙',
    title: 'Quiet Hours',
    desc: 'Respect user privacy with configurable quiet hours. Non-urgent notifications are held and delivered at appropriate times.',
    channels: [
      { label: 'User-defined hours', icon: '🕐', active: true },
      { label: 'Urgent override', icon: '🚨', active: true },
      { label: 'Timezone aware', icon: '🌍', active: true },
      { label: 'Weekend mode', icon: '🏖️', active: false },
    ],
  },
  {
    icon: '⚡',
    title: 'Real-Time Updates',
    desc: 'WebSocket-powered live updates ensure changes to notices are reflected instantly across all connected clients.',
    channels: [
      { label: 'WebSocket live sync', icon: '🔗', active: true },
      { label: 'Read receipts', icon: '✓✓', active: true },
      { label: 'Delivery status', icon: '📊', active: true },
      { label: 'Live view count', icon: '👁️', active: true },
    ],
  },
];

const notificationFlow = [
  { step: '1', label: 'Notice Created', icon: '✏️', color: 'bg-indigo-500' },
  { step: '2', label: 'Approval (if required)', icon: '✅', color: 'bg-violet-500' },
  { step: '3', label: 'Audience Targeted', icon: '🎯', color: 'bg-blue-500' },
  { step: '4', label: 'Multi-Channel Dispatch', icon: '📡', color: 'bg-purple-500' },
  { step: '5', label: 'Delivered & Tracked', icon: '📬', color: 'bg-indigo-600' },
];

export default function Notifications() {
  return (
    <section className="py-20 bg-white" id="notifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            Smart Notifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            The Right Notice,{' '}
            <span className="gradient-text">At the Right Time</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Intelligent notification engine that ensures every important update
            reaches its audience through the most effective channel.
          </p>
        </div>

        {/* Notification Flow */}
        <div className="mb-16 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl p-8 border border-indigo-500/20">
          <div className="text-center mb-8">
            <h3 className="text-white font-bold text-lg mb-1">Notification Journey</h3>
            <p className="text-slate-400 text-sm">From creation to delivery in milliseconds</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {notificationFlow.map((step, i) => (
              <div key={step.step} className="flex items-center gap-4">
                <div className="text-center">
                  <div className={`w-14 h-14 ${step.color} rounded-2xl flex flex-col items-center justify-center text-white shadow-lg mx-auto`}>
                    <span className="text-xl">{step.icon}</span>
                  </div>
                  <div className="text-white text-xs font-semibold mt-2 max-w-20 text-center">{step.label}</div>
                  <div className="text-slate-500 text-xs">Step {step.step}</div>
                </div>
                {i < notificationFlow.length - 1 && (
                  <div className="hidden sm:flex items-center text-indigo-500">
                    <svg width="24" height="16" viewBox="0 0 24 16">
                      <line x1="0" y1="8" x2="18" y2="8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
                      <polygon points="14,3 20,8 14,13" fill="currentColor" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Animated notification preview */}
          <div className="mt-8 border-t border-slate-700/50 pt-6">
            <div className="text-slate-400 text-xs text-center mb-4">Live notification preview</div>
            <div className="max-w-sm mx-auto">
              {/* Notification card */}
              <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 flex items-start gap-3 animate-notification">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="text-white text-sm font-semibold">CampusPing</div>
                    <div className="text-slate-400 text-xs">now</div>
                  </div>
                  <div className="text-slate-300 text-sm mt-0.5">📢 Exam timetable for May 2024 has been published</div>
                  <div className="text-slate-400 text-xs mt-1">Academic Affairs • Computer Science</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {notificationFeatures.map((feature) => (
            <div
              key={feature.title}
              className="border border-slate-200 rounded-2xl p-5 card-hover hover:border-indigo-300 hover:shadow-lg group"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="font-bold text-slate-900 mb-2 text-sm">{feature.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-4">{feature.desc}</p>
              <div className="space-y-1.5">
                {feature.channels.map((ch) => (
                  <div key={ch.label} className="flex items-center gap-2">
                    <span className="text-sm">{ch.icon}</span>
                    <span className={`text-xs ${ch.active ? 'text-slate-700' : 'text-slate-400'}`}>{ch.label}</span>
                    {ch.active ? (
                      <svg className="ml-auto" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <span className="ml-auto text-xs text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-full">Soon</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
