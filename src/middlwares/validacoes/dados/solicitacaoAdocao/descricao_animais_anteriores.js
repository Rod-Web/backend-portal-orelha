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

  // Como o tipo no banco é TEXT, definimos um limite razoável para a aplicação (ex: entre 3 e 1000 caracteres)
  if (descricao.length < 3 || descricao.length > 1000) {
    return "A descrição dos animais anteriores deve ter entre 3 e 1000 caracteres.";
  }

  // Permite letras (com acentos), números, espaços e pontuações comuns usadas em descrições
  const regexDescricao = /^[A-Za-zÀ-ÿ0-9\s\.,;\-\(\)\/]+$/;
  if (!regexDescricao.test(descricao)) {
    return "A descrição dos animais anteriores contém caracteres inválidos.";
  }

  return null;
}