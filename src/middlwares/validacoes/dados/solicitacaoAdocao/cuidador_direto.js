export function validarCuidadorDireto(cuidador) {

  if (!cuidador || cuidador === undefined || !cuidador.trim()) {
    return "Preencha o campo do cuidador direto.";
  }

  cuidador = cuidador.trim();

  if (typeof cuidador !== "string") {
    return "O cuidador direto deve ser uma string.";
  }

  // Respeita o limite exato do banco de dados (VARCHAR(100)) e exige um mínimo de 2 caracteres
  if (cuidador.length < 2 || cuidador.length > 100) {
    return "O nome do cuidador direto deve ter entre 2 e 100 caracteres.";
  }

  // Permite letras (com acentos), espaços, pontos e hífens comuns em nomes de pessoas
  const regexCuidador = /^[A-Za-zÀ-ÿ\s\.\-]+$/;
  if (!regexCuidador.test(cuidador)) {
    return "O nome do cuidador direto contém caracteres inválidos.";
  }

  return null;
}