import { motion } from 'framer-motion';

export default function MeshBackground() {
  return (
    <div className="mesh-bg" aria-hidden>
      <motion.div
        className="mesh-blur mesh-blur-1"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="mesh-blur mesh-blur-2"
        animate={{
          x: [0, -25, 0],
          y: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="mesh-blur mesh-blur-3"
        animate={{
          x: [0, 15, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
