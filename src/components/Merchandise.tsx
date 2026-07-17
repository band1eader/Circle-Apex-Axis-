import { motion } from 'framer-motion';
import { Heart, ExternalLink, Radio } from 'lucide-react';

const MERCHANDISE_LINKS = [
  {
    title: 'Bandcamp',
    description: 'Albums, merch, and exclusive content',
    url: 'https://circleapexaxis.bandcamp.com',
    icon: Music,
  },
  {
    title: 'Patreon',
    description: 'Support ongoing work and get exclusive content',
    url: 'https://patreon.com/circleapexaxis',
    icon: Heart,
  },
  {
    title: 'SoundClick',
    description: 'Catalog and archival recordings',
    url: 'https://www.soundclick.com/circleapexaxis',
    icon: Radio,
  },
];

function Music(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 18V5l12-2v13"/>
      <circle cx="6" cy="18" r="3"/>
      <circle cx="18" cy="16" r="3"/>
    </svg>
  );
}

export default function Merchandise() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-16 px-8 border-b border-white/20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">SUPPORT & CONNECT</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {MERCHANDISE_LINKS.map((link, idx) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="border border-white/20 p-6 hover:bg-white/5 transition group"
              >
                <Icon size={28} className="mb-4 group-hover:text-gray-300 transition" />
                <h3 className="font-bold text-lg mb-2">{link.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{link.description}</p>
                <div className="flex items-center gap-2 text-sm font-bold">
                  Visit <ExternalLink size={14} />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
