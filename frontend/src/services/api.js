// Camada de comunicação com o backend.
// Ainda não é usada em nenhuma página — entra em cena na Etapa 5,
// quando o Dashboard e a página de Despesas passam a buscar dados
// reais em vez dos arrays fixos usados nas Etapas 1 a 4.

const BASE_URL = 'http://localhost:3001/api'

export async function buscarDespesas() {
  const resposta = await fetch(`${BASE_URL}/despesas`)
  return resposta.json()
}

export async function criarDespesa(dados) {
  const resposta = await fetch(`${BASE_URL}/despesas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados),
  })
  return resposta.json()
}

export async function excluirDespesa(id) {
  const resposta = await fetch(`${BASE_URL}/despesas/${id}`, {
    method: 'DELETE',
  })
  return resposta.json()
}
