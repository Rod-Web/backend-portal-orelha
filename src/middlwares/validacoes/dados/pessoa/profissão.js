export function validarProfissao(profissao) {

  if (!profissao) {
    return "Preencha o campo da profissão.";
  }

  // Valida se é string ANTES de qualquer manipulação de string
  if (typeof profissao !== "string") {
    return "A profissão deve ser uma string.";
  }

  profissao = profissao.trim();

  if (!profissao) {
    return "Preencha o campo da profissão.";
  }

  // Respeita o limite do banco de dados (VARCHAR(100)) e define um mínimo razoável (3 caracteres)
  if (profissao.length < 3 || profissao.length > 100) {
    return "A profissão deve ter entre 2 e 100 caracteres.";
  }

  return null;
}