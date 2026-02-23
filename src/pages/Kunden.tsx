import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, Plus, MoreHorizontal, Building2, User, 
  Filter, Download, ArrowUpRight, ArrowDownRight, 
  Users, UserCheck, UserPlus, Activity, ChevronLeft, ChevronRight
} from 'lucide-react';

const mockCustomers = [
  { id: 'KD-2026-0001', typ: 'firma', name: 'TechCorp GmbH', ansprechpartner: 'Max Mustermann', email: 'max@techcorp.de', phone: '+49 151 2345678', segment: 'Premium', status: 'Aktiv', avatar: 'TC', color: 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400' },
  { id: 'KD-2026-0002', typ: 'firma', name: 'Hotel Adlon', ansprechpartner: 'Anna Schmidt', email: 'anna@adlon.de', phone: '+49 30 22610', segment: 'VIP', status: 'Aktiv', avatar: 'HA', color: 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400' },
  { id: 'KD-2026-0003', typ: 'privat', name: 'Dr. Müller', ansprechpartner: 'Dr. Thomas Müller', email: 'thomas@mueller.de', phone: '+49 172 9876543', segment: 'Standard', status: 'Inaktiv', avatar: 'TM', color: 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400' },
  { id: 'KD-2026-0004', typ: 'firma', name: 'Krankenhaus Mitte', ansprechpartner: 'Dr. Weber', email: 'weber@kh-mitte.de', phone: '+49 30 123456', segment: 'VIP', status: 'Angebot', avatar: 'KM', color: 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400' },
  { id: 'KD-2026-0005', typ: 'firma', name: 'Gastro Service Berlin', ansprechpartner: 'Lukas Wagner', email: 'lukas@gastro-berlin.de', phone: '+49 160 5554443', segment: 'Premium', status: 'Aktiv', avatar: 'GS', color: 'bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-400' },
  { id: 'KD-2026-0006', typ: 'privat', name: 'Familie Becker', ansprechpartner: 'Julia Becker', email: 'familie.becker@web.de', phone: '+49 152 3332221', segment: 'Standard', status: 'Aktiv', avatar: 'FB', color: 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400' },
];

export function Kunden() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto pb-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Kunden</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Verwalten Sie Ihre Kundenbeziehungen und Kontakte.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2 bg-white dark:bg-[#141414] dark:border-[#2A2A2A] dark:text-gray-300 hidden sm:flex">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
            <Plus className="h-4 w-4" />
            Neuer Kunde
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-none shadow-sm bg-white dark:bg-[#141414]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Gesamtkunden</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">2,420</p>
              </div>
              <div className="h-12 w-12 bg-blue-50 dark:bg-blue-500/10 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="flex items-center text-emerald-600 dark:text-emerald-400 font-medium">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                12%
              </span>
              <span className="text-gray-500 dark:text-gray-400 ml-2">vs. letzter Monat</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-white dark:bg-[#141414]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Aktive Kunden</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">1,850</p>
              </div>
              <div className="h-12 w-12 bg-emerald-50 dark:bg-emerald-500/10 rounded-full flex items-center justify-center">
                <UserCheck className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="flex items-center text-emerald-600 dark:text-emerald-400 font-medium">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                8%
              </span>
              <span className="text-gray-500 dark:text-gray-400 ml-2">vs. letzter Monat</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-white dark:bg-[#141414]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Neue Kunden (30T)</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">145</p>
              </div>
              <div className="h-12 w-12 bg-purple-50 dark:bg-purple-500/10 rounded-full flex items-center justify-center">
                <UserPlus className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="flex items-center text-emerald-600 dark:text-emerald-400 font-medium">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                24%
              </span>
              <span className="text-gray-500 dark:text-gray-400 ml-2">vs. letzter Monat</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-white dark:bg-[#141414]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Aktivitätsrate</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">76%</p>
              </div>
              <div className="h-12 w-12 bg-amber-50 dark:bg-amber-500/10 rounded-full flex items-center justify-center">
                <Activity className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="flex items-center text-rose-600 dark:text-rose-400 font-medium">
                <ArrowDownRight className="h-4 w-4 mr-1" />
                2%
              </span>
              <span className="text-gray-500 dark:text-gray-400 ml-2">vs. letzter Monat</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Table Section */}
      <Card className="border-none shadow-sm bg-white dark:bg-[#141414] overflow-hidden">
        {/* Toolbar */}
        <div className="p-5 border-b border-gray-100 dark:border-[#2A2A2A] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
            <Input 
              placeholder="Suchen nach Name, Email oder ID..." 
              className="pl-10 bg-gray-50/50 dark:bg-[#1A1A1A] border-gray-200 dark:border-[#2A2A2A] dark:text-white focus-visible:ring-blue-500 h-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-[#2A2A2A] dark:bg-[#1A1A1A] h-10">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" className="gap-2 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-[#2A2A2A] dark:bg-[#1A1A1A] h-10">
              Ansicht
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50/50 dark:bg-[#1A1A1A] text-gray-500 dark:text-gray-400 font-medium border-b border-gray-100 dark:border-[#2A2A2A]">
              <tr>
                <th className="px-6 py-4 font-medium">Kunde</th>
                <th className="px-6 py-4 font-medium">Kontakt</th>
                <th className="px-6 py-4 font-medium">Segment</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Kundennummer</th>
                <th className="px-6 py-4 font-medium text-right">Aktionen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-[#2A2A2A]">
              {mockCustomers.map((kunde) => (
                <tr key={kunde.id} className="hover:bg-gray-50/80 dark:hover:bg-[#1A1A1A] transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-full flex items-center justify-center font-semibold text-sm ${kunde.color}`}>
                        {kunde.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer">
                          {kunde.name}
                        </div>
                        <div className="text-gray-500 dark:text-gray-400 text-xs flex items-center gap-1 mt-0.5">
                          {kunde.typ === 'firma' ? <Building2 className="h-3 w-3" /> : <User className="h-3 w-3" />}
                          {kunde.typ === 'firma' ? 'Unternehmen' : 'Privatkunde'}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-900 dark:text-gray-200 font-medium">{kunde.ansprechpartner}</div>
                    <div className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">{kunde.email}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                      kunde.segment === 'VIP' ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/20' : 
                      kunde.segment === 'Premium' ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-500/20' : 
                      'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700'
                    }`}>
                      {kunde.segment}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full ${
                        kunde.status === 'Aktiv' ? 'bg-emerald-500' : 
                        kunde.status === 'Angebot' ? 'bg-blue-500' : 
                        'bg-gray-400 dark:bg-gray-600'
                      }`} />
                      <span className="text-gray-700 dark:text-gray-300">{kunde.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-mono text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-[#1A1A1A] px-2 py-1 rounded-md">
                      {kunde.id}
                    </span>
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

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 dark:border-[#2A2A2A] flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div>
            Zeige <span className="font-medium text-gray-900 dark:text-white">1</span> bis <span className="font-medium text-gray-900 dark:text-white">6</span> von <span className="font-medium text-gray-900 dark:text-white">2,420</span> Ergebnissen
          </div>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="icon" className="h-8 w-8 dark:border-[#2A2A2A] dark:bg-[#1A1A1A] dark:text-gray-400" disabled>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="h-8 w-8 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">1</Button>
            <Button variant="outline" size="sm" className="h-8 w-8 dark:border-[#2A2A2A] dark:bg-[#1A1A1A] dark:text-gray-300">2</Button>
            <Button variant="outline" size="sm" className="h-8 w-8 dark:border-[#2A2A2A] dark:bg-[#1A1A1A] dark:text-gray-300">3</Button>
            <span className="px-2">...</span>
            <Button variant="outline" size="sm" className="h-8 w-8 dark:border-[#2A2A2A] dark:bg-[#1A1A1A] dark:text-gray-300">404</Button>
            <Button variant="outline" size="icon" className="h-8 w-8 dark:border-[#2A2A2A] dark:bg-[#1A1A1A] dark:text-gray-300">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
