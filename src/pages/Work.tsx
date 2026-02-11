import { useState } from 'react';
import { motion } from 'framer-motion';

const navItems = ['Projects', 'AI Systems', 'Client Work', 'Tech Stack'];

const projects = [
  {
    title: 'Tripify',
    category: 'Product + AI',
    problem: 'Travel planning friction',
    solution: 'Product + AI thinking for smarter trip design',
    tech: 'Product, AI',
    image: '/placeholder-project.svg',
  },
  {
    title: 'Fitness App',
    category: 'Client Work',
    problem: 'Client delivery & real-world constraints',
    solution: 'Full product delivery for a real client',
    tech: 'Android, Kotlin',
    image: '/placeholder-project.svg',
  },
  {
    title: 'AI Agent System',
    category: 'AI Systems',
    problem: 'Manual workflows and scaling',
    solution: 'Automation architecture with agents and workflows',
    tech: 'n8n, AI, automation',
    image: '/placeholder-project.svg',
  },
];

const techStack = ['Kotlin', 'Jetpack Compose', 'Android', 'n8n', 'AI / LLMs', 'React', 'TypeScript', 'Node'];

export default function Work() {
  const [activeSection, setActiveSection] = useState('Projects');

  return (
    <div className="page page-work">
      <section className="work-hero">
        <div className="section-inner">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Work
          </motion.span>
          <motion.h1
            className="work-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Engineering depth × Product thinking
          </motion.h1>
          <motion.p
            className="work-subtitle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Android apps, AI agents, MVP systems. Structured and product-oriented.
          </motion.p>
        </div>
      </section>

      <nav className="work-sticky-nav">
        <div className="section-inner">
          <div className="work-nav-inner">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                className={`work-nav-btn ${activeSection === item ? 'active' : ''}`}
                onClick={() => setActiveSection(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section className="work-projects">
        <div className="section-inner">
          <motion.div
            className="work-cards"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
            }}
          >
            {projects.map((p) => (
              <motion.article
                key={p.title}
                className="work-card"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div className="work-card-image">
                  <img src={p.image} alt="" />
                </div>
                <div className="work-card-body">
                  <span className="work-card-category">{p.category}</span>
                  <h3>{p.title}</h3>
                  <dl className="work-card-meta">
                    <div><dt>Problem</dt><dd>{p.problem}</dd></div>
                    <div><dt>Solution</dt><dd>{p.solution}</dd></div>
                    <div><dt>Tech</dt><dd>{p.tech}</dd></div>
                  </dl>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="work-tech">
        <div className="section-inner">
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Tech Stack
          </motion.h2>
          <motion.div
            className="tech-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {techStack.map((t) => (
              <motion.span
                key={t}
                className="tech-pill"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
              >
                {t}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="work-architecture">
        <div className="section-inner">
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Architecture
          </motion.h2>
          <motion.div
            className="architecture-placeholder"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>Diagram placeholder — add your system architecture visual here.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
