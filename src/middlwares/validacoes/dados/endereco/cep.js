export function validarCEP(cep) {

  // Verifica se foi informado (falsy values)
  if (!cep) {
    return "CEP é obrigatório.";
  }

  // Verifica se é texto antes de qualquer manipulação de string
  if (typeof cep !== "string") {
    return "CEP deve ser um texto.";
  }

  cep = cep.trim();

  if (!cep) {
    return "CEP é obrigatório.";
  }

  // Verifica se possui apenas números e hífen
  if (!/^[\d-]+$/.test(cep)) {
    return "CEP só pode conter números e hífen.";
  }

  // CEP precisa ter exatamente 8 dígitos depois de remover o hífen
  if (cep.replace(/\D/g, "").length !== 8) {
    return "CEP precisa ter exatamente 8 dígitos.";
  }

  return null;
}