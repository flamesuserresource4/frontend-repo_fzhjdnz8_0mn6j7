import { useState, useEffect } from 'react';
import { Rocket, ShoppingCart, Menu, X, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#shop', label: 'Shop' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="relative">
              <motion.span initial={{ rotate: -20, scale: 0.9 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 12 }} className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400 text-white shadow-lg">
                <Rocket size={18} />
              </motion.span>
              <Star className="absolute -right-1 -top-1 text-yellow-300" size={14} />
            </div>
            <span className="font-semibold tracking-wide text-white">CosmicPrint</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#shop" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur hover:bg-white/20 transition">
              <ShoppingCart size={16} /> Shop
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:bg-white/10" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden overflow-hidden border-t border-white/10 bg-black/70 backdrop-blur">
            <div className="mx-auto max-w-7xl px-4 py-4">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-2 py-2 text-white/90 hover:bg-white/10">
                    {item.label}
                  </a>
                ))}
                <a href="#shop" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-white hover:bg-white/20">
                  <ShoppingCart size={16} /> Shop
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
