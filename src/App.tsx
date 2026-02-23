/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { Dashboard } from './pages/Dashboard';
import { Kunden } from './pages/Kunden';
import { Objekte } from './pages/Objekte';
import { Angebote } from './pages/Angebote';
import { Personal } from './pages/Personal';
import { GPS } from './pages/GPS';
import { Kalkulation } from './pages/Kalkulation';
import { Automation } from './pages/Automation';
import { Rechnungen } from './pages/Rechnungen';
import { Mahnwesen } from './pages/Mahnwesen';
import { Buchhaltung } from './pages/Buchhaltung';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="kunden" element={<Kunden />} />
          <Route path="objekte" element={<Objekte />} />
          <Route path="angebote" element={<Angebote />} />
          <Route path="personal" element={<Personal />} />
          <Route path="gps" element={<GPS />} />
          <Route path="kalkulation" element={<Kalkulation />} />
          <Route path="automation" element={<Automation />} />
          <Route path="rechnungen" element={<Rechnungen />} />
          <Route path="mahnwesen" element={<Mahnwesen />} />
          <Route path="buchhaltung" element={<Buchhaltung />} />
        </Route>
      </Routes>
    </Router>
  );
}



