/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/layout';
import { IncidentTriage } from './components/IncidentTriage';
import { LicenseForecast } from './components/LicenseForecast';
import { AssetRefresh } from './components/AssetRefresh';
import { SLAWatcher } from './components/SLAWatcher';
import { AIReports } from './components/AIReports';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/license-forecast" replace />} />
          <Route path="incident-triage" element={<IncidentTriage />} />
          <Route path="license-forecast" element={<LicenseForecast />} />
          <Route path="asset-refresh" element={<AssetRefresh />} />
          <Route path="sla-watcher" element={<SLAWatcher />} />
          <Route path="reports" element={<AIReports />} />
        </Route>
      </Routes>
    </Router>
  );
}
