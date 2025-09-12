'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ZoomIn, ZoomOut, X } from 'lucide-react';

export default function MyWorkPage() {
  const works = [
    { src: "https://azure-wrong-tortoise-997.mypinata.cloud/ipfs/bafybeibjv5gy4xnn764tjng5fuatiksesqbeqz63r3a7eoi57pc2mgsbka/AXY%20ZEALY.jpg", alt: "Axy Zealy" },
    { src: "https://azure-wrong-tortoise-997.mypinata.cloud/ipfs/bafybeibjv5gy4xnn764tjng5fuatiksesqbeqz63r3a7eoi57pc2mgsbka/FUTURE%20DARK.jpg", alt: "Future Dark" },
    { src: "https://azure-wrong-tortoise-997.mypinata.cloud/ipfs/bafybeibjv5gy4xnn764tjng5fuatiksesqbeqz63r3a7eoi57pc2mgsbka/GADGET%20IMPORT.png", alt: "Gadget Import" },
    { src: "https://azure-wrong-tortoise-997.mypinata.cloud/ipfs/bafybeibjv5gy4xnn764tjng5fuatiksesqbeqz63r3a7eoi57pc2mgsbka/Israel%20Palestine.jpg", alt: "Israel Palestine" },
    { src: "https://azure-wrong-tortoise-997.mypinata.cloud/ipfs/bafybeibjv5gy4xnn764tjng5fuatiksesqbeqz63r3a7eoi57pc2mgsbka/OSI%20LAYER.jpg", alt: "OSI Layer" },
    { src: "https://azure-wrong-tortoise-997.mypinata.cloud/ipfs/bafybeibjv5gy4xnn764tjng5fuatiksesqbeqz63r3a7eoi57pc2mgsbka/Q.jpg", alt: "Q" },
    { src: "https://azure-wrong-tortoise-997.mypinata.cloud/ipfs/bafybeibjv5gy4xnn764tjng5fuatiksesqbeqz63r3a7eoi57pc2mgsbka/Q5.jpg", alt: "Q5" },
    { src: "https://azure-wrong-tortoise-997.mypinata.cloud/ipfs/bafybeibjv5gy4xnn764tjng5fuatiksesqbeqz63r3a7eoi57pc2mgsbka/royalty%20sales.png", alt: "Royalty Sales" },
    { src: "https://azure-wrong-tortoise-997.mypinata.cloud/ipfs/bafybeibjv5gy4xnn764tjng5fuatiksesqbeqz63r3a7eoi57pc2mgsbka/voting%20interface.jpg", alt: "Voting Interface" },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const openModal = (src: string) => {
    setSelectedImage(src);
    setZoomLevel(1);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.2, 3));
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.2, 0.5));

  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">
      <Header />
      <main className="flex-grow overflow-hidden">
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="space-y-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-black sm:text-5xl">My Work</h1>
              <p className="mt-4 text-lg text-gray-600">
                A selection of my recent projects.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {works.map((work) => (
                <Card 
                  key={work.src} 
                  className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => openModal(work.src)}
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={work.src}
                      alt={work.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center text-lg text-gray-700 space-y-4">
              <p>Click on the link below to see more projects</p>
              <Button asChild>
                <Link href="https://www.behance.net/paulolaoye" target="_blank" rel="noopener noreferrer">
                  View on Behance
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={closeModal}>
            <DialogContent className="max-w-4xl h-[90vh] p-0 !rounded-lg overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center overflow-auto">
                    <div 
                        className="relative transition-transform duration-300" 
                        style={{ transform: `scale(${zoomLevel})` }}
                    >
                        <Image
                            src={selectedImage}
                            alt="Enlarged work"
                            width={1200}
                            height={900}
                            className="object-contain max-w-full max-h-full"
                        />
                    </div>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                    <Button variant="ghost" size="icon" onClick={zoomIn} className="bg-black/50 hover:bg-black/75 text-white">
                        <ZoomIn />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={zoomOut} className="bg-black/50 hover:bg-black/75 text-white">
                        <ZoomOut />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={closeModal} className="bg-black/50 hover:bg-black/75 text-white">
                        <X />
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
