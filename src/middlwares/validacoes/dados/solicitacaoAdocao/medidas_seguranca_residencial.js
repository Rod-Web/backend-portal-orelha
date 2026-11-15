export function validarMedidasSegurancaResidencial(medidas) {

  if (!medidas) {
    return "Preencha o campo de medidas de segurança residencial.";
  }

  if (typeof medidas !== "string") {
    return "As medidas de segurança residencial devem ser uma string.";
  }

  medidas = medidas.trim();

  if (!medidas) {
    return "Preencha o campo de medidas de segurança residencial.";
  }

  // Alinhado com a mensagem e o comentário: entre 3 e 1000 caracteres
  if (medidas.length < 3 || medidas.length > 1000) {
    return "As medidas de segurança residencial devem ter entre 10 e 1000 caracteres.";
  }

  return null;
}