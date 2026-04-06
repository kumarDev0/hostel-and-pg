import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { ClientConfig } from '../clientConfig';

export default function Reviews({ config }: { config: ClientConfig }) {
  return (
    <section id="reviews" className="py-24 bg-olive text-warm-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-warm-white/70 font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Guest Stories</span>
          <h2 className="text-4xl md:text-5xl font-serif">
            Words from our <span className="italic text-sand">guests.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.reviews.map((review, index) => (
            <motion.div key={review.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-olive-dark p-8 rounded-[2rem]">
              <div className="flex gap-1 mb-6 text-sand">
                {[...Array(review.rating)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-current" />))}
              </div>
              <p className="font-serif text-lg leading-relaxed mb-8 italic">"{review.text}"</p>
              <div>
                <h4 className="font-medium uppercase tracking-widest text-sm">{review.name}</h4>
                <span className="text-xs text-warm-white/60">{review.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
