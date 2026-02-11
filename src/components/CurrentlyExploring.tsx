const topics = [
  'Agentic AI systems',
  'Developer productivity workflows',
  'Product thinking in AI-first companies',
  'Scaling technical communities',
];

export default function CurrentlyExploring() {
  return (
    <section className="exploring" id="exploring">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-label">Currently Exploring</span>
          <h2>Evolution in motion</h2>
          <p className="section-intro">
            Where I'm headed next.
          </p>
        </div>
        <ul className="exploring-list">
          {topics.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
