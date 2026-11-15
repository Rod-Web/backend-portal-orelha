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

  return null;
}