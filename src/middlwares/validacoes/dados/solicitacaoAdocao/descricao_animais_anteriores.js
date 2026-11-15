export function validarDescricaoAnimaisAnteriores(descricao) {

  // Como o campo pode ser NULL e é opcional, se não for informado, a validação passa sem erros.
  if (descricao === null || descricao === undefined || descricao === "") {
    return null;
  }

  if (typeof descricao !== "string") {
    return "A descrição dos animais anteriores deve ser uma string.";
  }

  descricao = descricao.trim();

  // Se após o trim a string ficar vazia, consideramos como opcional válido
  if (descricao === "") {
    return null;
  }

  return null;
}