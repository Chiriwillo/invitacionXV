'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { PlaceHolderImages } from '@/lib/placeholder-images';

const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

export function Gallery() {
  return (
    <Carousel className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {galleryImages.map((image) => (
          <CarouselItem key={image.id}>
            <div className="p-1">
              <div className="flex aspect-video items-center justify-center rounded-lg overflow-hidden bg-gradient-to-br from-accent/50 to-background">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={1280}
                  height={720}
                  className="w-full h-full object-contain"
                  data-ai-hint={image.imageHint}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
