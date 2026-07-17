import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="border-b border-white/20 py-8 px-8"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter">CIRCLE APEX AXIS</h1>
        <p className="mt-2 text-gray-400 italic text-sm">
          NYC-based sovereign creative project. Avant-rock, electronica, and instrumental exploration.
        </p>
      </div>
    </motion.header>
  );
}
