import { motion } from 'framer-motion';

type Props = {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  delay?: number;
};

export default function SplitText({ text, className = '', as: Tag = 'h1', delay = 0 }: Props) {
  const words = text.split(' ');

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="split-word"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}{' '}
        </motion.span>
      ))}
    </Tag>
  );
}
