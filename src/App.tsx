import IconSideNav from './router/IconSideNav'
import { AppRouter } from './router/approuter'
import './App.css'
import { useState } from 'react';

function App() {
  const [selectedNav, setSelectedNav] = useState<number>(0);
  return (
    <div className="relative h-screen overflow-hidden">

      <div className="flex flex-col md:flex-row h-full relative z-10">
        <IconSideNav selected={selectedNav} setSelected={setSelectedNav} />
        <main className="flex-1 flex flex-col p-4">
          <AppRouter />
        </main>
      </div>
      
    </div>
  )
}

export default App
