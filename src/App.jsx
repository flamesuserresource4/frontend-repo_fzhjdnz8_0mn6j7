import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Shop from './components/Shop';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <Hero />
      <About />
      <Shop />

      <section id="contact" className="border-t border-white/10 bg-gradient-to-b from-black to-indigo-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h3 className="text-xl font-semibold">Contact</h3>
          <p className="mt-2 text-gray-300">Have a commission in mind or a question about materials and finishes?</p>
          <a
            href="mailto:contact@cosmicprints.space"
            className="mt-6 inline-block px-5 py-3 rounded-md bg-purple-600/90 hover:bg-purple-600 text-white font-medium shadow-lg shadow-purple-500/30"
          >
            contact@cosmicprints.space
          </a>
          <p className="mt-10 text-xs text-gray-400">© {new Date().getFullYear()} CosmicPrints. Crafted under a purple sky.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
