import { useState } from 'react';
import { motion } from 'framer-motion';

const options = [
  { title: 'MVP & Product Consulting', desc: 'Build and ship with clarity.' },
  { title: 'Speaking & Workshops', desc: 'Keynotes, bootcamps, panels.' },
  { title: 'Developer Advocacy & DevRel', desc: 'Ecosystem and community.' },
  { title: 'AI Systems & Automation', desc: 'Agents, workflows, scale.' },
  { title: 'Community Collaborations', desc: 'Events and partnerships.' },
];

export default function Contact() {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <div className="page page-contact">
      <section className="contact-hero">
        <div className="section-inner">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact
          </motion.span>
          <motion.h1
            className="contact-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's work together
          </motion.h1>
          <motion.p
            className="contact-subtitle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Product consulting, speaking, DevRel, AI systems, community — one clear entry point.
          </motion.p>
        </div>
      </section>

      <section className="contact-options">
        <div className="section-inner">
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How we can collaborate
          </motion.h2>
          <motion.div
            className="options-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {options.map((o) => (
              <motion.article
                key={o.title}
                className="option-card"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
              >
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="section-inner contact-form-inner">
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get in touch
          </motion.h2>
          <motion.form
            className="contact-form"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                className={focused === 'name' ? 'focused' : ''}
              />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                className={focused === 'email' ? 'focused' : ''}
              />
            </div>
            <div className="form-row">
              <label htmlFor="interest">I'm interested in</label>
              <select
                id="interest"
                onFocus={() => setFocused('interest')}
                onBlur={() => setFocused(null)}
                className={focused === 'interest' ? 'focused' : ''}
              >
                <option value="">Select...</option>
                {options.map((o) => (
                  <option key={o.title} value={o.title}>{o.title}</option>
                ))}
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell me about your project or opportunity..."
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                className={focused === 'message' ? 'focused' : ''}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
          </motion.form>
          <motion.p
            className="contact-email"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Or email directly: <a href="mailto:hello@nandini.dev">hello@nandini.dev</a>
          </motion.p>
        </div>
      </section>
    </div>
  );
}
