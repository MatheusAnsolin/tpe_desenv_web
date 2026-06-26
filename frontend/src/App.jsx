import React, { useState } from 'react';
import PublicList from './components/PublicList';
import AdminPanel from './components/AdminPanel';

export default function App() {
  const [view, setView] = useState('public'); // 'public' | 'admin'
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 20 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Marcenaria Sob Medida</h1>
        <nav>
          <button onClick={() => setView('public')} style={{ marginRight: 8 }}>Site</button>
          <button onClick={() => setView('admin')}>Painel Admin</button>
        </nav>
      </header>

      <main style={{ marginTop: 20 }}>
        {view === 'public' ? <PublicList /> : <AdminPanel />}
      </main>
    </div>
  );
}