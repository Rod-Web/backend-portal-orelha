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

  // Respeita o limite exato do banco de dados (VARCHAR(100)) e exige um mínimo de 2 caracteres
  if (racao.length < 2 || racao.length > 100) {
    return "A ração atual deve ter entre 2 e 100 caracteres.";
  }

  // Permite letras (com acentos), números, espaços e pontuações/símbolos comuns em nomes de marcas (ex: "Golden Formula 15kg", "Special Dog Pro")
  const regexRacao = /^[A-Za-zÀ-ÿ0-9\s\.\-\/\+]+$/;
  if (!regexRacao.test(racao)) {
    return "A ração atual contém caracteres inválidos.";
  }

  return null;
}