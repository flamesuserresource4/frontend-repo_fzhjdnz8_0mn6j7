import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays should not block interaction */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
        <div className="absolute -inset-x-32 -top-32 h-64 bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.35),transparent_60%)]"></div>
        <div className="absolute -inset-x-32 -bottom-32 h-64 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.25),transparent_60%)]"></div>
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="mt-16 w-full text-center text-white md:text-left">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Immersive 3D Printing in a Cosmic Web
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="mt-4 max-w-2xl text-white/80">
            Explore a seamless universe of design. Interact with the scene and glide through a cybernetic cosmos where ideas take shape.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#shop" className="inline-flex items-center justify-center rounded-full bg-white/90 px-6 py-3 text-sm font-medium text-black hover:bg-white">
              Explore Shop
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur hover:bg-white/20">
              How it works
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
