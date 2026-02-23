import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, FileText, Download, Plus, MoreHorizontal, CheckCircle2, AlertCircle } from 'lucide-react';

const mockRechnungen = [
  { id: 'RE-2026-00142', kunde: 'TechCorp GmbH', datum: '15.02.2026', faellig: '01.03.2026', betrag: 1190.00, status: 'Entwurf' },
  { id: 'RE-2026-00141', kunde: 'Hotel Adlon', datum: '01.02.2026', faellig: '15.02.2026', betrag: 3450.50, status: 'Versendet' },
  { id: 'RE-2026-00140', kunde: 'Dr. Müller', datum: '28.01.2026', faellig: '11.02.2026', betrag: 450.00, status: 'Überfällig' },
  { id: 'RE-2026-00139', kunde: 'Krankenhaus Mitte', datum: '15.01.2026', faellig: '29.01.2026', betrag: 5200.00, status: 'Bezahlt' },
];

export function Rechnungen() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Rechnungssystem (GoBD-konform)</h2>
          <p className="text-muted-foreground text-gray-500 dark:text-gray-400 mt-1">Erstellen und verwalten Sie unveränderliche Rechnungen.</p>
        </div>
        <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
          <Plus className="h-4 w-4" />
          Neue Rechnung
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-none shadow-sm bg-white dark:bg-[#141414]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Offene Forderungen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">€8,640.50</div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm bg-white dark:bg-[#141414]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Überfällig</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">€450.00</div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm bg-white dark:bg-[#141414]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Entwürfe</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-600 dark:text-gray-300">1</div>
          </CardContent>
        </Card>
        <Card className="border-none shadow-sm bg-white dark:bg-[#141414]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">GoBD Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium">
              <CheckCircle2 className="h-5 w-5" />
              Sicher
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-sm bg-white dark:bg-[#141414]">
        <CardHeader className="pb-3 border-b border-gray-100 dark:border-[#2A2A2A]">
          <div className="flex items-center justify-between">
            <div className="relative w-72">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input 
                placeholder="Rechnungsnummer oder Kunde..." 
                className="pl-9 bg-gray-50/50 dark:bg-[#1A1A1A] border-gray-200 dark:border-[#2A2A2A] dark:text-white focus-visible:ring-blue-500 h-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-[#2A2A2A] dark:bg-[#1A1A1A] h-10">
                <Download className="h-4 w-4" /> DATEV Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50/50 dark:bg-[#1A1A1A] text-gray-500 dark:text-gray-400 font-medium border-b border-gray-100 dark:border-[#2A2A2A]">
                <tr>
                  <th className="px-6 py-4 font-medium">Rechnungsnr.</th>
                  <th className="px-6 py-4 font-medium">Kunde</th>
                  <th className="px-6 py-4 font-medium">Datum</th>
                  <th className="px-6 py-4 font-medium">Fällig am</th>
                  <th className="px-6 py-4 font-medium text-right">Betrag (Brutto)</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Aktionen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-[#2A2A2A]">
                {mockRechnungen.map((re) => (
                  <tr key={re.id} className="hover:bg-gray-50/80 dark:hover:bg-[#1A1A1A] transition-colors group">
                    <td className="px-6 py-4 font-mono text-xs font-medium text-blue-600 dark:text-blue-400 flex items-center gap-2">
                      <FileText className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                      {re.id}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer">{re.kunde}</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{re.datum}</td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">{re.faellig}</td>
                    <td className="px-6 py-4 text-right font-mono font-medium text-gray-900 dark:text-white">€{re.betrag.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <Badge variant={
                        re.status === 'Bezahlt' ? 'success' : 
                        re.status === 'Überfällig' ? 'destructive' : 
                        re.status === 'Versendet' ? 'default' : 'secondary'
                      } className={
                        re.status === 'Bezahlt' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20' : 
                        re.status === 'Überfällig' ? 'bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 border-red-200 dark:border-red-500/20' : 
                        re.status === 'Versendet' ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-500/20' : 
                        'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700'
                      }>
                        {re.status === 'Überfällig' && <AlertCircle className="h-3 w-3 mr-1 inline" />}
                        {re.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="icon" className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreHorizontal className="h-5 w-5" />
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
