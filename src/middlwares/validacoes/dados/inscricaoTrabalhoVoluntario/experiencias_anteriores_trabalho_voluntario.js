export function validarExperienciasAnterioresTrabalhoVoluntario(experiencias) {

  if (!experiencias || experiencias === undefined || typeof experiencias !== "string" || !experiencias.trim()) {
    return "Preencha o campo de experiências anteriores de trabalho voluntário.";
  }

  experiencias = experiencias.trim();

  // Como o tipo no banco é TEXT, definimos um limite razoável para a aplicação (ex: entre 3 e 1000 caracteres)
  if (experiencias.length < 3 || experiencias.length > 1000) {
    return "As experiências anteriores de trabalho voluntário devem ter entre 3 e 1000 caracteres.";
  }

  // Permite letras (com acentos), números, espaços e pontuações comuns usadas em descrições
  const regexExperiencias = /^[A-Za-zÀ-ÿ0-9\s\.,;\-\(\)\/]+$/;
  if (!regexExperiencias.test(experiencias)) {
    return "As experiências anteriores de trabalho voluntário contêm caracteres inválidos.";
  }

  return null;
}