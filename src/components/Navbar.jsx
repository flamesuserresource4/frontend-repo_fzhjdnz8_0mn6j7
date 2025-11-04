import { Rocket, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-lg bg-black/30 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center space-x-2 text-white"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Rocket className="w-6 h-6 text-purple-400" />
          <span className="font-semibold tracking-wide">CosmicPrints</span>
        </motion.a>

        <div className="hidden md:flex items-center space-x-8 text-sm text-gray-200">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#shop" className="hover:text-white transition-colors">Shop</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <motion.button
          className="inline-flex items-center gap-2 bg-purple-600/80 hover:bg-purple-600 text-white px-3 py-2 rounded-md text-sm font-medium shadow-lg shadow-purple-500/20"
          whileTap={{ scale: 0.96 }}
          whileHover={{ y: -1 }}
        >
          <ShoppingCart className="w-4 h-4" />
          Cart
        </motion.button>
      </nav>
    </div>
  );
}
