export function validarCEP(cep) {
  // Verifica se foi informado
  if (cep === undefined || cep === null || cep === "") {
    return "CEP é obrigatório";
  }

  // Verifica se é texto
  if (typeof cep !== "string") {
    return "CEP deve ser um texto";
  }

  // Remove espaços, pontos e traços
  cep = cep.replace(/\D/g, "");

  // CEP precisa ter exatamente 8 dígitos
  if (cep.length !== 8) {
    return "CEP precisa ter exatamente 8 dígitos";
  }

  return null;
}
