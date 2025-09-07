import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 w-full fixed top-2 left-1/2 -translate-x-1/2 z-50 max-w-[1440px]">
      <div className="mx-auto bg-[#D3D3D3] backdrop-blur-lg rounded-full px-5 py-2 flex items-center justify-between shadow-md h-[50px]">
        <div className="flex items-center gap-x-2.5">
          <Link href="/" className="text-2xl font-bold text-logo">
            Chriztone
          </Link>
          <span className="text-black text-base font-light hidden sm:block">•</span>
          <nav className="hidden md:flex items-center gap-x-[30px] ml-5">
            <Link href="#" className="text-base text-gray-500 font-bold hover:text-primary transition-colors">Home</Link>
            <Link href="#" className="text-base text-gray-500 hover:text-primary transition-colors">About Us</Link>
            <Link href="#" className="text-base text-gray-500 hover:text-primary transition-colors">Services</Link>
            <Link href="#" className="text-base text-gray-500 hover:text-primary transition-colors">My Work</Link>
            <Link href="#" className="text-base text-gray-500 hover:text-primary transition-colors">Testimonial</Link>
          </nav>
        </div>
        <Button className="rounded-full px-10 h-10 bg-[#A020F0] text-white hover:bg-[#A020F0]/90">Contact Me</Button>
      </div>
    </header>
  );
}
