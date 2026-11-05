export function validarDataInicio(data) {
  // Validar se existe
  if (data === null || data === undefined || data === "")
    return "A data de início não foi informada.";

  // Validar tipo
  if (typeof data !== "string") return "A data de início deve ser um texto.";

  data = data.trim();

  // Validar se está vazia
  if (!data) return "A data de início não foi informada.";

  // Validar formato YYYY-MM-DD
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data))
    return "A data deve estar no formato YYYY-MM-DD.";

  // Separar ano, mês e dia
  const [ano, mes, dia] = data.split("-").map(Number);

  // Validar se a data realmente existe
  const dataValida = new Date(Date.UTC(ano, mes - 1, dia));

  if (
    dataValida.getUTCFullYear() !== ano ||
    dataValida.getUTCMonth() !== mes - 1 ||
    dataValida.getUTCDate() !== dia
  ) {
    return "A data de início informada é inválida.";
  }

  return null;
}
