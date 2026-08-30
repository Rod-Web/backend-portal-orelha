export function validarEmail(email) {
  if (!email) return "Preencha o campo do email.";

  if (typeof email !== "string") return "O email deve ser uma string.";

  email = email.trim();

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) return "Email com formato inválido.";

  if (email.length < 10 || email.length > 200) {
    return "Nome deve ter entre 10 e 200 caracteres";
  }

  return null;
}
