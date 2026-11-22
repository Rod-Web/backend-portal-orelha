export function validarUsername(username) {
  // Validar se existe
  if (!username || username == undefined || !username.trim())
    return "O username não foi inserido.";

  username = username.trim();

  // Validar se tá no tipo correto
  if (typeof username !== "string")
    return "Só é permitido caracteres de texto no username.";

  // validar tamanho
  if (username.length < 3 || username.length > 20)
    return "O username deve ter entre 3-20 caracteres";

  return null;
}
