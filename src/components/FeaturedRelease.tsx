import { motion } from 'framer-motion';
import { Music, ExternalLink } from 'lucide-react';

export default function FeaturedRelease() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-16 px-8 border-b border-white/20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Music size={24} /> Featured Release
        </h2>

        <div className="bg-white/5 border border-white/10 p-8 rounded-none hover:bg-white/10 transition">
          <h3 className="text-2xl font-bold mb-3">Kingdom of the Sun</h3>
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            A meditation on cyclical creation and temporal dissolution. Kingdom of the Sun synthesizes field recordings, 
            synthesizer work, and ritualistic sound design into a singular vision of autonomous composition.
          </p>

          <div className="flex gap-4">
            <a
              href="https://circleapexaxis.bandcamp.com/album/kingdom-of-the-sun"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-2 font-bold hover:bg-gray-200 transition"
            >
              Listen on Bandcamp <ExternalLink size={16} />
            </a>
            <a
              href="https://music.apple.com/artist/1887059935"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/30 px-6 py-2 font-bold hover:border-white transition"
            >
              Apple Music <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
