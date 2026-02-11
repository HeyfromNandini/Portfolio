const offerings = [
  'Android bootcamps',
  'AI workshops',
  'Hackathon talks',
  'Panels moderated',
  'College keynotes',
];

export default function Speaking() {
  return (
    <section className="speaking" id="speaking">
      <div className="section-inner speaking-inner">
        <div className="section-head">
          <span className="section-label">Speaking & Workshops</span>
          <h2>Stage presence that converts</h2>
          <p className="section-intro">
            Conference organizers can instantly say yes. Topics, audience scale, and a clear invite.
          </p>
        </div>
        <div className="speaking-layout">
          <div className="speaking-image-wrap">
            <img
              src="/placeholder-speaking.svg"
              alt=""
              className="speaking-image"
              width={600}
              height={340}
            />
          </div>
          <div className="speaking-content">
            <ul className="speaking-list">
              {offerings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="speaking-cta">
              <strong>Topics you speak on:</strong> Android fundamentals, AI & automation, hackathon execution, developer education, community building.
            </p>
            <a href="#work-with-me" className="btn btn-primary">
              Invite me to speak
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
