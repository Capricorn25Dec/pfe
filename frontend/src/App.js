import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout'; // Now using Layout as the main component
import MonitoringNotes from './components/MonitoringNoteContent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="home" element={<Layout />} /> */}
          <Route path="monitoring-notes" element={<MonitoringNotes />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
