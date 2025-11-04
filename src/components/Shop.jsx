import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Nebula Vase',
    price: '$49',
    colorFrom: 'from-purple-700/40',
    colorTo: 'to-indigo-700/40',
    desc: 'Parametric, fluid contours echoing interstellar clouds.',
  },
  {
    id: 2,
    name: 'Orbit Desk Lamp',
    price: '$129',
    colorFrom: 'from-indigo-700/40',
    colorTo: 'to-blue-700/40',
    desc: 'Sleek arcs and a soft halo reminiscent of planetary rings.',
  },
  {
    id: 3,
    name: 'Stellar Pen Stand',
    price: '$29',
    colorFrom: 'from-fuchsia-700/40',
    colorTo: 'to-purple-700/40',
    desc: 'Tessellated geometry with a cosmic sheen.',
  },
  {
    id: 4,
    name: 'Lagrange Mobile',
    price: '$89',
    colorFrom: 'from-blue-700/40',
    colorTo: 'to-indigo-700/40',
    desc: 'Balanced kinetic sculpture inspired by orbital nodes.',
  },
];

export default function Shop() {
  return (
    <section id="shop" className="relative py-24 bg-gradient-to-b from-purple-950 to-black">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Shop Creations
        </motion.h2>
        <motion.p
          className="mt-3 text-gray-300 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          Limited runs, made to order. Each piece is printed, finished, and inspected by hand.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${p.colorFrom} ${p.colorTo}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.06 * i }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.06),transparent_45%)]" />
              <div className="relative p-6">
                <div className="aspect-square rounded-xl bg-black/20 border border-white/10 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 animate-pulse" />
                </div>
                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{p.name}</h3>
                    <p className="text-sm text-gray-300">{p.desc}</p>
                  </div>
                  <span className="text-purple-300 font-medium">{p.price}</span>
                </div>
                <button className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 hover:bg-white/15 text-white border border-white/10">
                  <ShoppingCart className="w-4 h-4" /> Add to cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
