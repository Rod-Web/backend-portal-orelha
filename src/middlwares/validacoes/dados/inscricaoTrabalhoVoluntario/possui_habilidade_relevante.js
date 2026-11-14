export function validarPossuiHabilidadeRelevante(habilidade) {

  if (!habilidade || habilidade === undefined || typeof habilidade !== "string" || !habilidade.trim()) {
    return "Preencha o campo de habilidades relevantes.";
  }

  habilidade = habilidade.trim();

  // Como o tipo no banco é TEXT, definimos um limite razoável para a aplicação (ex: entre 3 e 1000 caracteres)
  if (habilidade.length < 3 || habilidade.length > 1000) {
    return "O campo de habilidades relevantes deve ter entre 3 e 1000 caracteres.";
  }

  // Permite letras (com acentos), números, espaços e pontuações comuns usadas em descrições
  const regexHabilidade = /^[A-Za-zÀ-ÿ0-9\s\.,;\-\(\)\/]+$/;
  if (!regexHabilidade.test(habilidade)) {
    return "O campo de habilidades relevantes contém caracteres inválidos.";
  }

  return null;
}