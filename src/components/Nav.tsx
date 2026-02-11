import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const links = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/speaking', label: 'Speaking' },
  { to: '/community', label: 'Community' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <motion.header
      className="site-nav"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-inner">
        <NavLink to="/" className="nav-logo">
          Nandini Singh
        </NavLink>
        <nav className="nav-links" aria-label="Main">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              end={to === '/'}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
