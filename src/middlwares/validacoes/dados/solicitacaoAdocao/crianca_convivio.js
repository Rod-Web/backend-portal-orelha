export function validarCriancaConvivio(criancaConvivio) {

  if (!criancaConvivio || criancaConvivio === undefined || typeof criancaConvivio !== "string" || !criancaConvivio.trim()) {
    return "Preencha o campo de convívio com crianças.";
  }

  criancaConvivio = criancaConvivio.trim();

  // Como o tipo no banco é TEXT, definimos um limite razoável para a aplicação (ex: entre 3 e 500 caracteres)
  if (criancaConvivio.length < 3 || criancaConvivio.length > 500) {
    return "O campo de convívio com crianças deve ter entre 3 e 500 caracteres.";
  }

  // Permite letras (com acentos), números, espaços e pontuações comuns usadas em descrições (ex: "Sim, há 2 crianças de 5 e 8 anos")
  const regexCriancaConvivio = /^[A-Za-zÀ-ÿ0-9\s\.,;\-\(\)\/]+$/;
  if (!regexCriancaConvivio.test(criancaConvivio)) {
    return "O campo de convívio com crianças contém caracteres inválidos.";
  }

  return null;
}