export function validarRotinaFamiliar(rotinaFamiliar) {

  if (!rotinaFamiliar || rotinaFamiliar === undefined || typeof rotinaFamiliar !== "string" || !rotinaFamiliar.trim()) {
    return "Preencha o campo de rotina familiar.";
  }

  rotinaFamiliar = rotinaFamiliar.trim();

  // Como o tipo no banco é TEXT, definimos um limite razoável para a aplicação (ex: entre 10 e 1000 caracteres)
  if (rotinaFamiliar.length < 10 || rotinaFamiliar.length > 1000) {
    return "A rotina familiar deve ter entre 10 e 1000 caracteres.";
  }

  return null;
}