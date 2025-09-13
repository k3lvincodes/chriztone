'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import ContactDialog from '@/components/contact/contact-dialog';
import React from 'react';

export default function Header() {
  const pathname = usePathname();
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About Me' },
    { href: '/#services', label: 'Services' },
    { href: '/#my-work', label: 'My Work' },
    { href: '/#testimonial', label: 'Testimonial' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith('/#')) {
        e.preventDefault();
        const targetId = href.substring(2);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const headerOffset = 80; // Adjust this value to account for your fixed header's height
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
  };


  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 w-full fixed top-2 left-1/2 -translate-x-1/2 z-50 max-w-[1440px]">
      <div className="mx-auto bg-[#D3D3D3] backdrop-blur-lg rounded-full px-5 py-2 flex items-center justify-between shadow-md h-[50px]">
        <div className="flex items-center gap-x-2.5">
          <Link href="/" className="text-2xl font-bold text-logo">
            Chriztone
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-x-[30px] absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <div key={link.label} className="flex items-center gap-x-2.5">
               {/* This logic for showing a dot is tricky with scroll-based navigation, so we'll simplify */}
              <Link
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-base text-gray-500 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ContactDialog
            trigger={
              <Button className="rounded-full px-10 h-10 bg-[#A020F0] text-white hover:bg-[#A020F0]/90 hidden sm:inline-flex">
                Contact Me
              </Button>
            }
          />
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
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={(e) => {
                            handleScroll(e, link.href);
                            // Additionally, you might want to close the sheet here.
                            // This requires passing down the `setOpen` from a `useState` for the Sheet.
                        }}
                        className="text-lg text-gray-600 hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <ContactDialog
                    trigger={
                      <Button className="mt-6 rounded-full px-10 h-12 bg-[#A020F0] text-white hover:bg-[#A020F0]/90 w-full">
                        Contact Me
                      </Button>
                    }
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
