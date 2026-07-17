import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Analytics from '@/lib/analytics';

const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
});

type NewsletterForm = z.infer<typeof newsletterSchema>;

interface NewsletterProps {
  onSubmit?: () => void;
}

export default function Newsletter({ onSubmit }: NewsletterProps) {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<NewsletterForm>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmitForm = async (data: NewsletterForm) => {
    try {
      // Track newsletter signup
      Analytics.event('newsletter_signup', { email: data.email });

      // Simulate API call (replace with actual Mailchimp/Resend integration)
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setSubmitted(true);
      onSubmit?.();
    } catch (error) {
      console.error('Newsletter signup error:', error);
    }
  };

  if (submitted) {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-16 px-8 border-b border-white/20 bg-white/5"
      >
        <div className="max-w-2xl mx-auto text-center">
          <Check size={48} className="mx-auto mb-4 text-green-500" />
          <h2 className="text-2xl font-bold mb-2">CONFIRMED</h2>
          <p className="text-gray-400">You're now on the Circle Apex Axis mailing list. Expect rare updates and exclusive content.</p>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-16 px-8 border-b border-white/20 bg-white/5"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Mail size={24} /> Stay Informed
        </h2>
        <p className="text-gray-400 mb-8 text-sm">
          Subscribe to receive updates on new releases, residencies, and archival discoveries.
        </p>

        <form onSubmit={handleSubmit(onSubmitForm)} className="flex gap-3">
          <div className="flex-1">
            <input
              type="email"
              placeholder="your@email.com"
              {...register('email')}
              className="w-full bg-black border border-white/30 px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white transition"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-black px-6 py-3 font-bold hover:bg-gray-200 transition disabled:opacity-50"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </motion.section>
  );
}
