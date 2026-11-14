export function validarQuantidadePessoasResidencia(quantidade) {

  if (quantidade === null || quantidade === undefined || quantidade === "") {
    return "Preencha o campo de quantidade de pessoas na residência.";
  }

  // Verifica se o resultado é um número válido e se é um número inteiro (INT)
  if (typeof quantidade !== "number" || isNaN(quantidade) || !Number.isInteger(quantidade)) {
    return "A quantidade de pessoas na residência deve ser um número inteiro.";
  }

  // Define uma faixa lógica aceitável para uma residência (ex: de 1 a 50 pessoas)
  if (quantidade < 1 || quantidade > 50) {
    return "A quantidade de pessoas na residência deve ser entre 1 e 50.";
  }

  return null;
}