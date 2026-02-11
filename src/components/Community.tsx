const outcomes = [
  'Organized tech events',
  'Managed contributor programs',
  'Led 1,500+ student ecosystem',
  'Mentored developers',
  'Moderated CEO panel discussions',
];

export default function Community() {
  return (
    <section className="community" id="community">
      <div className="section-inner community-inner">
        <div className="section-head">
          <span className="section-label">Community & Leadership</span>
          <h2>Impact over designation</h2>
          <p className="section-intro">
            Outcomes, not titles. What got done.
          </p>
        </div>
        <div className="community-layout">
          <div className="community-image-wrap">
            <img
              src="/placeholder-community.svg"
              alt=""
              className="community-image"
              width={500}
              height={320}
            />
          </div>
          <ul className="community-list">
            {outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
