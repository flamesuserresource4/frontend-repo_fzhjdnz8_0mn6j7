import { Cpu, Shield, Package } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Cpu,
    title: 'Precision Engineering',
    desc: 'Ultra-fine layer resolutions for crisp geometry and smooth surfaces.'
  },
  {
    icon: Shield,
    title: 'Durable Materials',
    desc: 'High-performance polymers and resins built for the long voyage.'
  },
  {
    icon: Package,
    title: 'End-to-End Service',
    desc: 'From concept to delivery—prototype, iterate, and ship.'
  }
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-black to-[#070716] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-indigo-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="text-center text-3xl font-bold sm:text-4xl">
          Crafted for the Cosmic Frontier
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, delay: 0.1 }} className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          We merge advanced fabrication with imaginative design to bring your ideas from orbit into reality.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} viewport={{ once: true, amount: 0.3 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Icon className="text-white" size={18} />
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
              <div aria-hidden className="pointer-events-none absolute -bottom-10 right-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl transition-transform duration-500 group-hover:translate-y-4" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
