import { motion } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-olive font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-ink mb-8">
              We'd love to <span className="italic text-olive">hear from you.</span>
            </h2>
            <p className="text-ink/70 mb-12 font-light leading-relaxed">
              Have questions about your stay, group bookings, or local recommendations? Drop us a message and our friendly team will get back to you shortly.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-olive mt-1"><MapPin className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-serif text-lg font-medium">Address</h4>
                  <p className="text-ink/60 text-sm">123 Wanderer's Lane, Historic District<br />Cityville, ST 12345</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-olive mt-1"><Phone className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-serif text-lg font-medium">Phone</h4>
                  <p className="text-ink/60 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-olive mt-1"><Mail className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-serif text-lg font-medium">Email</h4>
                  <p className="text-ink/60 text-sm">hello@wanderersrest.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card p-8 md:p-10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs uppercase tracking-widest font-medium text-ink/70 mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full bg-sand/30 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-olive outline-none transition-all" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs uppercase tracking-widest font-medium text-ink/70 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full bg-sand/30 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-olive outline-none transition-all" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest font-medium text-ink/70 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full bg-sand/30 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-olive outline-none transition-all" />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest font-medium text-ink/70 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full bg-sand/30 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-olive outline-none transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-olive hover:bg-olive-dark text-white px-8 py-4 rounded-xl text-sm uppercase tracking-widest transition-colors font-medium">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
