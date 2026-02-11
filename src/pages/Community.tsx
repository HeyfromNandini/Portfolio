import { motion } from 'framer-motion';

const metrics = [
  { value: 1500, suffix: '+', label: 'Students in ecosystem' },
  { value: 20, suffix: '+', label: 'Events organized' },
  { value: 50, suffix: '+', label: 'Developers mentored' },
];

const events = [
  { title: 'Tech Community Meetup', image: '/placeholder-community.svg' },
  { title: 'Android Bootcamp', image: '/placeholder-community.svg' },
  { title: 'Women in Tech Panel', image: '/placeholder-community.svg' },
  { title: 'Open Source Sprint', image: '/placeholder-community.svg' },
];

const programs = [
  { period: '2024', name: 'Lead — Developer community program' },
  { period: '2024', name: 'Organized — Regional hackathon' },
  { period: '2023', name: 'Mentored — Open-source contributors' },
  { period: '2023', name: 'Moderated — CEO panel discussion' },
];

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {value}
      {suffix}
    </motion.span>
  );
}

export default function Community() {
  return (
    <div className="page page-community">
      <section className="community-hero">
        <div className="section-inner">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Community
          </motion.span>
          <motion.h1
            className="community-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Building ecosystems, not just code
          </motion.h1>
          <motion.p
            className="community-subtitle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Events, mentorship, contributor programs. Impact over designation.
          </motion.p>
        </div>
      </section>

      <section className="community-metrics">
        <div className="section-inner">
          <motion.div
            className="metrics-dashboard"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {metrics.map((m) => (
              <motion.div
                key={m.label}
                className="metric-card community-metric"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <span className="metric-value">
                  <AnimatedCounter value={m.value} suffix={m.suffix} />
                </span>
                <span className="metric-label">{m.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="community-events">
        <div className="section-inner">
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Event gallery
          </motion.h2>
          <motion.div
            className="events-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {events.map((e) => (
              <motion.article
                key={e.title}
                className="event-card"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="event-card-image">
                  <img src={e.image} alt="" />
                </div>
                <h3>{e.title}</h3>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="community-timeline">
        <div className="section-inner">
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Programs led
          </motion.h2>
          <div className="programs-list">
            {programs.map((p, i) => (
              <motion.div
                key={p.name}
                className="program-item"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <span className="program-period">{p.period}</span>
                <span className="program-name">{p.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="community-testimonials">
        <div className="section-inner">
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Testimonials
          </motion.h2>
          <motion.div
            className="testimonials-placeholder"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>Add short quotes from community members, event attendees, or mentees here.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
