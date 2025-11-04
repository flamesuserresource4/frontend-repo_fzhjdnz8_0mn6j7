import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Shop from './components/Shop';
import { Mail, Send } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-10 top-10 h-48 w-48 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-48 w-48 rounded-full bg-indigo-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">Get in touch</h2>
          <p className="mt-2 text-center text-white/70">Have a concept in mind? Send a message and we’ll help bring it to life.</p>

          <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-white/80">Name</label>
                <input type="text" required className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/30" placeholder="Ada Lovelace" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/80">Email</label>
                <div className="relative">
                  <Mail size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
                  <input type="email" required className="w-full rounded-lg border border-white/10 bg-white/5 px-9 py-2 text-white placeholder-white/40 outline-none focus:border-white/30" placeholder="you@cosmicprint.com" />
                </div>
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/80">Message</label>
              <textarea required rows={4} className="w-full resize-y rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/30" placeholder="Tell us about your project..." />
            </div>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/90 px-4 py-2 text-black hover:bg-white">
              <Send size={16} /> Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Shop />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/60 py-6 text-center text-sm text-white/60 backdrop-blur">
        © {new Date().getFullYear()} CosmicPrint — Made among the stars
      </footer>
    </div>
  );
}
