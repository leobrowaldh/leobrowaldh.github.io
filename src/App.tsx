import IconSideNav from './router/IconSideNav'
import './App.css'
import { AppRouter } from './router/approuter'

function App() {
  return (
    <div className="flex flex-row h-screen">
      <IconSideNav />
      <main className="flex-1 flex flex-col bg-indigo-300 p-4">
        <AppRouter />
      </main>
    </div>
  )
}
// random comment to try to push
export default App
