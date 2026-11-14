export function validarEmail(email) {

  if (!email) {
    return "Preencha o campo do email.";
  }

  // Valida se é string ANTES de qualquer manipulação de string
  if (typeof email !== "string") {
    return "O email deve ser uma string.";
  }

  email = email.trim();

  if (!email) {
    return "Preencha o campo do email.";
  }

  if (email.length < 10 || email.length > 200) {
    return "Email deve ter entre 10 e 200 caracteres.";
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    return "Email com formato inválido.";
  }

  return null;
}