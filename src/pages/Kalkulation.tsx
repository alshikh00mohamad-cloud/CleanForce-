import React, { useState } from 'react';
import { ArrowLeft, Check, Calculator, Plus, Save, Building2, Layers, DoorOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const reinigungsArten = [
  { id: 1, name: 'Hotelreinigung', emoji: '🏨', einheit: 'Zimmer', preis: 15.00, desc: 'Premium Zimmerreinigung inkl. Bad & Bettenwechsel' },
  { id: 2, name: 'Büroreinigung', emoji: '🏢', einheit: 'm²', preis: 2.50, desc: 'Unterhaltsreinigung für Büro- und Verwaltungsgebäude' },
  { id: 3, name: 'Glasreinigung', emoji: '🪟', einheit: 'm²', preis: 3.50, desc: 'Streifenfreie Fenster- und Fassadenreinigung' },
  { id: 4, name: 'Baureinigung (Grob)', emoji: '🏗️', einheit: 'm²', preis: 3.00, desc: 'Beseitigung von Bauschutt und Grobschmutz' },
  { id: 5, name: 'Bauendreinigung', emoji: '✨', einheit: 'm²', preis: 4.50, desc: 'Bezugsfertige Feinreinigung nach Bauabschluss' },
  { id: 6, name: 'Praxisreinigung', emoji: '🏥', einheit: 'm²', preis: 3.20, desc: 'Hygienische Reinigung nach RKI-Richtlinien' },
  { id: 7, name: 'Industriereinigung', emoji: '🏭', einheit: 'm²', preis: 4.00, desc: 'Reinigung von Produktions- und Lagerhallen' },
  { id: 8, name: 'Supermarktreinigung', emoji: '🛒', einheit: 'm²', preis: 2.80, desc: 'Tägliche Reinigung von Verkaufsflächen' },
  { id: 9, name: 'Schulreinigung', emoji: '🏫', einheit: 'm²', preis: 2.20, desc: 'Reinigung von Klassenräumen und Fluren' },
  { id: 10, name: 'Kitareinigung', emoji: '👶', einheit: 'm²', preis: 3.00, desc: 'Besonders schonende und hygienische Reinigung' },
  { id: 11, name: 'Treppenhaus', emoji: '🏠', einheit: 'Etage', preis: 18.00, desc: 'Wöchentliche Reinigung inkl. Geländer und Fenster' },
  { id: 12, name: 'Polsterreinigung', emoji: '🛋️', einheit: 'Sitzplatz', preis: 25.00, desc: 'Tiefenreinigung und Fleckenentfernung' },
  { id: 13, name: 'Teppichreinigung', emoji: '🧶', einheit: 'm²', preis: 5.50, desc: 'Intensive Shampoonierung und Extraktion' },
  { id: 14, name: 'Sanitärreinigung', emoji: '🚽', einheit: 'Raum', preis: 35.00, desc: 'Grundreinigung und Entkalkung von Sanitäranlagen' },
  { id: 15, name: 'Gastronomie', emoji: '🍽️', einheit: 'm²', preis: 4.50, desc: 'Fettlösende Reinigung von Küchen und Gasträumen' },
  { id: 16, name: 'IT- & PC-Reinigung', emoji: '💻', einheit: 'Arbeitsplatz', preis: 12.00, desc: 'Fachgerechte Reinigung von Hardware und Peripherie' },
  { id: 17, name: 'Solarreinigung', emoji: '☀️', einheit: 'm²', preis: 2.50, desc: 'Ertragssteigernde Reinigung von PV-Anlagen' },
  { id: 18, name: 'Grünanlagenpflege', emoji: '🌿', einheit: 'm²', preis: 1.80, desc: 'Rasenmähen, Heckenschnitt und Unkrautentfernung' },
  { id: 19, name: 'Winterdienst', emoji: '❄️', einheit: 'm²', preis: 2.20, desc: 'Schneeräumung und Streudienst gem. Satzung' },
  { id: 20, name: 'Tiefgaragen', emoji: '🚗', einheit: 'm²', preis: 1.50, desc: 'Maschinelle Nassreinigung von Parkflächen' },
  { id: 21, name: 'Schwimmbad', emoji: '🏊', einheit: 'm²', preis: 6.00, desc: 'Spezialreinigung von Becken und Nassbereichen' },
  { id: 22, name: 'Fitnessstudio', emoji: '🏋️', einheit: 'm²', preis: 3.50, desc: 'Desinfizierende Reinigung von Geräten und Umkleiden' },
  { id: 23, name: 'Eventreinigung', emoji: '🎭', einheit: 'Stunde', preis: 35.00, desc: 'Reinigung vor, während und nach Veranstaltungen' },
  { id: 24, name: 'Tatortreinigung', emoji: '🩸', einheit: 'Stunde', preis: 80.00, desc: 'Zertifizierte Spezialreinigung und Geruchsneutralisation' },
  { id: 25, name: 'Desinfektion', emoji: '🦠', einheit: 'm²', preis: 5.00, desc: 'Flächendesinfektion zur Infektionsprävention' },
  { id: 26, name: 'Brandschaden', emoji: '🧯', einheit: 'Stunde', preis: 45.00, desc: 'Rußentfernung und Sanierung nach Bränden' },
  { id: 27, name: 'Wasserschaden', emoji: '💧', einheit: 'Stunde', preis: 40.00, desc: 'Trocknung und Reinigung nach Wassereintritt' },
  { id: 28, name: 'Mülltonnen', emoji: '🗑️', einheit: 'Tonne', preis: 15.00, desc: 'Hochdruckreinigung von Abfallbehältern' },
  { id: 29, name: 'Friedhofspflege', emoji: '🪦', einheit: 'm²', preis: 3.00, desc: 'Grabpflege und Instandhaltung der Wege' },
  { id: 30, name: 'Flugzeugreinigung', emoji: '✈️', einheit: 'Kabine', preis: 150.00, desc: 'Turnaround- und Deep-Cleaning von Flugzeugen' },
];

export function Kalkulation() {
  const [selectedArt, setSelectedArt] = useState<typeof reinigungsArten[0] | null>(null);
  const [menge, setMenge] = useState<number>(1);
  const [faktor, setFaktor] = useState<number>(1.0);
  const [intervall, setIntervall] = useState<number>(1);

  if (selectedArt) {
    return (
      <div className="space-y-6 max-w-[1600px] mx-auto pb-8">
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={() => setSelectedArt(null)} className="gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white dark:hover:bg-[#1A1A1A]">
            <ArrowLeft className="w-4 h-4" /> Zurück zur Übersicht
          </Button>
          <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm">
            <Save className="h-4 w-4" />
            Kalkulation speichern
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Card className="border-none shadow-sm bg-white dark:bg-[#141414]">
              <CardHeader className="pb-3 border-b border-gray-100 dark:border-[#2A2A2A]">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{selectedArt.emoji}</div>
                  <div>
                    <CardTitle className="text-2xl text-gray-900 dark:text-white">{selectedArt.name}</CardTitle>
                    <p className="text-muted-foreground text-gray-500 dark:text-gray-400 mt-1">{selectedArt.desc}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Menge ({selectedArt.einheit})</label>
                      <Input 
                        type="number" 
                        value={menge} 
                        onChange={e => setMenge(Number(e.target.value))}
                        min="1"
                        className="font-mono bg-gray-50/50 dark:bg-[#1A1A1A] border-gray-200 dark:border-[#2A2A2A] dark:text-white focus-visible:ring-blue-500 h-10"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Reinigungsintervall</label>
                      <select 
                        value={intervall}
                        onChange={e => setIntervall(Number(e.target.value))}
                        className="flex h-10 w-full rounded-md border border-gray-200 dark:border-[#2A2A2A] bg-gray-50/50 dark:bg-[#1A1A1A] px-3 py-2 text-sm text-gray-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      >
                        <option value={1}>Einmalig</option>
                        <option value={4.33}>Wöchentlich (4,33x / Monat)</option>
                        <option value={21.65}>Täglich (Mo-Fr) (21,65x / Monat)</option>
                        <option value={30}>Täglich (Mo-So) (30x / Monat)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Qualitätsfaktor</label>
                    <div className="grid grid-cols-3 gap-3">
                      <Button 
                        variant={faktor === 0.9 ? 'default' : 'outline'} 
                        onClick={() => setFaktor(0.9)}
                        className={faktor === 0.9 ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-gray-200 dark:border-[#2A2A2A] text-gray-600 dark:text-gray-300 dark:bg-[#1A1A1A] dark:hover:bg-[#2A2A2A]'}
                      >
                        Basic (0.9x)
                      </Button>
                      <Button 
                        variant={faktor === 1.0 ? 'default' : 'outline'} 
                        onClick={() => setFaktor(1.0)}
                        className={faktor === 1.0 ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-gray-200 dark:border-[#2A2A2A] text-gray-600 dark:text-gray-300 dark:bg-[#1A1A1A] dark:hover:bg-[#2A2A2A]'}
                      >
                        Standard (1.0x)
                      </Button>
                      <Button 
                        variant={faktor === 1.2 ? 'default' : 'outline'} 
                        onClick={() => setFaktor(1.2)}
                        className={faktor === 1.2 ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'border-gray-200 dark:border-[#2A2A2A] text-gray-600 dark:text-gray-300 dark:bg-[#1A1A1A] dark:hover:bg-[#2A2A2A]'}
                      >
                        Premium (1.2x)
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-blue-50/50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/30 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-blue-800 dark:text-blue-400">
                  <Calculator className="h-5 w-5" />
                  Kalkulationsergebnis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Basispreis</span>
                    <span className="font-mono">€{selectedArt.preis.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Menge</span>
                    <span className="font-mono">x {menge}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Intervall/Monat</span>
                    <span className="font-mono">x {intervall.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Faktor</span>
                    <span className="font-mono">x {faktor.toFixed(1)}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-blue-100 dark:border-blue-900/30">
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Monatlich Netto</span>
                    <span className="text-2xl font-bold text-blue-700 dark:text-blue-400 font-mono">€{((selectedArt.preis * menge * intervall * faktor)).toFixed(2)}</span>
                  </div>
                  <Button className="w-full gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                    <Check className="w-4 h-4" /> In Angebot übernehmen
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm bg-white dark:bg-[#141414]">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 dark:text-white">Objektdaten übernehmen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Kunde & Objekt</label>
                  <select className="flex h-10 w-full rounded-md border border-gray-200 dark:border-[#2A2A2A] bg-gray-50/50 dark:bg-[#1A1A1A] px-3 py-1 text-sm text-gray-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-sm">
                    <option>TechCorp GmbH - Bürokomplex</option>
                    <option>Hotel Adlon - Hauptgebäude</option>
                  </select>
                </div>
                
                <div className="p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-md border border-blue-100 dark:border-blue-900/30 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-medium"><Building2 className="h-4 w-4" /> Gesamtfläche</span>
                    <span className="font-bold text-gray-900 dark:text-white">1.250 m²</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-medium"><Layers className="h-4 w-4" /> Etagen</span>
                    <span className="font-bold text-gray-900 dark:text-white">2</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-medium"><DoorOpen className="h-4 w-4" /> Sanitärräume</span>
                    <span className="font-bold text-gray-900 dark:text-white">4</span>
                  </div>
                </div>

                <Button className="w-full border-gray-200 dark:border-[#2A2A2A] text-gray-700 dark:text-gray-300 dark:bg-[#1A1A1A] dark:hover:bg-[#2A2A2A]" variant="outline">
                  Flächen in Kalkulation übernehmen
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto pb-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Kalkulationssystem</h2>
          <p className="text-muted-foreground text-gray-500 dark:text-gray-400 mt-1">Wählen Sie aus 30 spezialisierten Reinigungsarten mit aktuellen Marktpreisen.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {reinigungsArten.map(art => (
          <Card 
            key={art.id} 
            className="cursor-pointer border-none shadow-sm bg-white dark:bg-[#141414] hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all duration-200 group"
            onClick={() => {
              setSelectedArt(art);
              setMenge(1);
              setIntervall(1);
              setFaktor(1.0);
            }}
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-200">{art.emoji}</div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{art.name}</h3>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-mono">ab €{art.preis.toFixed(2)} / {art.einheit}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
