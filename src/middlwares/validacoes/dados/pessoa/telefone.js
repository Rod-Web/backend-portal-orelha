export function validarTelefone(telefone) {

  // Verifica se o telefone foi informado
  if (!telefone) {
    return "Telefone é obrigatório.";
  }

  // Verifica se o telefone é um texto ANTES de qualquer manipulação de string
  if (typeof telefone !== "string") {
    return "Telefone deve ser um texto.";
  }

  telefone = telefone.trim();

  if (!telefone) {
    return "Telefone é obrigatório.";
  }

  // Só permite números, hífen, espaços e parênteses
  if (!/^[\d\s()-]+$/.test(telefone)) {
    return "Telefone contém caracteres inválidos.";
  }

  // Remove tudo que não for número
  const apenasNumeros = telefone.replace(/\D/g, "");

  // Telefone precisa ter 10 ou 11 dígitos
  if (apenasNumeros.length !== 10 && apenasNumeros.length !== 11) {
    return "Telefone precisa ter 10 ou 11 dígitos.";
  }
  
  return null;
};