export function validarSenha(senha) {

  // Verifica se foi informada
  if (!senha) {
    return "Senha é obrigatória.";
  }

  // Verifica se é texto ANTES de qualquer manipulação de string
  if (typeof senha !== "string") {
    return "Senha deve ser um texto.";
  }

  senha = senha.trim();

  if (!senha) {
    return "Senha é obrigatória.";
  }

  // Verifica tamanho
  if (senha.length < 8 || senha.length > 30) {
    return "A senha deve ter entre 8 e 30 caracteres.";
  }

  return null;
}