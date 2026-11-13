export function validarMedidasSegurancaResidencial(medidas) {

  if (!medidas || medidas === undefined || !medidas.trim()) {
    return "Preencha o campo de medidas de segurança residencial.";
  }

  medidas = medidas.trim();

  if (typeof medidas !== "string") {
    return "As medidas de segurança residencial devem ser uma string.";
  }

  // Como o tipo no banco é TEXT (permite textos longos), definimos um limite razoável para a aplicação (ex: entre 10 e 1000 caracteres)
  if (medidas.length < 3 || medidas.length > 1000) {
    return "As medidas de segurança residencial devem ter entre 10 e 1000 caracteres.";
  }

  // Permite letras, números, espaços e pontuações comuns usadas em descrições textuais (ex: vírgulas, pontos, hífens, parênteses e barras)
  const regexTexto = /^[A-Za-zÀ-ÿ0-9\s\.,;\-\(\)\/]+$/;
  if (!regexTexto.test(medidas)) {
    return "As medidas de segurança residencial contêm caracteres inválidos.";
  }

  return null;
}