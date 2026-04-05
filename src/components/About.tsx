import { motion } from 'motion/react';
import { MapPin, Coffee, Wifi, Users } from 'lucide-react';

export default function About() {
  const amenities = [
    { icon: <MapPin className="w-6 h-6" />, title: 'Central Location', desc: 'Steps away from major attractions' },
    { icon: <Coffee className="w-6 h-6" />, title: 'Free Breakfast', desc: 'Local organic coffee and pastries' },
    { icon: <Wifi className="w-6 h-6" />, title: 'High-Speed WiFi', desc: 'Perfect for digital nomads' },
    { icon: <Users className="w-6 h-6" />, title: 'Community Events', desc: 'Weekly dinners and city tours' },
  ];

  return (
    <section id="about" className="py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/34983161/pexels-photo-34983161.jpeg"
              alt="SPS Boys Hostel building"
              className="w-full h-[600px] object-cover object-center rounded-[2rem] shadow-xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-sand rounded-full -z-10"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 border border-olive/20 rounded-full -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-ink">
              More than just a <span className="italic text-olive">place to sleep.</span>
            </h2>
            <p className="text-ink/70 mb-8 leading-relaxed text-lg font-light">
              Founded by travelers for travelers, Wanderer's Rest is designed to be a sanctuary in the bustling city. We believe in fostering connections, sharing stories, and providing a comfortable, aesthetic environment where you can truly unwind after a day of exploration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              {amenities.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-olive flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="font-serif text-xl font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-ink/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
