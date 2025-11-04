import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function About() {
  const features = [
    {
      title: 'Space‑born Aesthetics',
      desc: 'Inspired by nebulae, orbital mechanics, and parametric geometry for silhouettes that feel futuristic yet elegant.',
    },
    {
      title: 'Precision Craft',
      desc: 'High‑resolution FDM and resin workflows, tuned materials, and post‑processing for flawless finishes.',
    },
    {
      title: 'Custom Commissions',
      desc: 'From concept to print, we collaborate to bring your cosmic idea to life with iterative design and rapid prototyping.',
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-black via-indigo-950 to-purple-950">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute w-72 h-72 bg-purple-700/30 blur-3xl rounded-full -top-10 -left-10" />
        <div className="absolute w-96 h-96 bg-indigo-700/30 blur-3xl rounded-full bottom-0 right-0" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          About CosmicPrints
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-300 max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          We are a design studio devoted to the poetry of space. Our prints merge computational design with artisanal finishing, capturing the glow of galaxies in deep purples and blues.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
            >
              <Star className="w-5 h-5 text-purple-400" />
              <h3 className="mt-3 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
