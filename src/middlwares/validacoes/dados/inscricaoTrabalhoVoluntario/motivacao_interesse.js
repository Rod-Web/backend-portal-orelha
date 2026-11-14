export function validarMotivacaoInteresse(motivacao) {

  if (!motivacao || motivacao === undefined || typeof motivacao !== "string" || !motivacao.trim()) {
    return "Preencha o campo de motivação e interesse.";
  }

  motivacao = motivacao.trim();

  // Como o tipo no banco é TEXT, definimos um limite razoável para a aplicação (ex: entre 10 e 1000 caracteres)
  if (motivacao.length < 10 || motivacao.length > 1000) {
    return "A motivação e interesse deve ter entre 10 e 1000 caracteres.";
  }

  // Permite letras (com acentos), números, espaços e pontuações comuns usadas em descrições textuais
  const regexMotivacao = /^[A-Za-zÀ-ÿ0-9\s\.,;\-\(\)\/]+$/;
  if (!regexMotivacao.test(motivacao)) {
    return "O campo de motivação e interesse contém caracteres inválidos.";
  }

  return null;
}