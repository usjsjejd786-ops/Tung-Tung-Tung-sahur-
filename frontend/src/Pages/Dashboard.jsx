import CardResumo from '../components/CardResumo.jsx'

// Etapa 1: dados fixos só para termos algo pra olhar na tela.
// A partir da Etapa 5, isso vem de GET /api/despesas via services/api.js.
const despesasMock = [
  { id: 1, descricao: 'Almoço', valor: 35, categoria: 'Alimentação', data: '2026-09-10' },
  { id: 2, descricao: 'Uber', valor: 22, categoria: 'Transporte', data: '2026-09-10' },
  { id: 3, descricao: 'Cinema', valor: 60, categoria: 'Lazer', data: '2026-09-11' },
  { id: 4, descricao: 'Mercado', valor: 180, categoria: 'Alimentação', data: '2026-09-12' },
  { id: 5, descricao: 'Assinatura streaming', valor: 40, categoria: 'Outros', data: '2026-09-13' },
]

function formatarValor(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function Dashboard() {
  const total = despesasMock.reduce((soma, d) => soma + d.valor, 0)
  const maiorGasto = Math.max(...despesasMock.map((d) => d.valor))

  const porCategoria = despesasMock.reduce((acc, d) => {
    acc[d.categoria] = (acc[d.categoria] || 0) + d.valor
    return acc
  }, {})

  return (
    <div>
      <h1>Dashboard</h1>
      <p className="page-eyebrow">
        Resumo do período — dados de exemplo por enquanto; na Etapa 5 isso
        passa a vir do banco de dados.
      </p>

      <div className="cards">
        <CardResumo titulo="Total gasto" valor={formatarValor(total)} destaque />
        <CardResumo titulo="Despesas" valor={despesasMock.length} />
        <CardResumo titulo="Maior gasto" valor={formatarValor(maiorGasto)} />
      </div>

      <h3>Gastos por categoria</h3>
      <div className="categorias">
        {Object.entries(porCategoria).map(([categoria, valor]) => (
          <div className="categoria-row" key={categoria}>
            <span>{categoria}</span>
            <span className="categoria-row__valor">{formatarValor(valor)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
