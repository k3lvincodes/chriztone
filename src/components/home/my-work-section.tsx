'use client';

import { useState, useRef, MouseEvent, WheelEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ZoomIn, ZoomOut, X, Move } from 'lucide-react';

export default function MyWorkSection() {
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
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.2, 3));
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.2, 0.5));
  
  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.deltaY < 0) {
        zoomIn();
    } else {
        zoomOut();
    }
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    if(imageRef.current) imageRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    setPosition({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if(imageRef.current) imageRef.current.style.cursor = 'grab';
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
        handleMouseUp(e);
    }
  }

  return (
    <section id="my-work" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-black sm:text-5xl">
                <span className="bg-gradient-to-r from-black to-primary text-transparent bg-clip-text">
                  My Work
                </span>
              </h1>
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

      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={closeModal}>
            <DialogContent className="max-w-4xl h-[90vh] p-0 !rounded-lg overflow-hidden flex items-center justify-center">
                 <DialogTitle className="sr-only">Enlarged View: {works.find(w => w.src === selectedImage)?.alt}</DialogTitle>
                <div 
                    className="w-full h-full overflow-hidden"
                    onWheel={handleWheel}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                >
                    <div 
                        ref={imageRef}
                        className="relative transition-transform duration-100 ease-linear" 
                        style={{ 
                            transform: `scale(${zoomLevel}) translate(${position.x / zoomLevel}px, ${position.y / zoomLevel}px)`,
                            cursor: 'grab'
                        }}
                    >
                        <Image
                            src={selectedImage}
                            alt="Enlarged work"
                            width={1200}
                            height={900}
                            className="object-contain max-w-full max-h-full pointer-events-none"
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
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs rounded-full px-3 py-1 flex items-center gap-2">
                    <Move className="h-3 w-3" />
                    <span>Click & Drag to Pan</span>
                    <span className="h-3 border-l border-white/50"></span>
                    <span>Scroll to Zoom</span>
                </div>
            </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
