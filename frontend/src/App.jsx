import { Routes, Route, useLocation } from 'react-router-dom'
import Menu from './components/Menu.jsx'
import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Despesas from './pages/Despesas.jsx'
import Sobre from './pages/Sobre.jsx'

function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="app-shell">
      {!isHome && <Menu />}
      <main className={isHome ? 'stage stage--home' : 'stage'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/despesas" element={<Despesas />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
