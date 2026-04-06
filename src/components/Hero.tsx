import { motion } from 'motion/react';
import { ClientConfig } from '../clientConfig';

export default function Hero({ config }: { config: ClientConfig }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={config.heroImage}
          alt="Hostel interior"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-white/40 via-warm-white/80 to-warm-white"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <span className="text-olive font-medium tracking-[0.2em] uppercase text-sm mb-6 block">
            Welcome to your home away from home
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-ink leading-tight mb-8">
            {config.tagline.split('.')[0]}. <br className="hidden md:block" />
            <span className="italic text-olive">{config.tagline.split('.')[1]}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-ink/70 mb-10 font-light leading-relaxed">
            {config.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#rooms" className="bg-olive hover:bg-olive-dark text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all hover:shadow-lg w-full sm:w-auto">
              Explore Rooms
            </a>
            <a href="#about" className="px-8 py-4 rounded-full text-sm uppercase tracking-widest border border-olive/30 text-olive hover:bg-olive/5 transition-all w-full sm:w-auto">
              Our Story
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
