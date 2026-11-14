export function validarPeriodosDisponiveis(periodos) {

  if (!periodos || periodos === undefined || typeof periodos !== "string" || !periodos.trim()) {
    return "Preencha o campo de períodos disponíveis.";
  }

  periodos = periodos.trim();

  // Respeita o limite exato do banco de dados (VARCHAR(50)) e exige um mínimo de 3 caracteres
  if (periodos.length < 3 || periodos.length > 50) {
    return "Os períodos disponíveis devem ter entre 3 e 50 caracteres.";
  }

  // Permite letras (com acentos), números, espaços e pontuações comuns para informar turnos ou horários (ex: "Manhã e Tarde" ou "08:00 às 18:00")
  const regexPeriodos = /^[A-Za-zÀ-ÿ0-9\s,\-\/:]+$/;
  if (!regexPeriodos.test(periodos)) {
    return "Os períodos disponíveis contêm caracteres inválidos.";
  }

  return null;
}