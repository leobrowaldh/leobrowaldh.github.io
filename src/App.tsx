import IconSideNav from './router/IconSideNav'
import { AppRouter } from './router/approuter'
import './App.css'

function App() {
  return (
    <div className="relative h-screen overflow-hidden">

      <div className="flex flex-col md:flex-row h-full relative z-10">
        <IconSideNav />
        <main className="flex-1 flex flex-col p-4">
          <AppRouter />
        </main>
      </div>
      
    </div>
  )
}

export default App
