// Responsável só pela exibição das despesas — recebe os dados prontos
// e o formulário/página de cima decide de onde eles vêm (por enquanto,
// dados fixos; na Etapa 5 vão vir da API).
function formatarValor(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function formatarData(data) {
  return new Date(data + 'T00:00:00').toLocaleDateString('pt-BR')
}

function ListaDespesas({ despesas, onExcluir }) {
  if (despesas.length === 0) {
    return <p className="despesas-vazio">Nenhuma despesa encontrada para esse filtro.</p>
  }

  return (
    <div className="lista-despesas">
      {despesas.map((despesa) => (
        <div className="despesa-row" key={despesa.id}>
          <div className="despesa-row__info">
            <span className="despesa-row__desc">{despesa.descricao}</span>
            <span className="despesa-row__meta">
              {despesa.categoria} · {formatarData(despesa.data)}
            </span>
          </div>
          <div className="despesa-row__right">
            <span className="despesa-row__valor">{formatarValor(despesa.valor)}</span>
            <button className="link-excluir" onClick={() => onExcluir(despesa.id)}>
              excluir
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListaDespesas
