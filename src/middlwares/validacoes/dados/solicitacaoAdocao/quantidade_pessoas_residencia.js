export function validarQuantidadePessoasResidencia(quantidade) {

  if (quantidade === null || quantidade === undefined || quantidade === "") {
    return "Preencha o campo de quantidade de pessoas na residência.";
  }

  let valorNumerico = quantidade;

  // Se o valor vier como string (comum em formulários web e requisições HTTP), convertemos para número
  if (typeof quantidade === "string") {
    if (quantidade.trim() === "") {
      return "Preencha o campo de quantidade de pessoas na residência.";
    }
    valorNumerico = Number(quantidade);
  }

  // Verifica se o resultado é um número válido e se é um número inteiro (INT)
  if (typeof valorNumerico !== "number" || isNaN(valorNumerico) || !Number.isInteger(valorNumerico)) {
    return "A quantidade de pessoas na residência deve ser um número inteiro.";
  }

  // Define uma faixa lógica aceitável para uma residência (ex: de 1 a 50 pessoas)
  if (valorNumerico < 1 || valorNumerico > 50) {
    return "A quantidade de pessoas na residência deve ser entre 1 e 50.";
  }

  return null;
}