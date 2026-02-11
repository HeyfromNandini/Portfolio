import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const events = [
  { year: '2024', title: 'Android Bootcamp', venue: 'Tech Community' },
  { year: '2024', title: 'AI & Automation Workshop', venue: 'Developer Conference' },
  { year: '2023', title: 'Hackathon Keynote', venue: 'College Tech Fest' },
  { year: '2023', title: 'Panel: Women in Tech', venue: 'Leadership Summit' },
];

const topics = [
  'Android fundamentals',
  'AI & automation',
  'Hackathon execution',
  'Developer education',
  'Community building',
];

const metrics = [
  { value: 150, suffix: '+', label: 'Students trained' },
  { value: 10, suffix: '+', label: 'Workshops delivered' },
  { value: 5, suffix: '', label: 'Topics covered' },
];

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {value}
      {suffix}
    </motion.span>
  );
}

export default function Speaking() {
  return (
    <div className="page page-speaking">
      <section className="speaking-hero">
        <div className="section-inner">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Speaking
          </motion.span>
          <motion.h1
            className="speaking-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Talks. Workshops. Developer Impact.
          </motion.h1>
          <motion.p
            className="speaking-subtitle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Stage-ready DevRel. Conference keynotes, bootcamps, and panels.
          </motion.p>
          <div className="speaking-hero-media">
            <motion.div
              className="speaking-hero-placeholder"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img src="/placeholder-speaking.svg" alt="" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="speaking-metrics">
        <div className="section-inner">
          <div className="metrics-grid">
            {metrics.map((m) => (
              <motion.div
                key={m.label}
                className="metric-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="metric-value">
                  <AnimatedCounter value={m.value} suffix={m.suffix} />
                </span>
                <span className="metric-label">{m.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="speaking-timeline">
        <div className="section-inner">
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Past engagements
          </motion.h2>
          <div className="timeline-list">
            {events.map((e, i) => (
              <motion.article
                key={e.title + e.year}
                className="timeline-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <span className="timeline-year">{e.year}</span>
                <div>
                  <h3>{e.title}</h3>
                  <p>{e.venue}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="speaking-topics">
        <div className="section-inner">
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Topics I speak on
          </motion.h2>
          <motion.div
            className="topics-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06 } },
            }}
          >
            {topics.map((t) => (
              <motion.div
                key={t}
                className="topic-card"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -2, scale: 1.02, transition: { duration: 0.2 } }}
              >
                {t}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="speaking-cta">
        <div className="section-inner">
          <motion.div
            className="cta-block"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Invite me to speak</h2>
            <p>Keynotes, workshops, panels — for conferences, colleges, and teams.</p>
            <Link to="/contact" className="btn btn-primary cta-glow">
              Get in touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
