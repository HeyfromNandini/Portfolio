const projects = [
  {
    title: 'Tripify',
    image: '/placeholder-project.svg',
    problem: 'Travel planning friction',
    solution: 'Product + AI thinking for smarter trip design',
    tech: 'Product, AI',
    impact: 'Demonstrates product and AI systems thinking',
  },
  {
    title: 'Fitness App',
    image: '/placeholder-project.svg',
    problem: 'Client delivery & real-world constraints',
    solution: 'Full product delivery for a real client',
    tech: 'Android, Kotlin',
    impact: 'Real client delivery, production quality',
  },
  {
    title: 'AI Agent System',
    image: '/placeholder-project.svg',
    problem: 'Manual workflows and scaling',
    solution: 'Automation architecture with agents and workflows',
    tech: 'n8n, AI, automation',
    impact: 'Scalable automation and system design',
  },
  {
    title: 'Hackathon-winning solution',
    image: '/placeholder-project.svg',
    problem: 'Time-boxed innovation',
    solution: 'End-to-end solution under pressure',
    tech: 'Full-stack, rapid prototyping',
    impact: 'Impact + innovation under constraints',
  },
];

export default function FeaturedWork() {
  return (
    <section className="featured" id="featured-work">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-label">Featured Work</span>
          <h2>High signal only</h2>
          <p className="section-intro">
            Where recruiters stay. Where founders evaluate. Where DevRel sees depth.
          </p>
        </div>
        <div className="featured-grid">
          {projects.map((p) => (
            <article key={p.title} className="featured-card">
              <div className="featured-card-image-wrap">
                <img
                  src={p.image}
                  alt=""
                  className="featured-card-image"
                  width={400}
                  height={240}
                />
              </div>
              <div className="featured-card-body">
                <h3>{p.title}</h3>
                <dl className="featured-meta">
                  <div>
                    <dt>Problem</dt>
                    <dd>{p.problem}</dd>
                  </div>
                  <div>
                    <dt>Solution</dt>
                    <dd>{p.solution}</dd>
                  </div>
                  <div>
                    <dt>Tech</dt>
                    <dd>{p.tech}</dd>
                  </div>
                  <div>
                    <dt>Impact</dt>
                    <dd>{p.impact}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
