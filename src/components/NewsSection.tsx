import { motion } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';

const NEWS_ITEMS = [
  {
    id: 1,
    title: "Kingdom of the Sun Released",
    date: new Date('2024-01-15'),
    content: "The debut album is now available on all platforms. A ceremonial work spanning 45 minutes across 7 compositions.",
    category: "Release",
  },
  {
    id: 2,
    title: "Residency at SparrowLab NYC",
    date: new Date('2024-01-08'),
    content: "Multi-week compositional residency exploring field recordings and synthesis in the context of urban observation.",
    category: "News",
  },
  {
    id: 3,
    title: "Ashes Teach The Morning - Archival Update",
    date: new Date('2023-12-20'),
    content: "Remastered archival recordings from the SparrowLab NYC project now available in the catalog.",
    category: "Archive",
  },
];

export default function NewsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-16 px-8 border-b border-white/20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">NEWS & UPDATES</h2>

        <div className="space-y-6">
          {NEWS_ITEMS.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="border-l-2 border-white/20 pl-6 pb-6 hover:border-white/40 transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider bg-white/10 px-3 py-1 rounded-none">
                  {item.category}
                </span>
                <time className="text-xs text-gray-500">
                  {formatDistanceToNow(item.date, { addSuffix: true })}
                </time>
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.content}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
