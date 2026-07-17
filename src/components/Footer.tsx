import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="border-t border-white/20 py-8 px-8 text-center text-gray-500 text-xs"
    >
      <div className="max-w-6xl mx-auto">
        <p>© {currentYear} Advocation Research Incorporated. All rights reserved.</p>
        <p className="mt-2">Circle Apex Axis is an independent creative project.</p>
      </div>
    </motion.footer>
  );
}
