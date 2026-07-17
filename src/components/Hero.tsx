import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="py-20 px-8 border-b border-white/20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 tracking-wide">SOVEREIGN SOUND</h2>
        <p className="text-lg leading-relaxed text-gray-300 max-w-2xl">
          Forged in repeating creative cycles; turning invisible chaos into structured, sovereign power. 
          Circle Apex Axis operates at the intersection of avant-garde composition, electronic experimentation, 
          and ritualistic intention.
        </p>
      </div>
    </motion.section>
  );
}
