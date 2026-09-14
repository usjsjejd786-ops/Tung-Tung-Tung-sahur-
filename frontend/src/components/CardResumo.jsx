// Cartão reutilizável do Dashboard.
// Recebe um título/label e um valor já formatado para exibir.
function CardResumo({ titulo, valor, destaque = false }) {
  return (
    <div className="card">
      <div className="card__label">{titulo}</div>
      <div className={'card__value' + (destaque ? ' card__value--spend' : '')}>
        {valor}
      </div>
    </div>
  )
}

export default CardResumo
