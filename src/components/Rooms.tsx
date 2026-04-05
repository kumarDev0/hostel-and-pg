import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const rooms = [
  {
    id: 1,
    name: 'The Private Suite',
    type: 'Private Room',
    price: '₹12k',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop',
    desc: 'A serene private room with an en-suite bathroom, queen bed, and city views.',
  },
  {
    id: 2,
    name: 'The Cozy Dorm',
    type: '4-Bed Mixed Dorm',
    price: '₹7k',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop',
    desc: 'Comfortable bunk beds with privacy curtains, reading lights, and secure lockers.',
  },
  {
    id: 3,
    name: 'The Female Dorm',
    type: '6-Bed Female Dorm',
    price: '₹15k',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop',
    desc: 'Spacious and bright female-only dorm with premium mattresses and vanity area.',
  }
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-24 bg-sand/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-olive font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
            Stay With Us
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-ink">
            Choose your <span className="italic text-olive">sanctuary.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card overflow-hidden group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full">
                  <span className="font-serif font-medium text-lg">{room.price}</span>
                  <span className="text-xs text-ink/60 uppercase tracking-wider ml-1">/month</span>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <span className="text-xs text-olive uppercase tracking-widest font-medium mb-2 block">
                  {room.type}
                </span>
                <h3 className="text-2xl font-serif mb-3">{room.name}</h3>
                <p className="text-ink/70 text-sm leading-relaxed mb-6 flex-grow">
                  {room.desc}
                </p>
                <button className="flex items-center justify-between w-full pt-4 border-t border-ink/10 group-hover:text-olive transition-colors">
                  <span className="uppercase tracking-widest text-sm font-medium">Book Now</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
