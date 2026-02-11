import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MeshBackground from '../components/MeshBackground';
import SplitText from '../components/SplitText';
import SocialLinks from '../components/SocialLinks';

const buckets = [
  {
    title: 'I Build',
    items: ['Android apps (Kotlin, Jetpack Compose)', 'AI agents & automation (n8n)', 'MVPs for startups', 'Full-stack product systems'],
  },
  {
    title: 'I Teach',
    items: ['Android fundamentals (150+ students)', 'AI & automation workshops', 'Hackathon frameworks', 'Beginner-to-builder journeys'],
  },
  {
    title: 'I Lead',
    items: ['Community programs & tech events', 'Open-source mentorship', 'Developer ecosystems', 'Women-in-tech initiatives'],
  },
];

const highlights = [
  { title: 'Tripify', subtitle: 'Product + AI', to: '/work', image: '/placeholder-project.svg' },
  { title: 'AI Agent System', subtitle: 'Automation architecture', to: '/work', image: '/placeholder-project.svg' },
  { title: 'Speaking & Workshops', subtitle: 'Stage-ready DevRel', to: '/speaking', image: '/placeholder-speaking.svg' },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="page page-home">
      <MeshBackground />

      <section className="hero-home">
        <div className="section-inner hero-inner">
          <div className="hero-text-block">
            <SplitText
              text="Mobile Engineer. AI Systems Builder. Developer Educator."
              className="hero-title"
              delay={0.2}
            />
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              I build products, design intelligent systems, and scale technical communities.
            </motion.p>
            <motion.div
              className="hero-ctas"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <Link to="/work" className="btn btn-primary">
                View Work
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <SocialLinks className="hero-socials" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="impact-home">
        <div className="section-inner">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            What I Do
          </motion.span>
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Build · Teach · Lead
          </motion.h2>
          <motion.div
            className="impact-grid"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {buckets.map((b) => (
              <motion.article
                key={b.title}
                className="impact-card"
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <h3>{b.title}</h3>
                <ul>
                  {b.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="philosophy-home">
        <div className="section-inner philosophy-inner">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Philosophy
          </motion.span>
          <motion.h2
            className="philosophy-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            How I think
            <span className="philosophy-underline" />
          </motion.h2>
          <motion.blockquote
            className="philosophy-quote"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I build systems that reduce friction — whether in code, learning, or communities.
            My goal is to make complex technology accessible and scalable.
          </motion.blockquote>
        </div>
      </section>

      <section className="highlights-home">
        <div className="section-inner">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured
          </motion.span>
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Highlights
          </motion.h2>
          <motion.div
            className="highlights-grid"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {highlights.map((h) => (
              <motion.div key={h.title} variants={item}>
                <Link to={h.to} className="highlight-card">
                  <div className="highlight-card-image">
                    <img src={h.image} alt="" />
                  </div>
                  <div className="highlight-card-body">
                    <h3>{h.title}</h3>
                    <p>{h.subtitle}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
