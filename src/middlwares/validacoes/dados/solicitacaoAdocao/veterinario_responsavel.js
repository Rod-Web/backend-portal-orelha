export function validarVeterinarioResponsavel(veterinario) {

  // Como o campo pode ser NULL e é opcional, se não for informado, a validação passa sem erros.
  if (veterinario === null || veterinario === undefined || veterinario === "") {
    return null;
  }

  if (typeof veterinario !== "string") {
    return "O veterinário responsável deve ser uma string.";
  }

  veterinario = veterinario.trim();

  // Se após o trim a string ficar vazia, consideramos como opcional válido
  if (veterinario === "") {
    return null;
  }

  // Respeita o limite exato do banco de dados (VARCHAR(100)) e exige um mínimo de 2 caracteres
  if (veterinario.length < 2 || veterinario.length > 100) {
    return "O nome do veterinário responsável deve ter entre 2 e 100 caracteres.";
  }

  // Permite letras (com acentos), espaços e pontos (úteis para abreviações comuns como "Dr." ou "Dra.")
  const regexVeterinario = /^[A-Za-zÀ-ÿ\s\.]+$/;
  if (!regexVeterinario.test(veterinario)) {
    return "O nome do veterinário responsável contém caracteres inválidos.";
  }

  return null;
}