import { ClientConfig } from '../clientConfig';

export default function Footer({ config }: { config: ClientConfig }) {
  return (
    <footer className="bg-ink text-warm-white py-12 border-t border-warm-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-serif text-2xl font-semibold tracking-wide text-sand">
          {config.hostelName}
        </div>
        <div className="flex gap-6 text-sm text-warm-white/60">
          <a href="#" className="hover:text-sand transition-colors">Instagram</a>
          <a href="#" className="hover:text-sand transition-colors">Facebook</a>
          <a href="#" className="hover:text-sand transition-colors">Twitter</a>
        </div>
        <div className="text-xs text-warm-white/40 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} {config.hostelName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
