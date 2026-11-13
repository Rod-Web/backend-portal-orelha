export function validarRotinaFamiliar(rotinaFamiliar) {

  if (!rotinaFamiliar || rotinaFamiliar === undefined || typeof rotinaFamiliar !== "string" || !rotinaFamiliar.trim()) {
    return "Preencha o campo de rotina familiar.";
  }

  rotinaFamiliar = rotinaFamiliar.trim();

  // Como o tipo no banco é TEXT, definimos um limite razoável para a aplicação (ex: entre 10 e 1000 caracteres)
  if (rotinaFamiliar.length < 10 || rotinaFamiliar.length > 1000) {
    return "A rotina familiar deve ter entre 10 e 1000 caracteres.";
  }

  // Permite letras (com acentos), números, espaços e pontuações comuns usadas em descrições textuais
  const regexRotina = /^[A-Za-zÀ-ÿ0-9\s\.,;\-\(\)\/]+$/;
  if (!regexRotina.test(rotinaFamiliar)) {
    return "A rotina familiar contém caracteres inválidos.";
  }

  return null;
}