export function validarRaca(raca) {
  if (raca == null || raca.trim() === "") {
    return "É obrigatório inserir a raça";
  }

  if (typeof raca !== "string") {
    return "A raça deve ser um texto";
  }

  if (raca.length < 2) {
    return "A raça deve possuir no mínimo 2 caracteres";
  }

  if (raca.length > 100) {
    return "A raça deve possuir no máximo 100 caracteres";
  }

  return null;
}
