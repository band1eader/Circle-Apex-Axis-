import { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Mail, Heart, ExternalLink, Radio } from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedRelease from '@/components/FeaturedRelease';
import NewsSection from '@/components/NewsSection';
import Newsletter from '@/components/Newsletter';
import Merchandise from '@/components/Merchandise';
import Footer from '@/components/Footer';
import Analytics from '@/lib/analytics';

export default function App() {
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Initialize analytics on mount
  React.useEffect(() => {
    Analytics.pageView(window.location.pathname);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <FeaturedRelease />
        <NewsSection />
        <Newsletter onSubmit={() => setNewsletterSubmitted(true)} />
        <Merchandise />
      </main>
      <Footer />
    </div>
  );
}
