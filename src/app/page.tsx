'use client';
import type { ChangeEvent } from 'react';
import React,
{
  useState,
  useRef
} from 'react';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import DefaultView from '@/components/home/default-view';
import AboutSection from '@/components/home/about-section';
import ServicesSection from '@/components/home/services-section';
import MyWorkSection from '@/components/home/my-work-section';
import TestimonialSection from '@/components/home/testimonial-section';

export default function HomePage() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    // This is a placeholder for the upload functionality that is not currently used
    // but is kept for potential future use with the AI analysis features.
    const file = event.target.files?.[0];
    if (file) {
      console.log('File selected:', file.name);
    }
  };


  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">
      <Header />
      <main className="flex-grow overflow-hidden">
        <DefaultView />
        <AboutSection />
        <ServicesSection />
        <MyWorkSection />
        <TestimonialSection />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
      </main>
      <Footer />
    </div>
  );
}
