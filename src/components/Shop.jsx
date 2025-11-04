import { ShoppingCart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Nebula Figurine', price: '$39', rating: 5, img: 'https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'Lunar Coaster Set', price: '$24', rating: 4, img: 'https://images.unsplash.com/photo-1551817958-20204c6e20f3?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Stellar Gear Keycap', price: '$19', rating: 5, img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'Orbital Desk Organizer', price: '$29', rating: 4, img: 'https://images.unsplash.com/photo-1629522698635-829792d8b7eb?q=80&w=1200&auto=format&fit=crop' }
];

export default function Shop() {
  return (
    <section id="shop" className="relative w-full bg-gradient-to-b from-[#070716] to-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-32 w-32 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Featured Creations</h2>
            <p className="mt-2 max-w-2xl text-white/70">Curated prints inspired by galaxies, nebulas, and cybernetic patterns.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white/20">
            <ShoppingCart size={16} /> Custom Order
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, idx) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.05 }} viewport={{ once: true, amount: 0.3 }} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <div className="relative h-44 w-full overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{p.name}</h3>
                  <span className="text-sm text-white/80">{p.price}</span>
                </div>
                <div className="mt-2 flex items-center gap-1 text-yellow-300">
                  {Array.from({ length: p.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white/90 px-3 py-2 text-sm font-medium text-black hover:bg-white">
                  <ShoppingCart size={16} /> Add to cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
