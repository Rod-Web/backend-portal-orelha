export function validarNumero(numero) {
  // Verifica se foi informado
  if (numero === undefined || numero === null || numero === "") {
    return "Número é obrigatório";
  }

  // Verifica se é texto
  if (typeof numero !== "string") {
    return "Número deve ser um texto";
  }

  // Remove espaços no início e no final
  numero = numero.trim();

  // Verifica se ficou vazio
  if (numero === "") {
    return "Número é obrigatório";
  }

  // Máximo de 10 caracteres
  if (numero.length > 10) {
    return "Número não pode ter mais de 10 caracteres";
  }

  return null;
}
