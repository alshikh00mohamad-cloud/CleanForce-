import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, AlertTriangle, Star, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Angebote() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>('premium');

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Angebot für TechCorp GmbH</h2>
        <p className="text-muted-foreground text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Wählen Sie das passende Reinigungspaket für Ihr Objekt "Bürokomplex Hauptstraße 12". 
          Alle Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 items-start pt-4">
        {/* BASIC */}
        <Card className={cn("relative transition-all duration-200 bg-white dark:bg-[#141414]", selectedPackage === 'basic' ? "ring-2 ring-gray-900 dark:ring-gray-100 shadow-md" : "hover:shadow-md")}>
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 dark:text-white">Basic</CardTitle>
            <CardDescription className="dark:text-gray-400">Für den grundlegenden Bedarf</CardDescription>
            <div className="mt-4 flex items-baseline text-4xl font-extrabold text-gray-900 dark:text-white">
              €850
              <span className="ml-1 text-xl font-medium text-gray-500 dark:text-gray-400">/mo</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1 line-through">€1,000 Kalkulationsbasis</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 p-2 rounded-md border border-amber-100 dark:border-amber-500/20">
              <AlertTriangle className="h-4 w-4" />
              <span>Ohne Qualitätskontrolle und Notfall-Service</span>
            </div>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-gray-300 dark:text-gray-600" /> 1x Wöchentliche Reinigung</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-gray-300 dark:text-gray-600" /> Standard Reinigungsmittel</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-gray-300 dark:text-gray-600" /> 48h Reaktionszeit Notfall</li>
              <li className="flex items-center gap-2 text-gray-400 dark:text-gray-500"><Check className="h-4 w-4 opacity-0" /> Keine Qualitätskontrolle</li>
              <li className="flex items-center gap-2 text-gray-400 dark:text-gray-500"><Check className="h-4 w-4 opacity-0" /> Kein Rabatt auf Sonderreinigungen</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button 
              variant={selectedPackage === 'basic' ? 'default' : 'outline'} 
              className="w-full"
              onClick={() => setSelectedPackage('basic')}
            >
              {selectedPackage === 'basic' ? 'Ausgewählt' : 'Basic wählen'}
            </Button>
          </CardFooter>
        </Card>

        {/* PREMIUM */}
        <Card className={cn("relative border-blue-500 dark:border-blue-500 shadow-lg transform md:-translate-y-4 bg-white dark:bg-[#141414]", selectedPackage === 'premium' ? "ring-2 ring-blue-500" : "")}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
              <Star className="h-3 w-3 fill-current" /> Meistgewählt
            </span>
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-blue-700 dark:text-blue-400">Premium</CardTitle>
            <CardDescription className="dark:text-gray-400">Der Standard für professionelle Büros</CardDescription>
            <div className="mt-4 flex items-baseline text-4xl font-extrabold text-gray-900 dark:text-white">
              €1,000
              <span className="ml-1 text-xl font-medium text-gray-500 dark:text-gray-400">/mo</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">92% unserer Neukunden starten mit diesem Paket.</p>
            <ul className="space-y-3 text-sm font-medium text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-500 dark:text-blue-400" /> 2x Wöchentliche Reinigung</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-500 dark:text-blue-400" /> Marken-Reinigungsmittel inkl.</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-500 dark:text-blue-400" /> 24h Reaktionszeit Notfall</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-500 dark:text-blue-400" /> Wöchentliche Qualitätskontrolle</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-500 dark:text-blue-400" /> 10% Rabatt auf Sonderreinigungen</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-500 dark:text-blue-400" /> Monatsbericht als PDF</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button 
              variant={selectedPackage === 'premium' ? 'default' : 'outline'} 
              className={cn("w-full", selectedPackage === 'premium' ? "bg-blue-600 hover:bg-blue-700 text-white" : "")}
              onClick={() => setSelectedPackage('premium')}
            >
              {selectedPackage === 'premium' ? 'Ausgewählt' : 'Premium wählen'}
            </Button>
          </CardFooter>
        </Card>

        {/* VIP */}
        <Card className={cn("relative transition-all duration-200 bg-white dark:bg-[#141414]", selectedPackage === 'vip' ? "ring-2 ring-gray-900 dark:ring-gray-100 shadow-md" : "hover:shadow-md")}>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-gray-900 dark:text-white">
              VIP <Sparkles className="h-4 w-4 text-amber-500" />
            </CardTitle>
            <CardDescription className="dark:text-gray-400">Maximale Sauberkeit und Flexibilität</CardDescription>
            <div className="mt-4 flex items-baseline text-4xl font-extrabold text-gray-900 dark:text-white">
              €1,250
              <span className="ml-1 text-xl font-medium text-gray-500 dark:text-gray-400">/mo</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 p-2 rounded-md border border-emerald-100 dark:border-emerald-500/20 font-medium">
              Ersparnis: ca. €400/Jahr durch 20% Rabatt auf Sonderreinigungen
            </div>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500 dark:text-emerald-400" /> Tägliche Reinigung</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500 dark:text-emerald-400" /> Premium-Öko-Mittel inkl.</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500 dark:text-emerald-400" /> 4h Reaktionszeit Notfall</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500 dark:text-emerald-400" /> Tägliche Qualitätskontrolle</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500 dark:text-emerald-400" /> 20% Rabatt auf Sonderreinigungen</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500 dark:text-emerald-400" /> Flexibler Vertrag (ab 3 Mon.)</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button 
              variant={selectedPackage === 'vip' ? 'default' : 'outline'} 
              className="w-full"
              onClick={() => setSelectedPackage('vip')}
            >
              {selectedPackage === 'vip' ? 'Ausgewählt' : 'VIP wählen'}
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="flex justify-end pt-6 border-t border-gray-200 dark:border-[#2A2A2A]">
        <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
          Angebot annehmen <Check className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
