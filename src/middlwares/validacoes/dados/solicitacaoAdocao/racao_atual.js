export function validarRacaoAtual(racao) {

  // Como o campo pode ser NULL e é opcional (para quem tem animal existente), se não for informado, a validação passa sem erros.
  if (racao === null || racao === undefined || racao === "") {
    return null;
  }

  if (typeof racao !== "string") {
    return "A ração atual deve ser uma string.";
  }

  racao = racao.trim();

  // Se após o trim a string ficar vazia, consideramos como opcional válido
  if (racao === "") {
    return null;
  }

  return null;
}