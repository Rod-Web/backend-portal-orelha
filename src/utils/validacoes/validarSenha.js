export function validarSenha(senha) {
  // Pelo menos uma letra maiúscula
  if (!/[A-Z]/.test(senha)) {
    return "A senha deve conter pelo menos uma letra maiúscula";
  }

  // Pelo menos uma letra minúscula
  if (!/[a-z]/.test(senha)) {
    return "A senha deve conter pelo menos uma letra minúscula";
  }

  // Pelo menos um número
  if (!/[0-9]/.test(senha)) {
    return "A senha deve conter pelo menos um número";
  }

  // Pelo menos um caractere especial
  if (!/[^A-Za-z0-9]/.test(senha)) {
    return "A senha deve conter pelo menos um caractere especial";
  }

  console.log("senha validada")
  return null
};