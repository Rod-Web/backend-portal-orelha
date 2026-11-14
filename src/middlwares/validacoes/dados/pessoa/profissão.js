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

  // Respeita o limite do banco de dados (VARCHAR(100)) e define um mínimo razoável (2 caracteres)
  if (profissao.length < 2 || profissao.length > 100) {
    return "A profissão deve ter entre 2 e 100 caracteres.";
  }

  // Permite letras (com acentos), espaços e hífens comuns em nomes de cargos/profissões (ex: Desenvolvedor Full-Stack)
  const regexProfissao = /^[A-Za-zÀ-ÿ\s\-]+$/;
  if (!regexProfissao.test(profissao)) {
    return "A profissão contém caracteres inválidos.";
  }

  return null;
}