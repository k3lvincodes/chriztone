import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/icons/whatsapp';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        <Button size="lg" className="px-10 h-14 text-base font-bold">
          Contact Me
        </Button>
        <a 
          href="https://wa.me/2347069388791" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 text-base text-white hover:text-gray-300 transition-colors group"
        >
          <WhatsAppIcon className="h-6 w-6 text-green-500 group-hover:text-green-400 transition-colors" />
          <span>+234 706 938 8791</span>
        </a>
        <a 
          href="https://instagram.com/chriztone_z" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 text-base text-white hover:text-gray-300 transition-colors"
        >
          <Instagram className="h-6 w-6" />
          <span>@chriztone_z</span>
        </a>
      </div>
    </footer>
  );
}
