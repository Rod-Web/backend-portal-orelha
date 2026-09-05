export function validarSenha(senha) {

  senha = senha.trim()

  // Verifica se foi informada
  if (!senha) return "Senha é obrigatória";

  // Verifica se é texto
  if (typeof senha !== "string") return "Senha deve ser um texto";

  // Verifica tamanho
  if (senha.length < 8 || senha.length > 30) return "A senha deve ter entre 8 e 30 caracteres";

  return null;
}
