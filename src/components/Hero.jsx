import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ns1MlpZQDFS29uiL/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Navigate the Cosmic Universe
          </motion.h1>
          <motion.p
            className="mt-4 text-base md:text-lg text-gray-200 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            Drift through a galaxy of space‑inspired 3D prints. Fluid motion, deep‑space hues, and futuristic geometry guide your journey.
          </motion.p>
          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <a
              href="#shop"
              className="px-5 py-3 rounded-md bg-purple-600/90 hover:bg-purple-600 text-white font-medium shadow-lg shadow-purple-500/30"
            >
              Enter the Shop
            </a>
            <a
              href="#about"
              className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/15 text-white font-medium backdrop-blur"
            >
              Who We Are
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[120%] h-64 rounded-full bg-purple-700/20 blur-3xl pointer-events-none" />
    </section>
  );
}
