import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UserCircle, Calendar, MapPin, Phone, Plus, MoreHorizontal } from 'lucide-react';

const mockMitarbeiter = [
  { id: 'MA-2026-001', name: 'Sarah Müller', rolle: 'Reinigungskraft', status: 'Im Einsatz', objekt: 'Bürokomplex Hauptstraße 12', tel: '0151-1234567' },
  { id: 'MA-2026-002', name: 'Ali Yilmaz', rolle: 'Objektleiter', status: 'Aktiv', objekt: '-', tel: '0172-9876543' },
  { id: 'MA-2026-003', name: 'Elena Petrova', rolle: 'Reinigungskraft', status: 'Urlaub', objekt: '-', tel: '0160-5554443' },
  { id: 'MA-2026-004', name: 'Thomas Schmidt', rolle: 'Fensterputzer', status: 'Krank', objekt: '-', tel: '0152-3332221' },
];

export function Personal() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Personal & Einsatzplanung</h2>
          <p className="text-muted-foreground text-gray-500">Verwalten Sie Mitarbeiter, Schichten und Urlaube.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Dienstplan
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Neuer Mitarbeiter
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Gesamtpersonal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Heute im Einsatz</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">28</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Urlaub / Krank</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-600">4</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Offene Schichten (Morgen)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">2</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Mitarbeiterliste</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-700 border-b">
                <tr>
                  <th className="px-4 py-3 font-medium">Mitarbeiter</th>
                  <th className="px-4 py-3 font-medium">Rolle</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Aktuelles Objekt</th>
                  <th className="px-4 py-3 font-medium">Kontakt</th>
                  <th className="px-4 py-3 font-medium text-right">Aktionen</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {mockMitarbeiter.map((ma) => (
                  <tr key={ma.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-4 py-3 font-medium flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-xs">
                        {ma.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div>{ma.name}</div>
                        <div className="text-xs text-gray-500 font-mono">{ma.id}</div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{ma.rolle}</td>
                    <td className="px-4 py-3">
                      <Badge variant={
                        ma.status === 'Im Einsatz' ? 'success' : 
                        ma.status === 'Aktiv' ? 'default' : 
                        ma.status === 'Urlaub' ? 'warning' : 'destructive'
                      }>
                        {ma.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-gray-600 flex items-center gap-1">
                      {ma.objekt !== '-' && <MapPin className="h-3 w-3 text-gray-400" />}
                      {ma.objekt}
                    </td>
                    <td className="px-4 py-3 text-gray-600 flex items-center gap-1">
                      <Phone className="h-3 w-3 text-gray-400" />
                      {ma.tel}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
