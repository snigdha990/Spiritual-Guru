'use client';

import { motion, useReducedMotion } from 'framer-motion';

type Feature = {
  title: string;
  description: string;
  icon: string;
};

const FEATURES: Feature[] = [
  {
    title: 'Instant Wisdom',
    description: 'Get spiritual guidance instantly from our AI Guru.',
    icon: '🕉️',
  },
  {
    title: 'Personalized Advice',
    description: 'Receive answers tailored to your journey and questions.',
    icon: '💫',
  },
  {
    title: 'Mystical Experience',
    description: 'Clean, calming interface designed for focus.',
    icon: '✨',
  },
  {
    title: 'Choose Your Guru',
    description: 'Connect with Sai Baba or Buddha as your guide.',
    icon: '☸️',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function FeatureCards() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="
        relative w-full
        py-20 sm:py-24
        px-5 sm:px-10
        bg-gradient-to-b
        from-[#0b0b15] via-[#0c0c1f] to-[#0b0b15]
        text-white
        overflow-hidden
      "
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="
          mb-14 text-center
          text-3xl sm:text-4xl md:text-5xl
          font-extrabold
          bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300
          bg-clip-text text-transparent
        "
      >
        Features
      </motion.h2>

      {/* Grid */}
      <motion.div
        variants={prefersReducedMotion ? undefined : containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="
          mx-auto max-w-6xl
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          gap-6 sm:gap-8
        "
      >
        {FEATURES.map((feature) => (
          <motion.div
            key={feature.title}
            variants={prefersReducedMotion ? undefined : cardVariants}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="
              group relative rounded-3xl
              p-7 sm:p-8 text-center
              bg-white/5 backdrop-blur-xl
              border border-white/10
              transition-all duration-300
              hover:-translate-y-2
              hover:border-white/20
              hover:shadow-[0_20px_50px_rgba(255,255,255,0.08)]
            "
          >
            {/* Hover Glow */}
            <div
              aria-hidden
              className="
                pointer-events-none absolute inset-0 rounded-3xl
                opacity-0 group-hover:opacity-100
                bg-gradient-to-r
                from-yellow-300/20 via-pink-300/20 to-purple-300/20
                blur-xl transition-opacity duration-300
              "
            />

            {/* Icon */}
            <div
              className="
                relative mb-4
                text-5xl sm:text-6xl
                drop-shadow-[0_0_14px_rgba(255,200,120,0.45)]
              "
            >
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="relative mb-2 text-lg sm:text-xl font-semibold">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="relative text-sm sm:text-base text-gray-300 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
