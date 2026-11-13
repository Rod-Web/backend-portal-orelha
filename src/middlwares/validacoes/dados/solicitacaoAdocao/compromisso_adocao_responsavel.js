export function validarCompromissoAdocaoResponsavel(compromisso) {

  if (compromisso === null || compromisso === undefined || compromisso === "") {
    return "Preencha o campo de compromisso de adoção responsável.";
  }

  let valor = compromisso;

  // Converte caso o valor venha como string de formulários web ou query params
  if (typeof compromisso === "string") {
    const valorStr = compromisso.trim().toLowerCase();
    if (valorStr === "true" || valorStr === "1") {
      valor = true;
    } else if (valorStr === "false" || valorStr === "0") {
      valor = false;
    }
  }

  // Garante que o tipo final seja estritamente booleano (true ou false)
  if (typeof valor !== "boolean") {
    return "O campo de compromisso de adoção responsável deve ser verdadeiro ou falso.";
  }

  // Como é um termo de compromisso, a regra de negócio exige que seja obrigatoriamente true para avançar
  if (valor !== true) {
    return "Você deve aceitar o compromisso de adoção responsável para prosseguir.";
  }

  return null;
}