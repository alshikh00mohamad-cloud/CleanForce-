import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UploadCloud, ScanLine, FileCheck, Landmark, PieChart } from 'lucide-react';

export function Buchhaltung() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Buchhaltung & Belegscanner</h2>
          <p className="text-muted-foreground text-gray-500">EÜR, UStVA und KI-gestützte Belegerfassung.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Landmark className="h-4 w-4" />
            Bankabgleich
          </Button>
          <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
            <UploadCloud className="h-4 w-4" />
            Beleg hochladen
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-dashed border-2 bg-gray-50/50">
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <ScanLine className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">KI-Belegscanner</h3>
            <p className="text-sm text-gray-500 max-w-sm mb-6">
              Laden Sie Rechnungen oder Quittungen hoch. Unsere KI erkennt Datum, Betrag, MwSt. und Lieferant automatisch.
            </p>
            <Button>Dateien auswählen oder ablegen</Button>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-emerald-600" />
                Zu prüfende Belege
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white border rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gray-100 rounded flex items-center justify-center text-xs font-bold text-gray-500">PDF</div>
                    <div>
                      <div className="font-medium text-sm">Tankstelle Shell</div>
                      <div className="text-xs text-gray-500">Erkannt: 15.02.2026 • 85,40 €</div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Prüfen</Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-white border rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gray-100 rounded flex items-center justify-center text-xs font-bold text-gray-500">JPG</div>
                    <div>
                      <div className="font-medium text-sm">Obi Baumarkt</div>
                      <div className="text-xs text-gray-500">Erkannt: 12.02.2026 • 142,10 €</div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Prüfen</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <PieChart className="h-5 w-5 text-indigo-600" />
                Finanz-Auswertungen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                  <span className="font-semibold">EÜR</span>
                  <span className="text-xs text-gray-500 font-normal">Einnahmen-Überschuss</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                  <span className="font-semibold">UStVA</span>
                  <span className="text-xs text-gray-500 font-normal">Umsatzsteuervoranmeldung</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                  <span className="font-semibold">BWA</span>
                  <span className="text-xs text-gray-500 font-normal">Betriebswirtschaftliche Ausw.</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                  <span className="font-semibold">DATEV</span>
                  <span className="text-xs text-gray-500 font-normal">Export für Steuerberater</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
