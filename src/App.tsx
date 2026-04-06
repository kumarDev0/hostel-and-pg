/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { getClientConfig } from './clientConfig';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

// URL se client slug nikalo
// Example: yoursite.vercel.app/sps-boys-hostel → "sps-boys-hostel"
const slug = window.location.pathname.replace('/', '').split('/')[0];
const config = getClientConfig(slug);

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-warm-white text-ink">
      <Navbar config={config} />
      <main>
        <Hero config={config} />
        <About config={config} />
        <Rooms config={config} />
        <Reviews config={config} />
        <Contact config={config} />
      </main>
      <Footer config={config} />
      <WhatsAppButton config={config} />
    </div>
  );
}
