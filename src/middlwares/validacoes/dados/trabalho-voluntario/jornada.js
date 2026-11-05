export function validarJornada(jornada) {
  // Validar se existe
  if (!jornada || jornada == undefined || !jornada.trim()) return "A jornada não foi inserido.";

  jornada = jornada.trim();

  // Validar se tá no tipo correto
  if (typeof jornada !== "string")
    return "Só é permitido caracteres de texto na jornada.";

  // validar tamanho
  if (jornada.length < 3 || jornada.length > 100)
    return "A jornada deve ter entre 3-100 caracteres";

  return null;
}
