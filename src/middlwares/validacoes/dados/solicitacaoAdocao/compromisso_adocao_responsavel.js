export function validarCompromissoAdocaoResponsavel(compromisso) {

  if (compromisso === null || compromisso === undefined || compromisso === "") {
    return "Preencha o campo de compromisso de adoção responsável.";
  }

  // Garante que o tipo final seja estritamente booleano (true ou false)
  if (typeof compromisso !== "boolean") {
    return "O campo de compromisso de adoção responsável deve ser verdadeiro ou falso.";
  }

  // Como é um termo de compromisso, a regra de negócio exige que seja obrigatoriamente true para avançar
  if (compromisso !== true) {
    return "Você deve aceitar o compromisso de adoção responsável para prosseguir.";
  }

  return null;
}