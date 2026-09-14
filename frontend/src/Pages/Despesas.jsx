import { useMemo, useState } from 'react'
import ListaDespesas from '../components/ListaDespesas.jsx'

// Etapa 1: lista e filtro funcionam com dados locais.
// Etapa 2 pluga o formulário de cadastro; Etapa 5 troca tudo por chamadas
// reais em services/api.js (GET/POST/DELETE /api/despesas).
const despesasIniciais = [
  { id: 1, descricao: 'Almoço', valor: 35, categoria: 'Alimentação', data: '2026-09-10' },
  { id: 2, descricao: 'Uber', valor: 22, categoria: 'Transporte', data: '2026-09-10' },
  { id: 3, descricao: 'Cinema', valor: 60, categoria: 'Lazer', data: '2026-09-11' },
  { id: 4, descricao: 'Mercado', valor: 180, categoria: 'Alimentação', data: '2026-09-12' },
  { id: 5, descricao: 'Assinatura streaming', valor: 40, categoria: 'Outros', data: '2026-09-13' },
]

const categorias = ['Todas', 'Alimentação', 'Transporte', 'Lazer', 'Outros']

function Despesas() {
  const [despesas, setDespesas] = useState(despesasIniciais)
  const [filtro, setFiltro] = useState('Todas')
  const [avisoForm, setAvisoForm] = useState(false)

  const despesasFiltradas = useMemo(() => {
    if (filtro === 'Todas') return despesas
    return despesas.filter((d) => d.categoria === filtro)
  }, [despesas, filtro])

  function excluir(id) {
    setDespesas((atual) => atual.filter((d) => d.id !== id))
  }

  return (
    <div>
      <h1>Despesas</h1>
      <p className="page-eyebrow">
        Cadastro, filtro e exclusão funcionando localmente nesta etapa.
      </p>

      <div className="despesas-toolbar">
        <button className="btn btn--ghost" onClick={() => setAvisoForm((v) => !v)}>
          + Nova despesa
        </button>
        <select
          className="select"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        >
          {categorias.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {avisoForm && (
        <p className="page-eyebrow">
          O formulário de cadastro (FormDespesa.jsx) entra na Etapa 2 — por
          enquanto essa lista usa dados fixos.
        </p>
      )}

      <ListaDespesas despesas={despesasFiltradas} onExcluir={excluir} />
    </div>
  )
}

export default Despesas
