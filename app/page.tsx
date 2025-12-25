// // 'use client';
// // import React, { useRef } from 'react';
// // import { motion } from 'framer-motion';
// // import Header from './components/Header';
// // import HeroIntro from './components/HeroIntro';
// // import SaiBabaIntro from './components/SaiBabaIntro';
// // import FeatureCards from './components/FeatureCards';
// // import DailyWisdom from './components/DailyWisdom';
// // import AskGuruSection from './components/AskGuruSection';
// // import Footer from './components/Footer';
// // import FloatingParticles from './components/FloatingParticles';

// // export default function Page() {
// //   const saiBabaRef = useRef<HTMLDivElement>(null);

// //   const scrollToSaiBaba = () => {
// //     saiBabaRef.current?.scrollIntoView({ behavior: 'smooth' });
// //   };

// //   // FAQ data
// //   const faqs = [
// //     { q: "How does the AI Guru work?", a: "Our AI Guru uses spiritual and mindfulness principles to provide personalized guidance instantly." },
// //     { q: "Can I choose a specific Guru?", a: "Currently, you can select Sai Baba as your guiding Guru." },
// //     { q: "Is my data private?", a: "Absolutely. All interactions are confidential and never shared." },
// //     { q: "Can I interact multiple times per day?", a: "Yes! You can ask questions anytime and receive instant guidance." },
// //     { q: "Does the Guru learn from me?", a: "The AI tailors advice to your questions but does not store personal data permanently." },
// //   ];

// //   return (
// //     <main className="relative overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white min-h-screen">
// //       {/* Global floating particles */}
// //       <FloatingParticles count={50} />

// //       {/* Header & Hero */}
// //       <Header />
// //       <HeroIntro />

// //       {/* Sai Baba Intro */}
// //       <div ref={saiBabaRef}>
// //         <SaiBabaIntro />
// //       </div>

// //       {/* Features */}
// //       <FeatureCards />

// //       {/* Daily Wisdom */}
// //       <DailyWisdom />

// //       {/* Ask Guru Section */}
// //       <AskGuruSection scrollToSaiBaba={scrollToSaiBaba} />

// //       {/* FAQ Section */}
// //       <section className="py-20 px-6 sm:px-12 bg-[#0b0b15] text-white">
// //         <motion.h2
// //           className="text-4xl sm:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300"
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           Frequently Asked Questions
// //         </motion.h2>
// //         <div className="max-w-4xl mx-auto space-y-6">
// //           {faqs.map((item, idx) => (
// //             <motion.div
// //               key={idx}
// //               className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10"
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: idx * 0.1 }}
// //             >
// //               <h3 className="font-semibold text-xl mb-2">{item.q}</h3>
// //               <p className="text-gray-300">{item.a}</p>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* About Section */}
// //       <section className="py-20 px-6 sm:px-12 bg-[#0c0c1a] text-white text-center">
// //         <motion.h2
// //           className="text-4xl sm:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300"
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           About MindsetU
// //         </motion.h2>

// //         <p className="max-w-3xl mx-auto mb-6 text-gray-300 text-lg sm:text-xl">
// //           MindsetU merges AI with spiritual guidance to help individuals explore mindfulness, clarity, and inner peace.
// //           Our AI Guru provides instant, personalized spiritual insights to connect you with your higher self.
// //         </p>

// //         <p className="max-w-3xl mx-auto mb-6 text-gray-400 text-md sm:text-lg italic">
// //           "Empowering you to discover inner wisdom, one question at a time."
// //         </p>

// //         <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 mb-12">
// //           <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
// //             <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
// //             <p className="text-gray-300 text-sm sm:text-base">
// //               To guide seekers on a path of spiritual growth, mindfulness, and clarity through AI-powered insights.
// //             </p>
// //           </div>
// //           <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
// //             <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
// //             <p className="text-gray-300 text-sm sm:text-base">
// //               A world where everyone can access personalized spiritual guidance anytime, anywhere.
// //             </p>
// //           </div>
// //           <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
// //             <h4 className="text-xl font-semibold mb-2">Our Values</h4>
// //             <p className="text-gray-300 text-sm sm:text-base">
// //               Compassion, mindfulness, respect for privacy, and promoting inner peace.
// //             </p>
// //           </div>
// //         </div>

// //         {/* Founder */}
// //         <motion.div
// //           className="flex flex-col items-center justify-center gap-8"
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           <div className="flex flex-col items-center">
// //             <div className="w-32 h-32 mb-4 rounded-full bg-white/10 flex items-center justify-center text-2xl font-bold text-yellow-300">
// //               DT
// //             </div>
// //             <h3 className="text-xl font-semibold">Dharam Tiwari</h3>
// //             <p className="text-gray-300">Founder & CEO</p>
// //           </div>
// //         </motion.div>

// //         <p className="mt-12 text-gray-400 text-sm sm:text-base">
// //           Join us on a journey of self-discovery and enlightenment. Ask your Guru a question today!
// //         </p>
// //       </section>

// //       {/* Footer */}
// //       <Footer />
// //     </main>
// //   );
// // }
// 'use client';
// import React, { useRef } from 'react';
// import { motion } from 'framer-motion';
// import Header from './components/Header';
// import HeroIntro from './components/HeroIntro';
// import SaiBabaIntro from './components/SaiBabaIntro';
// import FeatureCards from './components/FeatureCards';
// import DailyWisdom from './components/DailyWisdom';
// import AskGuruSection from './components/AskGuruSection';
// import Footer from './components/Footer';
// import FloatingParticles from './components/FloatingParticles';
// import AccordionFAQ from './components/AccordionFAQ';

// export default function Page() {
//   const saiBabaRef = useRef<HTMLDivElement>(null);

//   const scrollToSaiBaba = () => {
//     saiBabaRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   // Updated FAQs
//   const faqs = [
//     {
//       q: "How can the AI Guru guide me spiritually?",
//       a: "The AI Guru combines ancient wisdom with AI insights to provide personalized spiritual guidance instantly."
//     },
//     {
//       q: "Can I ask questions about my daily life?",
//       a: "Yes! The AI Guru can help with clarity, mindfulness, and spiritual guidance for everyday challenges."
//     },
//     {
//       q: "Do I need prior spiritual knowledge?",
//       a: "Not at all. MindsetU is designed for beginners and experienced seekers alike."
//     },
//     {
//       q: "How often can I interact with the Guru?",
//       a: "You can ask questions anytime. The AI Guru is always ready to provide guidance."
//     },
//     {
//       q: "Is my personal information safe?",
//       a: "Absolutely. All interactions are confidential, and no personal data is permanently stored."
//     },
//   ];
  
//   const founders=[
//     {name: "Dharam Tiwari",
//       role: "Co-Founder",
//       initials: "DT"
//     },
//     {name: "Lokesh Reddy",
//       role: "Co-Founder",
//       initials: "LR"
//     },
//     {name: "Varshini",
//       role: "Co-Founder",
//       initials: "V"
//     },
//     {name: "Sai Snigdha",
//       role: "Co-Founder",
//       initials: "SS"
//     },

//   ]
//   return (
//     <main className="relative overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white min-h-screen">
//       {/* Global floating particles */}
//       <FloatingParticles count={50} />

//       {/* Header & Hero */}
//       <Header />
//       <HeroIntro />

//       {/* Sai Baba Intro */}
//       <div ref={saiBabaRef}>
//         <SaiBabaIntro />
//       </div>

//       {/* Features */}
//       <FeatureCards />

//       {/* Daily Wisdom */}
//       <DailyWisdom />

//       {/* Ask Guru Section */}
//       <AskGuruSection scrollToSaiBaba={scrollToSaiBaba} />

//       {/* FAQ Section */}
//       <AccordionFAQ faqs={faqs} />

//       {/* About Section */}
//       <section className="py-20 px-6 sm:px-12 bg-[#0c0c1a] text-white text-center">
//         <motion.h2
//           className="text-4xl sm:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           About MindsetU
//         </motion.h2>

//         <p className="max-w-3xl mx-auto mb-6 text-gray-300 text-lg sm:text-xl">
//           MindsetU merges AI with spiritual guidance to help individuals explore mindfulness, clarity, and inner peace.
//           Our AI Guru provides instant, personalized spiritual insights to connect you with your higher self.
//         </p>

//         <p className="max-w-3xl mx-auto mb-6 text-gray-400 text-md sm:text-lg italic">
//           "Empowering you to discover inner wisdom, one question at a time."
//         </p>

//         <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 mb-12">
//           <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
//             <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
//             <p className="text-gray-300 text-sm sm:text-base">
//               To guide seekers on a path of spiritual growth, mindfulness, and clarity through AI-powered insights.
//             </p>
//           </div>
//           <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
//             <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
//             <p className="text-gray-300 text-sm sm:text-base">
//               A world where everyone can access personalized spiritual guidance anytime, anywhere.
//             </p>
//           </div>
//           <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
//             <h4 className="text-xl font-semibold mb-2">Our Values</h4>
//             <p className="text-gray-300 text-sm sm:text-base">
//               Compassion, mindfulness, respect for privacy, and promoting inner peace.
//             </p>
//           </div>
//         </div>

//         {/* Founder */}
//         <motion.div
//           className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8 justify-center items-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           {founders.map((founder, idx) => (
//             <div key={idx} className="flex flex-col items-center group">
//               <div className="w-32 h-32 mb-4 rounded-full bg-white/10 flex items-center justify-center text-2xl font-bold text-yellow-300 transition-transform duration-300 group-hover:scale-105">
//                 {founder.initials}
//               </div>
//               <h3 className="text-xl font-semibold">{founder.name}</h3>
//               <p className="text-gray-300">{founder.role}</p>
//             </div>
//           ))}
//         </motion.div>

//         <p className="mt-12 text-gray-400 text-sm sm:text-base">
//           Join us on a journey of self-discovery and enlightenment. Ask your Guru a question today!
//         </p>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </main>
//   );
// }

'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroIntro from './components/HeroIntro';
import SaiBabaIntro from './components/SaiBabaIntro';
import FeatureCards from './components/FeatureCards';
import DailyWisdom from './components/DailyWisdom';
import AskGuruSection from './components/AskGuruSection';
import Footer from './components/Footer';
import FloatingParticles from './components/FloatingParticles';
import AccordionFAQ from './components/AccordionFAQ';

export default function Page() {
  const saiBabaRef = useRef<HTMLDivElement>(null);

  const scrollToSaiBaba = () => {
    saiBabaRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      q: "How can the AI Guru guide me spiritually?",
      a: "The AI Guru combines ancient wisdom with AI insights to provide personalized spiritual guidance instantly."
    },
    {
      q: "Can I ask questions about my daily life?",
      a: "Yes! The AI Guru can help with clarity, mindfulness, and spiritual guidance for everyday challenges."
    },
    {
      q: "Do I need prior spiritual knowledge?",
      a: "Not at all. MindsetU is designed for beginners and experienced seekers alike."
    },
    {
      q: "How often can I interact with the Guru?",
      a: "You can ask questions anytime. The AI Guru is always ready to provide guidance."
    },
    {
      q: "Is my personal information safe?",
      a: "Absolutely. All interactions are confidential, and no personal data is permanently stored."
    },
  ];

  const founders = [
    { name: "Dharam Tiwari", role: "Co-Founder & CEO", initials: "DT" },
    { name: "Lokesh Reddy", role: "Co-Founder", initials: "LR" },
    { name: "Varshini", role: "Co-Founder", initials: "V" },
    { name: "Sai Snigdha", role: "Co-Founder", initials: "SS" },
  ];

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white min-h-screen">
      {/* Global floating particles */}
      <FloatingParticles count={50} />

      {/* Header & Hero */}
      <Header />
      <HeroIntro />

      {/* Sai Baba Intro */}
      <div ref={saiBabaRef}>
        <SaiBabaIntro />
      </div>

      {/* Features */}
      <FeatureCards />

      {/* Daily Wisdom */}
      <DailyWisdom />

      {/* Ask Guru Section */}
      <AskGuruSection scrollToSaiBaba={scrollToSaiBaba} />

      {/* FAQ Section */}
      <AccordionFAQ faqs={faqs} />

      {/* About Section */}
      <section className="py-20 px-6 sm:px-12 bg-[#0c0c1a] text-white text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About MindsetU
        </motion.h2>

        <p className="max-w-3xl mx-auto mb-6 text-gray-300 text-lg sm:text-xl">
          MindsetU merges AI with spiritual guidance to help individuals explore mindfulness, clarity, and inner peace.
          Our AI Guru provides instant, personalized spiritual insights to connect you with your higher self.
        </p>

        <p className="max-w-3xl mx-auto mb-6 text-gray-400 text-md sm:text-lg italic">
          "Empowering you to discover inner wisdom, one question at a time."
        </p>

        {/* Mission / Vision / Values */}
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
            <p className="text-gray-300 text-sm sm:text-base">
              To guide seekers on a path of spiritual growth, mindfulness, and clarity through AI-powered insights.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
            <p className="text-gray-300 text-sm sm:text-base">
              A world where everyone can access personalized spiritual guidance anytime, anywhere.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-2">Our Values</h4>
            <p className="text-gray-300 text-sm sm:text-base">
              Compassion, mindfulness, respect for privacy, and promoting inner peace.
            </p>
          </div>
        </div>

        {/* Founders Section */}
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {founders.map((founder, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="w-32 h-32 mb-4 rounded-full bg-white/10 flex items-center justify-center text-2xl font-bold text-yellow-300 transition-transform duration-300 group-hover:scale-105">
                {founder.initials}
              </div>
              <h3 className="text-xl font-semibold">{founder.name}</h3>
              <p className="text-gray-300">{founder.role}</p>
            </div>
          ))}
        </motion.div>

        <p className="mt-12 text-gray-400 text-sm sm:text-base">
          Join us on a journey of self-discovery and enlightenment. Ask your Guru a question today!
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
