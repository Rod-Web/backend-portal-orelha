export function validarPossuiExperienciaAnimais(experiencia) {

  if (!experiencia || experiencia === undefined || typeof experiencia !== "string" || !experiencia.trim()) {
    return "Preencha o campo de experiência com animais.";
  }

  experiencia = experiencia.trim();

  // Como o tipo no banco é TEXT, definimos um limite razoável para a aplicação (ex: entre 3 e 1000 caracteres)
  if (experiencia.length < 3 || experiencia.length > 1000) {
    return "O campo de experiência com animais deve ter entre 3 e 1000 caracteres.";
  }

  // Permite letras (com acentos), números, espaços e pontuações comuns usadas em descrições
  const regexExperiencia = /^[A-Za-zÀ-ÿ0-9\s\.,;\-\(\)\/]+$/;
  if (!regexExperiencia.test(experiencia)) {
    return "O campo de experiência com animais contém caracteres inválidos.";
  }

  return null;
}