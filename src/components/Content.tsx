const channels = [
  { name: 'Instagram tech reels', note: 'Short-form technical content', image: '/placeholder-project.svg' },
  { name: 'LinkedIn thought leadership', note: 'Career and ecosystem insights', image: '/placeholder-project.svg' },
  { name: 'AI tool breakdowns', note: 'Practical, accessible demos', image: '/placeholder-project.svg' },
  { name: 'Product case studies', note: 'Build and ship thinking', image: '/placeholder-project.svg' },
  { name: 'Book: 7 Dates and the Bullets', note: 'Author — creative + systems', image: '/placeholder-project.svg' },
];

export default function Content() {
  return (
    <section className="content-section" id="content">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-label">Content & Media</span>
          <h2>Career-focused brand</h2>
          <p className="section-intro">
            DevRel potential. Community credibility. Personal brand power.
          </p>
        </div>
        <div className="content-grid">
          {channels.map((c) => (
            <article key={c.name} className="content-card">
              <div className="content-card-image-wrap">
                <img src={c.image} alt="" className="content-card-image" width={320} height={180} />
              </div>
              <div className="content-card-body">
                <h3>{c.name}</h3>
                {c.note && <p className="content-note">{c.note}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
