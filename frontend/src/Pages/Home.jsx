import { Link } from 'react-router-dom'

// Tela de apresentação do sistema. Não fala com o backend.
function Home() {
  return (
    <div className="home">
      <div className="home__ledger-no">registro nº 001</div>
      <h1>Controle Financeiro</h1>
      <p className="home__tagline">
        Organize seus gastos de forma simples: cadastre, filtre e acompanhe
        para onde o dinheiro está indo.
      </p>
      <Link to="/dashboard" className="btn">Acessar sistema</Link>
    </div>
  )
}

export default Home
