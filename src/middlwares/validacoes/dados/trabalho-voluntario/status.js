export function validarStatus(status) {
  if (status == null || status == undefined || status === "") {
    return "É obrigatório inserir um status";
  }

  if (typeof status !== "string") {
    return "O status deve ser uma string";
  }

  const statusNormalizado = status.trim().toLowerCase();
  const statusValidos = ["aberta", "encerrada"];

  if (!statusValidos.includes(statusNormalizado)) {
    return "O status deve ser ''ABERTA', 'ENCERRADA'";
  }

  return null;
}
