function Sobre() {
  return (
    <div>
      <h1>Sobre o sistema</h1>
      <p className="page-eyebrow">
        O Controle Financeiro foi desenvolvido para facilitar o
        gerenciamento de despesas pessoais.
      </p>

      <dl className="sobre-grid">
        <div>
          <dt>Frontend</dt>
          <dd>React</dd>
        </div>
        <div>
          <dt>Backend</dt>
          <dd>Node.js + Express</dd>
        </div>
        <div>
          <dt>Banco</dt>
          <dd>SQLite</dd>
        </div>
      </dl>
    </div>
  )
}

export default Sobre
