import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, Layers, DoorOpen, Plus, ChevronRight, ChevronDown, MapPin } from 'lucide-react';

const mockObjekte = [
  {
    id: 'OBJ-2026-0001',
    name: 'Bürokomplex Hauptstraße 12',
    kunde: 'TechCorp GmbH',
    typ: 'Büro',
    flaeche: 1250,
    etagen: [
      {
        id: 'E-01',
        name: 'Erdgeschoss',
        flaeche: 450,
        raeume: [
          { id: 'R-01', name: 'Empfang', typ: 'Flur', flaeche: 50, intervall: 'Täglich' },
          { id: 'R-02', name: 'Meeting Raum A', typ: 'Konferenzraum', flaeche: 80, intervall: 'Täglich' },
          { id: 'R-03', name: 'WC Damen', typ: 'Sanitär', flaeche: 20, intervall: 'Täglich' },
        ]
      },
      {
        id: 'E-02',
        name: '1. Obergeschoss',
        flaeche: 800,
        raeume: [
          { id: 'R-04', name: 'Großraumbüro', typ: 'Büro', flaeche: 600, intervall: '2x Wöchentlich' },
          { id: 'R-05', name: 'Küche', typ: 'Küche', flaeche: 50, intervall: 'Täglich' },
        ]
      }
    ]
  }
];

export function Objekte() {
  const [expandedObj, setExpandedObj] = useState<string | null>('OBJ-2026-0001');
  const [expandedEtage, setExpandedEtage] = useState<string | null>('E-01');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Objekt-Hierarchie</h2>
          <p className="text-muted-foreground text-gray-500">Verwalten Sie Gebäude, Etagen und Räume für präzise Kalkulationen.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Neues Objekt
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-4">
          <h3 className="font-medium text-sm text-gray-500 uppercase tracking-wider">Ihre Objekte</h3>
          {mockObjekte.map(obj => (
            <Card 
              key={obj.id} 
              className={`cursor-pointer transition-colors ${expandedObj === obj.id ? 'border-blue-500 ring-1 ring-blue-500' : 'hover:border-gray-300'}`}
              onClick={() => setExpandedObj(obj.id)}
            >
              <CardContent className="p-4 flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <Building2 className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{obj.name}</h4>
                  <p className="text-xs text-gray-500 mt-1">{obj.kunde}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary" className="text-[10px]">{obj.typ}</Badge>
                    <span className="text-xs text-gray-500">{obj.flaeche} m²</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          <Button variant="outline" className="w-full border-dashed">
            <Plus className="h-4 w-4 mr-2" /> Objekt hinzufügen
          </Button>
        </div>

        <div className="md:col-span-2">
          {expandedObj && (
            <Card className="h-full">
              <CardHeader className="border-b bg-gray-50/50 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-blue-600" />
                      {mockObjekte[0].name}
                    </CardTitle>
                    <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> Hauptstraße 12, 10115 Berlin
                    </p>
                  </div>
                  <Button variant="outline" size="sm">Bearbeiten</Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {mockObjekte[0].etagen.map(etage => (
                    <div key={etage.id} className="bg-white">
                      <div 
                        className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer"
                        onClick={() => setExpandedEtage(expandedEtage === etage.id ? null : etage.id)}
                      >
                        <div className="flex items-center gap-3">
                          {expandedEtage === etage.id ? <ChevronDown className="h-4 w-4 text-gray-400" /> : <ChevronRight className="h-4 w-4 text-gray-400" />}
                          <Layers className="h-4 w-4 text-indigo-500" />
                          <span className="font-medium">{etage.name}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-500">{etage.flaeche} m²</span>
                          <span className="text-sm text-gray-500">{etage.raeume.length} Räume</span>
                          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}>
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      {expandedEtage === etage.id && (
                        <div className="bg-gray-50/50 p-4 pl-12 border-t border-dashed">
                          <table className="w-full text-sm text-left">
                            <thead className="text-xs text-gray-500 uppercase">
                              <tr>
                                <th className="pb-2 font-medium">Raum</th>
                                <th className="pb-2 font-medium">Typ</th>
                                <th className="pb-2 font-medium">Fläche</th>
                                <th className="pb-2 font-medium">Intervall</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                              {etage.raeume.map(raum => (
                                <tr key={raum.id} className="hover:bg-gray-100/50">
                                  <td className="py-2 flex items-center gap-2 font-medium">
                                    <DoorOpen className="h-3 w-3 text-gray-400" />
                                    {raum.name}
                                  </td>
                                  <td className="py-2 text-gray-600">{raum.typ}</td>
                                  <td className="py-2 text-gray-600">{raum.flaeche} m²</td>
                                  <td className="py-2">
                                    <Badge variant="outline" className="text-[10px] bg-white">
                                      {raum.intervall}
                                    </Badge>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
