export function normalizarDadosUsuario(
  cpf,
  nome,
  idade,
  email,
  senha,
  telefone,
) {
  //NORMALIZAÇÃO
  cpf = cpf.trim().replace(/\D/g, "");

  nome = nome
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase() // Tudo minusculo
    .replace(/\b\w/g, (letra) => letra.toUpperCase()); // Primeira letra de cada palavra maiuscúla

  email = email.trim();

  telefone = telefone.trim().replace(/\D/g, "");

  return {
    cpf,
    nome,
    idade,
    email,
    senha,
    telefone
  };
}
