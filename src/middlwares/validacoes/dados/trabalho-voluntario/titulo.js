export function validarTitulo(titulo) {
  // Validar se existe
  if (!titulo || titulo == undefined || !titulo.trim()) return "O titulo não foi inserido.";

  titulo = titulo.trim();

  // Validar se tá no tipo correto
  if (typeof titulo !== "string")
    return "Só é permitido caracteres de texto no titulo.";

  // validar tamanho
  if (titulo.length < 3 || titulo.length > 100)
    return "O titulo deve ter entre 3-100 caracteres";

  return null;
}
