export function validarDisponibilidadeDuranteJornada(disponibilidade) {

  if (disponibilidade === null || disponibilidade === undefined || disponibilidade === "") {
    return "Preencha o campo de disponibilidade durante a jornada.";
  }

  let valor = disponibilidade;

  // Converte caso o valor venha como string de formulários web ou query params
  if (typeof disponibilidade === "string") {
    const valorStr = disponibilidade.trim().toLowerCase();
    if (valorStr === "true" || valorStr === "1") {
      valor = true;
    } else if (valorStr === "false" || valorStr === "0") {
      valor = false;
    }
  }

  // Garante que o tipo final seja estritamente booleano (true ou false)
  if (typeof valor !== "boolean") {
    return "O campo de disponibilidade durante a jornada deve ser verdadeiro ou falso.";
  }

  return null;
}