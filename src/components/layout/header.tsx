import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 w-full fixed top-2 left-1/2 -translate-x-1/2 z-50 max-w-[1440px]">
      <div className="mx-auto bg-gray-200/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-full px-6 py-3 flex items-center justify-between shadow-md border border-white/20">
        <div className="flex items-center gap-x-3 sm:gap-x-5">
          <Link href="/" className="text-2xl font-black text-logo">
            Chriztone
          </Link>
          <span className="text-gray-400 text-xl font-light hidden sm:block">•</span>
          <nav className="hidden md:flex items-center gap-x-6">
            <Link href="#" className="text-base text-foreground font-semibold hover:text-primary transition-colors">Home</Link>
            <Link href="#" className="text-base text-muted-foreground hover:text-primary transition-colors">About Us</Link>
            <Link href="#" className="text-base text-muted-foreground hover:text-primary transition-colors">Services</Link>
            <Link href="#" className="text-base text-muted-foreground hover:text-primary transition-colors">My Work</Link>
            <Link href="#" className="text-base text-muted-foreground hover:text-primary transition-colors">Testimonial</Link>
          </nav>
        </div>
        <Button className="rounded-full px-6 h-11">Contact Me</Button>
      </div>
    </header>
  );
}
