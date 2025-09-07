import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export default function Header() {
  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'About Us' },
    { href: '#', label: 'Services' },
    { href: '#', label: 'My Work' },
    { href: '#', label: 'Testimonial' },
  ];
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 w-full fixed top-2 left-1/2 -translate-x-1/2 z-50 max-w-[1440px]">
      <div className="mx-auto bg-[#D3D3D3] backdrop-blur-lg rounded-full px-5 py-2 flex items-center justify-between shadow-md h-[50px]">
        <div className="flex items-center gap-x-2.5">
          <Link href="/" className="text-2xl font-bold text-logo">
            Chriztone
          </Link>
          <span className="text-black text-base font-light hidden sm:block">•</span>
        </div>
        <nav className="hidden lg:flex items-center gap-x-[30px] absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-base text-gray-500 hover:text-primary transition-colors ${
                link.label === 'Home' ? 'font-bold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button className="rounded-full px-10 h-10 bg-[#A020F0] text-white hover:bg-[#A020F0]/90 hidden sm:inline-flex">
            Contact Me
          </Button>
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <div className="flex flex-col gap-6 p-6">
                  <Link href="/" className="text-2xl font-bold text-logo mb-4">
                    Chriztone
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className={`text-lg text-gray-600 hover:text-primary transition-colors ${
                          link.label === 'Home' ? 'font-bold' : ''
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <Button className="mt-6 rounded-full px-10 h-12 bg-[#A020F0] text-white hover:bg-[#A020F0]/90">
                    Contact Me
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
