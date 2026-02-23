import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Users, FileText, Receipt, TrendingUp, AlertCircle, Clock, ArrowUpRight, ArrowDownRight, Activity, Building2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Jan', umsatz: 4000 },
  { name: 'Feb', umsatz: 3000 },
  { name: 'Mär', umsatz: 2000 },
  { name: 'Apr', umsatz: 2780 },
  { name: 'Mai', umsatz: 1890 },
  { name: 'Jun', umsatz: 2390 },
  { name: 'Jul', umsatz: 3490 },
];

export function Dashboard() {
  return (
    <div className="space-y-8 max-w-[1600px] mx-auto pb-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Dashboard</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Willkommen zurück. Hier ist der Überblick für heute.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-[#2A2A2A] rounded-lg px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 shadow-sm flex items-center gap-2">
            <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span>Heute, 22. Feb 2026</span>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-none shadow-sm bg-white dark:bg-[#141414]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Monatsumsatz</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">€45.231</p>
              </div>
              <div className="h-12 w-12 bg-emerald-50 dark:bg-emerald-500/10 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="flex items-center text-emerald-600 dark:text-emerald-400 font-medium">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                20.1%
              </span>
              <span className="text-gray-500 dark:text-gray-400 ml-2">vs. letzter Monat</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-white dark:bg-[#141414]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Aktive Mitarbeiter</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">235</p>
              </div>
              <div className="h-12 w-12 bg-blue-50 dark:bg-blue-500/10 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="flex items-center text-emerald-600 dark:text-emerald-400 font-medium">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                14 im Einsatz
              </span>
              <span className="text-gray-500 dark:text-gray-400 ml-2">2 krank gemeldet</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-white dark:bg-[#141414]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Offene Rechnungen</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">12</p>
              </div>
              <div className="h-12 w-12 bg-rose-50 dark:bg-rose-500/10 rounded-full flex items-center justify-center">
                <Receipt className="h-6 w-6 text-rose-600 dark:text-rose-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="flex items-center text-rose-600 dark:text-rose-400 font-medium">
                <AlertCircle className="h-4 w-4 mr-1" />
                3 überfällig
              </span>
              <span className="text-gray-500 dark:text-gray-400 ml-2">(€4.200)</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-white dark:bg-[#141414]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Offene Angebote</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">8</p>
              </div>
              <div className="h-12 w-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-full flex items-center justify-center">
                <FileText className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="flex items-center text-amber-600 dark:text-amber-400 font-medium">
                <Clock className="h-4 w-4 mr-1" />
                Warten auf Antwort
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 border-none shadow-sm bg-white dark:bg-[#141414]">
          <CardHeader className="p-6 pb-0">
            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Umsatzentwicklung</CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" strokeOpacity={0.2} />
                  <XAxis 
                    dataKey="name" 
                    stroke="#9ca3af" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    dy={10}
                  />
                  <YAxis
                    stroke="#9ca3af"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `€${value}`}
                    dx={-10}
                  />
                  <Tooltip 
                    cursor={{fill: 'rgba(156, 163, 175, 0.1)'}}
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', backgroundColor: 'var(--tooltip-bg, #fff)', color: 'var(--tooltip-text, #000)'}}
                  />
                  <Bar dataKey="umsatz" fill="#3b82f6" radius={[6, 6, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3 border-none shadow-sm bg-white dark:bg-[#141414]">
          <CardHeader className="p-6 pb-0 flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Heutige Objekte (Live)</CardTitle>
            <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 dark:bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 dark:bg-emerald-400"></span>
              </span>
              Live
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              {[
                { name: 'Bürokomplex Hauptstraße 12', time: '06:00 - 10:00', status: 'Fertig', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-100 dark:bg-emerald-500/10', icon: Building2 },
                { name: 'Hotel Adlon', time: '09:00 - 14:00', status: 'In Arbeit', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-500/10', icon: Building2 },
                { name: 'Krankenhaus Mitte', time: '14:00 - 22:00', status: 'Geplant', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-100 dark:bg-amber-500/10', icon: Building2 },
                { name: 'Schule Nord', time: '16:00 - 20:00', status: 'Geplant', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-100 dark:bg-amber-500/10', icon: Building2 },
              ].map((obj, i) => (
                <div key={i} className="flex items-center group">
                  <div className={`mr-4 h-12 w-12 rounded-xl flex items-center justify-center ${obj.bg} transition-transform group-hover:scale-105`}>
                    <obj.icon className={`h-6 w-6 ${obj.color}`} />
                  </div>
                  <div className="space-y-1 flex-1">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white leading-none">{obj.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {obj.time}
                    </p>
                  </div>
                  <div className={`text-xs font-semibold px-3 py-1 rounded-full ${obj.bg} ${obj.color}`}>
                    {obj.status}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
