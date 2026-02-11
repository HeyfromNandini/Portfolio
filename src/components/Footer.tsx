import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-inner footer-inner">
        <div className="footer-grid">
          <p className="footer-tagline">Nandini Singh — Build · Teach · Lead</p>
          <nav className="footer-links" aria-label="Footer">
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
            <Link to="/speaking">Speaking</Link>
            <Link to="/community">Community</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        <p className="footer-legal">
          Technical depth × Creative intelligence × Calm confidence.
        </p>
      </div>
    </footer>
  );
}
