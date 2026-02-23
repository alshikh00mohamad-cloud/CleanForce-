import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Navigation, Clock, User, PhoneCall } from 'lucide-react';

const mockLocations = [
  { id: 1, name: 'Sarah Müller', status: 'Im Einsatz', time: 'seit 06:15', obj: 'Bürokomplex Hauptstraße 12', lat: 52.5200, lng: 13.4050, color: 'bg-emerald-500' },
  { id: 2, name: 'Ali Yilmaz', status: 'Unterwegs', time: 'Ankunft in 15 Min', obj: 'Hotel Adlon', lat: 52.5163, lng: 13.3805, color: 'bg-amber-500' },
  { id: 3, name: 'Elena Petrova', status: 'Pause', time: 'seit 12:00', obj: 'Krankenhaus Mitte', lat: 52.5250, lng: 13.3700, color: 'bg-blue-500' },
];

export function GPS() {
  return (
    <div className="space-y-6 h-[calc(100vh-8rem)] flex flex-col">
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">GPS-Tracking & Echtzeit</h2>
          <p className="text-muted-foreground text-gray-500">Live-Standorte und Geofencing-Status der Mitarbeiter.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          Live-Verbindung aktiv
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 flex-1 min-h-0">
        <div className="md:col-span-2 bg-gray-100 rounded-xl border overflow-hidden relative flex items-center justify-center">
          {/* Mock Map Background */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://picsum.photos/seed/map/1000/800?blur=2")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          
          {/* Map Grid Overlay */}
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          {/* Mock Markers */}
          <div className="absolute top-1/3 left-1/3 flex flex-col items-center">
            <div className="bg-white p-1 rounded-md shadow-md text-xs font-bold mb-1 border border-gray-200">Sarah M.</div>
            <div className="h-4 w-4 bg-emerald-500 rounded-full border-2 border-white shadow-lg ring-4 ring-emerald-500/20"></div>
          </div>
          
          <div className="absolute top-1/2 left-2/3 flex flex-col items-center">
            <div className="bg-white p-1 rounded-md shadow-md text-xs font-bold mb-1 border border-gray-200">Ali Y.</div>
            <div className="h-4 w-4 bg-amber-500 rounded-full border-2 border-white shadow-lg ring-4 ring-amber-500/20"></div>
          </div>

          <div className="absolute bottom-1/3 left-1/2 flex flex-col items-center">
            <div className="bg-white p-1 rounded-md shadow-md text-xs font-bold mb-1 border border-gray-200">Elena P.</div>
            <div className="h-4 w-4 bg-blue-500 rounded-full border-2 border-white shadow-lg ring-4 ring-blue-500/20"></div>
          </div>

          {/* Geofence Mock */}
          <div className="absolute top-1/3 left-1/3 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-emerald-500 bg-emerald-500/10 pointer-events-none"></div>
        </div>

        <div className="flex flex-col gap-4 overflow-y-auto pr-2">
          <h3 className="font-medium text-sm text-gray-500 uppercase tracking-wider">Aktive Mitarbeiter (3)</h3>
          
          {mockLocations.map((loc) => (
            <Card key={loc.id} className="shrink-0">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`h-2.5 w-2.5 rounded-full ${loc.color}`}></div>
                    <span className="font-bold text-sm">{loc.name}</span>
                  </div>
                  <Badge variant="outline" className="text-[10px]">{loc.status}</Badge>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 text-gray-400 shrink-0" />
                    <span className="leading-tight">{loc.obj}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-400 shrink-0" />
                    <span>{loc.time}</span>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 text-xs h-8">
                    <Navigation className="h-3 w-3 mr-1" /> Route
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 text-xs h-8">
                    <PhoneCall className="h-3 w-3 mr-1" /> Anrufen
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
