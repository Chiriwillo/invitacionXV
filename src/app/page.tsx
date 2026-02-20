'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { PartyPopper, Sparkles, Ban, Mail } from 'lucide-react';
import { Countdown } from '@/components/countdown';
import { Gallery } from '@/components/gallery';
import { Location } from '@/components/location';
import { Hero } from '@/components/hero';
import { Itinerary } from '@/components/itinerary';
import { VideoPlayer } from '@/components/video-player';
import dynamic from 'next/dynamic';
import type { MusicPlayerHandle } from '@/components/music-player';

const MusicPlayer = dynamic(
  () => import('@/components/music-player').then((mod) => mod.MusicPlayer),
  { ssr: false }
);

export default function Home() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const musicPlayerRef = useRef<MusicPlayerHandle>(null);

  useEffect(() => {
    setIsClient(true);
    // Prevent scrolling when invitation is closed
    if (!isInvitationOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [isInvitationOpen]);
  
  const handleOpenInvitation = async () => {
    setIsInvitationOpen(true);
    // Let the music player handle its own loading state.
    musicPlayerRef.current?.play();
  };

  const eventDate = new Date('2026-02-28T18:00:00');
  const whatsappNumber = "8127634836";
  const rsvpMessage = "Hola! Confirmo mi asistencia a los XV de Xiomara Nicole. Gracias!";

  if (!isClient) {
    return (
      <div className="fixed inset-0 bg-background z-[100] flex items-center justify-center">
        {/* Optional: Add a loading spinner here */}
      </div>
    );
  }

  return (
    <div className="min-h-screen text-gray-800 font-body relative">
      <Hero onOpen={handleOpenInvitation} isOpen={isInvitationOpen} />
      
      <div className={`transition-opacity duration-1000 ease-in-out ${isInvitationOpen ? 'opacity-100' : 'opacity-0'}`}>
        <MusicPlayer ref={musicPlayerRef} />
        
        <main>
          <header className="text-center py-16 px-4 bg-secondary/50">
            <h1 className="font-headline text-6xl md:text-8xl text-primary">Xiomara Nicole García Cerda</h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              "Con la bendición de Dios y de mi madre, tengo el honor de invitarlos a celebrar mis XV años."
            </p>
          </header>

          <section id="countdown" className="py-16 px-4 bg-secondary/50">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-headline text-primary mb-2">La Gran Celebración</h2>
              <p className="text-muted-foreground mb-8">Falta poco para el gran día...</p>
              <Countdown targetDate={eventDate} />
            </div>
          </section>

          <section id="details" className="py-16 px-4 bg-secondary/50">
            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-headline text-primary mb-4">Presentación</h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <div>
                    <h3 className="font-bold text-foreground">Con la bendición de mi madre:</h3>
                    <p>Sra. Mary López Martinez</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                  <PartyPopper size={100} className="text-primary opacity-70" />
              </div>
            </div>
          </section>

          <section id="location" className="py-16 px-4 bg-secondary/50">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-headline text-primary mb-8">Lugar y Hora</h2>
              <Location />
            </div>
          </section>

          <section id="itinerary" className="py-16 px-4 bg-secondary/50">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-headline text-primary mb-8">Itinerario</h2>
              <Itinerary />
            </div>
          </section>

          <section id="gallery" className="py-16 px-4 bg-secondary/50">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-headline text-primary mb-8">Nuestros Recuerdos</h2>
              <Gallery />
            </div>
          </section>

          <section id="video" className="py-16 px-4 bg-secondary/50">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-headline text-primary mb-8">Un Momento Especial</h2>
              <VideoPlayer />
            </div>
          </section>

          <section id="dress-code" className="py-16 px-4 bg-secondary/50">
            <div className="container mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl font-headline text-primary mb-4">Código de Vestimenta</h2>
              <p className="text-lg text-muted-foreground mb-6">Formal</p>
              <div className="flex items-center space-x-2 text-destructive mt-2 mb-8 p-3 bg-destructive/10 rounded-lg">
                <Ban size={20} />
                <p className="text-sm font-medium">Se les invita cordialmente a no vestir de color rojo.</p>
              </div>
              
              <div className="mt-12 flex flex-col items-center space-y-4 text-foreground px-4">
                <p className="max-w-lg text-lg text-muted-foreground">
                    Mi mejor regalo es tu presencia, pero si quieres tener algún detalle conmigo te comparto la siguiente opción:
                </p>
                <h3 className="font-headline text-6xl text-primary mt-2">¡Lluvia de Sobres!</h3>
                <Mail size={60} className="text-primary my-4" />
                <p className="text-muted-foreground max-w-md">
                    Es la tradición de regalar dinero dentro de un sobre al festejado el día del evento.
                </p>
              </div>
            </div>
          </section>
          
          <footer className="py-16 px-4 text-center bg-secondary/50">
            <Sparkles size={60} className="mx-auto text-primary mb-4" />
            <h2 className="font-headline text-5xl text-primary mb-8">¡Te esperamos!</h2>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full text-lg px-8 py-6 shadow-lg transform hover:scale-105 transition-transform">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(rsvpMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Confirmar por WhatsApp
              </a>
            </Button>
          </footer>
        </main>
      </div>
    </div>
  );
}
