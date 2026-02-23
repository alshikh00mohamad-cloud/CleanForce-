import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Clock, Send, FileWarning, CreditCard } from 'lucide-react';

const mockMahnungen = [
  { id: 'MA-2026-001', rechnung: 'RE-2026-00140', kunde: 'Dr. Müller', betrag: 450.00, stufe: '1. Mahnung', faelligSeit: '11.02.2026', gebuehr: 5.00, status: 'Ausstehend' },
  { id: 'MA-2026-002', rechnung: 'RE-2026-00128', kunde: 'Gastro GmbH', betrag: 1250.00, stufe: '2. Mahnung', faelligSeit: '15.01.2026', gebuehr: 15.00, status: 'Versendet' },
  { id: 'MA-2026-003', rechnung: 'RE-2026-00095', kunde: 'Meier Logistik', betrag: 3800.00, stufe: 'Inkasso', faelligSeit: '01.12.2025', gebuehr: 30.00, status: 'Übergeben' },
];

export function Mahnwesen() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Mahnwesen & SEPA</h2>
          <p className="text-muted-foreground text-gray-500 dark:text-gray-400 mt-1">Automatisierte Mahnläufe und Lastschrifteinzug.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 bg-white dark:bg-[#141414] dark:border-[#2A2A2A] dark:text-gray-300">
            <CreditCard className="h-4 w-4" />
            SEPA-Lauf starten
          </Button>
          <Button className="gap-2 bg-amber-600 hover:bg-amber-700 text-white shadow-sm">
            <Send className="h-4 w-4" />
            Mahnlauf ausführen
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card className="border-none shadow-sm bg-white dark:bg-[#141414]">
            <CardHeader className="pb-3 border-b border-gray-100 dark:border-[#2A2A2A]">
              <CardTitle className="flex items-center gap-2 text-amber-700 dark:text-amber-500">
                <AlertTriangle className="h-5 w-5" />
                Aktuelle Mahnfälle
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50/50 dark:bg-[#1A1A1A] text-gray-500 dark:text-gray-400 font-medium border-b border-gray-100 dark:border-[#2A2A2A]">
                    <tr>
                      <th className="px-6 py-4 font-medium">Rechnung</th>
                      <th className="px-6 py-4 font-medium">Kunde</th>
                      <th className="px-6 py-4 font-medium">Stufe</th>
                      <th className="px-6 py-4 font-medium">Fällig seit</th>
                      <th className="px-6 py-4 font-medium text-right">Forderung</th>
                      <th className="px-6 py-4 font-medium text-right">Aktion</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-[#2A2A2A]">
                    {mockMahnungen.map((mahn) => (
                      <tr key={mahn.id} className="hover:bg-gray-50/80 dark:hover:bg-[#1A1A1A] transition-colors group">
                        <td className="px-6 py-4 font-mono text-xs text-blue-600 dark:text-blue-400">{mahn.rechnung}</td>
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors cursor-pointer">{mahn.kunde}</td>
                        <td className="px-6 py-4">
                          <Badge variant={
                            mahn.stufe === 'Inkasso' ? 'destructive' : 
                            mahn.stufe === '2. Mahnung' ? 'warning' : 'secondary'
                          } className={
                            mahn.stufe === 'Inkasso' ? 'bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 border-red-200 dark:border-red-500/20' : 
                            mahn.stufe === '2. Mahnung' ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/20' : 
                            'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700'
                          }>
                            {mahn.stufe}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-gray-600 dark:text-gray-400 flex items-center gap-1">
                          <Clock className="h-3 w-3 text-gray-400 dark:text-gray-500" />
                          {mahn.faelligSeit}
                        </td>
                        <td className="px-6 py-4 text-right font-mono font-medium text-gray-900 dark:text-white">
                          €{(mahn.betrag + mahn.gebuehr).toFixed(2)}
                          <div className="text-[10px] text-gray-500 dark:text-gray-400 font-sans mt-0.5">inkl. €{mahn.gebuehr.toFixed(2)} Geb.</div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          {mahn.status === 'Ausstehend' ? (
                            <Button size="sm" variant="outline" className="h-8 text-xs border-gray-200 dark:border-[#2A2A2A] text-gray-700 dark:text-gray-300 dark:bg-[#1A1A1A] dark:hover:bg-[#2A2A2A]">Prüfen</Button>
                          ) : (
                            <span className="text-xs text-gray-500 dark:text-gray-400">{mahn.status}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-none shadow-sm bg-white dark:bg-[#141414]">
            <CardHeader className="pb-3 border-b border-gray-100 dark:border-[#2A2A2A]">
              <CardTitle className="text-lg text-gray-900 dark:text-white">Mahn-Konfiguration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="flex justify-between items-center p-3 bg-gray-50/50 dark:bg-[#1A1A1A] rounded-md border border-gray-100 dark:border-[#2A2A2A]">
                <div>
                  <div className="font-medium text-sm text-gray-900 dark:text-white">Zahlungserinnerung</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">+3 Tage nach Fälligkeit</div>
                </div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">0,00 €</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50/50 dark:bg-[#1A1A1A] rounded-md border border-gray-100 dark:border-[#2A2A2A]">
                <div>
                  <div className="font-medium text-sm text-gray-900 dark:text-white">1. Mahnung</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">+14 Tage nach Fälligkeit</div>
                </div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">5,00 €</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50/50 dark:bg-[#1A1A1A] rounded-md border border-gray-100 dark:border-[#2A2A2A]">
                <div>
                  <div className="font-medium text-sm text-gray-900 dark:text-white">2. Mahnung</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">+28 Tage nach Fälligkeit</div>
                </div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">10,00 € + Zinsen</div>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50/50 dark:bg-red-900/10 rounded-md border border-red-100 dark:border-red-900/30">
                <div>
                  <div className="font-medium text-sm text-red-700 dark:text-red-400">Inkasso-Übergabe</div>
                  <div className="text-xs text-red-600/70 dark:text-red-400/70 mt-0.5">+42 Tage nach Fälligkeit</div>
                </div>
                <FileWarning className="h-4 w-4 text-red-500 dark:text-red-400" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
