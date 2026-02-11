import SocialLinks from './SocialLinks';

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="section-inner hero-inner">
        <div className="hero-image-wrap">
          <img
            src="/hero-profile.svg"
            alt="Nandini Singh"
            className="hero-image"
            width={280}
            height={280}
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-name">Nandini Singh</h1>
          <p className="hero-tagline">
            Mobile Engineer · AI Systems Builder · Developer Educator
          </p>
          <p className="hero-desc">
            I build products, design intelligent systems, and scale technical communities.
          </p>
          <div className="hero-ctas">
            <a href="#featured-work" className="btn btn-primary">
              View Projects
            </a>
            <a href="#speaking" className="btn btn-secondary">
              Speaking
            </a>
            <a href="#content" className="btn btn-secondary">
              Content
            </a>
            <a href="#work-with-me" className="btn btn-ghost">
              Work With Me
            </a>
          </div>
          <SocialLinks className="hero-socials" />
        </div>
      </div>
    </header>
  );
}
