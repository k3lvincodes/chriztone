'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import ContactDialog from '@/components/contact/contact-dialog';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('home');
  
  const navLinks = [
    { href: '/#home', label: 'Home', id: 'home' },
    { href: '/#about', label: 'About Me', id: 'about' },
    { href: '/#services', label: 'Services', id: 'services' },
    { href: '/#my-work', label: 'My Work', id: 'my-work' },
    { href: '/#testimonial', label: 'Testimonial', id: 'testimonial' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' } 
    );

    const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
    sections.forEach((section) => {
        if(section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if(section) observer.unobserve(section);
      });
    };
  }, [navLinks]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith('/#')) {
        e.preventDefault();
        const targetId = href.substring(2);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const headerOffset = 80;
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
               <Link
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={cn(
                  "flex items-center gap-2 text-base text-gray-500 hover:text-primary transition-all",
                  {
                    "font-bold text-primary": activeSection === link.id,
                  }
                )}
              >
                <span className={cn(
                  "h-1.5 w-1.5 rounded-full bg-primary transition-all duration-300",
                  activeSection === link.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                )}></span>
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
                        }}
                        className={cn(
                          "text-lg text-gray-600 hover:text-primary transition-colors",
                          { "font-bold text-primary": activeSection === link.id }
                        )}
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
