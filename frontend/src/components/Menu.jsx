import { NavLink } from 'react-router-dom'

// Menu principal — navegação entre as páginas internas do sistema.
// Não aparece na Home, só a partir do Dashboard em diante.
function Menu() {
  const linkClass = ({ isActive }) => 'menu__link' + (isActive ? ' active' : '')

  return (
    <nav className="menu">
      <div className="menu__mark">
        Controle Financeiro
        <span>registro de gastos</span>
      </div>
      <div className="menu__nav">
        <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
        <NavLink to="/despesas" className={linkClass}>Despesas</NavLink>
        <NavLink to="/sobre" className={linkClass}>Sobre</NavLink>
      </div>
    </nav>
  )
}

export default Menu
