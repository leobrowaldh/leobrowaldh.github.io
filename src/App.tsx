import IconSideNav from './router/IconSideNav'
import './App.css'
import { AppRouter } from './router/approuter'

function App() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <IconSideNav />
      <main className="flex-1 flex flex-col bg-blue-200 p-4">
        <AppRouter />
      </main>
    </div>

  )
}
// random comment to try to push
export default App
