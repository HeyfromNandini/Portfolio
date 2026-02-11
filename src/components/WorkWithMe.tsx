const categories = [
  { emoji: '🚀', label: 'MVP & Product Consulting' },
  { emoji: '🎤', label: 'Speaking & Workshops' },
  { emoji: '🧑‍💻', label: 'Developer Advocacy & DevRel' },
  { emoji: '🤖', label: 'AI Systems & Automation' },
  { emoji: '🎓', label: 'Community Collaborations' },
];

export default function WorkWithMe() {
  return (
    <section className="work-with-me" id="work-with-me">
      <div className="section-inner">
        <div className="section-head">
          <span className="section-label">Work With Me</span>
          <h2>Clear categories. One entry point.</h2>
          <p className="section-intro">
            One clear email + LinkedIn. No confusion.
          </p>
        </div>
        <ul className="work-categories">
          {categories.map((c) => (
            <li key={c.label}>
              <span className="work-emoji" aria-hidden>{c.emoji}</span>
              {c.label}
            </li>
          ))}
        </ul>
        <div className="work-contact">
          <a href="mailto:hello@nandini.dev" className="btn btn-primary">
            Email me
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
