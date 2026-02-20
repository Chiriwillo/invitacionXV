import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Church, PartyPopper } from 'lucide-react';

export function Location() {
  const ceremonyLocation = {
    name: "Parroquia San Alfonso María de Ligorio",
    address: "Col. Nueva Madero",
    mapLink: "https://maps.app.goo.gl/kuLWYkp6SpWpLHoC8"
  };

  const receptionLocation = {
    name: "Casino Romano",
    address: "Av. Aztlán #7301, Col. Valle de Santa Lucía",
    mapLink: "https://maps.app.goo.gl/rfxE4kkWgkxGzoCs5"
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <Card className="text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/20 rounded-full">
              <Church className="w-10 h-10 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-headline text-foreground">Ceremonia Religiosa</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-semibold">{ceremonyLocation.name}</p>
          <p className="text-lg text-muted-foreground">{ceremonyLocation.address}</p>
          <p className="text-lg text-muted-foreground font-bold mt-2">6:00 PM</p>
          <Button asChild variant="link" className="mt-4 text-primary">
            <a href={ceremonyLocation.mapLink} target="_blank" rel="noopener noreferrer">Ver en Mapa</a>
          </Button>
        </CardContent>
      </Card>
      
      <Card className="text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/20 rounded-full">
              <PartyPopper className="w-10 h-10 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-headline text-foreground">Recepción</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-semibold">{receptionLocation.name}</p>
          <p className="text-lg text-muted-foreground">{receptionLocation.address}</p>
          <p className="text-lg text-muted-foreground font-bold mt-2">8:00 PM</p>
          <Button asChild variant="link" className="mt-4 text-primary">
            <a href={receptionLocation.mapLink} target="_blank" rel="noopener noreferrer">Ver en Mapa</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
