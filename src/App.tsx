import IconSideNav from './router/IconSideNav'
import { AppRouter } from './router/approuter'
import './App.css'
import { useState } from 'react';

function App() {
  const [selectedNav, setSelectedNav] = useState<number>(0);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      <IconSideNav selected={selectedNav} setSelected={setSelectedNav} />

      <main className="flex-1 flex flex-col p-4 overflow-auto">
        <AppRouter setSelectedNav={setSelectedNav} />
      </main>

    </div>
  );
}


export default App
