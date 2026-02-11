const buckets = [
  {
    icon: '💻',
    title: 'I Build',
    items: [
      'Android apps (Kotlin, Jetpack Compose)',
      'AI agents & automation systems (n8n, workflows)',
      'MVPs for startups',
      'Full-stack product systems',
    ],
  },
  {
    icon: '🎤',
    title: 'I Teach',
    items: [
      'Android fundamentals (150+ students trained)',
      'AI & automation workshops',
      'Hackathon execution frameworks',
      'Beginner-to-builder journeys',
    ],
  },
  {
    icon: '🌍',
    title: 'I Lead',
    items: [
      'Community programs & tech events',
      'Open-source mentorship',
      'Developer ecosystems',
      'Women-in-tech initiatives',
    ],
  },
];

export default function ImpactBuckets() {
  return (
    <section className="impact" id="what-i-do">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-label">What I Do</span>
          <h2>Impact, not roles</h2>
          <p className="section-intro">
            Role-fluid. Identity-strong. Grouped by outcome.
          </p>
        </div>
        <div className="impact-grid">
          {buckets.map((bucket) => (
            <article key={bucket.title} className="impact-card">
              <span className="impact-icon" aria-hidden>{bucket.icon}</span>
              <h3>{bucket.title}</h3>
              <ul>
                {bucket.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
