import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Workflow, Play, Clock, Mail, FileText, CheckCircle2, Plus, Settings2 } from 'lucide-react';

const mockWorkflows = [
  { id: 1, name: 'Angebot Follow-Up 1', trigger: 'Angebot versendet', delay: '+ 3 Tage', action: 'E-Mail: Höfliche Nachfrage', status: 'Aktiv', runs: 142 },
  { id: 2, name: 'Angebot Follow-Up 2', trigger: 'Angebot versendet', delay: '+ 7 Tage', action: 'E-Mail: Nutzen hervorheben', status: 'Aktiv', runs: 89 },
  { id: 3, name: 'Zahlungserinnerung', trigger: 'Rechnung überfällig', delay: '+ 3 Tage', action: 'E-Mail: Freundliche Erinnerung', status: 'Aktiv', runs: 45 },
  { id: 4, name: 'Mahnung 1', trigger: 'Rechnung überfällig', delay: '+ 14 Tage', action: 'E-Mail + PDF (5 €)', status: 'Aktiv', runs: 12 },
  { id: 5, name: 'Willkommen', trigger: 'Neuer Kunde erstellt', delay: 'Sofort', action: 'E-Mail: Onboarding', status: 'Pausiert', runs: 0 },
];

export function Automation() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Workflow-Automation Engine</h2>
          <p className="text-muted-foreground text-gray-500">Automatisieren Sie Follow-Ups, Mahnungen und Benachrichtigungen.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Neuer Workflow
        </Button>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Aktive Workflows</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">4</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Ausführungen (30 Tage)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">288</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Gesparte Zeit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-600">~24 Std.</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Engine Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-emerald-600">Online</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Konfigurierte Workflows</CardTitle>
          <CardDescription>Definieren Sie Trigger, Verzögerungen und Aktionen.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockWorkflows.map((wf) => (
              <div key={wf.id} className="flex items-center justify-between p-4 bg-white border rounded-lg hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-4 flex-1">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${wf.status === 'Aktiv' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}`}>
                    <Workflow className="h-5 w-5" />
                  </div>
                  <div className="grid grid-cols-4 gap-4 flex-1 items-center">
                    <div className="col-span-1">
                      <h4 className="font-semibold text-sm">{wf.name}</h4>
                      <div className="text-xs text-gray-500 mt-0.5">{wf.runs} Ausführungen</div>
                    </div>
                    <div className="col-span-1 flex items-center gap-2 text-sm text-gray-600">
                      <Play className="h-3 w-3 text-emerald-500" />
                      {wf.trigger}
                    </div>
                    <div className="col-span-1 flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-3 w-3 text-amber-500" />
                      {wf.delay}
                    </div>
                    <div className="col-span-1 flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="h-3 w-3 text-blue-500" />
                      {wf.action}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 ml-4">
                  <Badge variant={wf.status === 'Aktiv' ? 'success' : 'secondary'}>
                    {wf.status}
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <Settings2 className="h-4 w-4 text-gray-500" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
