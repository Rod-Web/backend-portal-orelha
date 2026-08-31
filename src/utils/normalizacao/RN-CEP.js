export function normalizarCEP(cep) {
  // Remove espaços, pontos e traços
  cep = cep.replace(/\D/g, "");
  return cep
}