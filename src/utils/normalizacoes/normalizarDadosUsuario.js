export function normalizarDadosUsuario(
  cpf,
  nome,
  email,
  senha,
) {

  //NORMALIZAÇÃO
  cpf = cpf.trim().replace(/\D/g, "");

  nome = nome
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase() // Tudo minusculo
    .replace(/\b\w/g, (letra) => letra.toUpperCase()); // Primeira letra de cada palavra maiuscúla

  email = email.trim();


  return {
    cpf,
    nome,
    email,
    senha,
  };
}
