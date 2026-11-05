export function validarLocal(local) {
  // Validar se existe
  if (!local || local == undefined || !local.trim()) return "O local não foi inserido.";

  local = local.trim();

  // Validar se tá no tipo correto
  if (typeof local !== "string")
    return "Só é permitido caracteres de texto no local.";

  // validar tamanho
  if (local.length < 3 || local.length > 100)
    return "O local deve ter entre 3-100 caracteres";

  return null;
}
