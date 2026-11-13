export function validarComodosAcessoAnimal(comodos) {

  if (!comodos || comodos === undefined || typeof comodos !== "string" || !comodos.trim()) {
    return "Preencha o campo de cômodos com acesso do animal.";
  }

  comodos = comodos.trim();

  // Como o tipo no banco é TEXT, definimos um limite razoável (ex: entre 3 e 500 caracteres, permitindo respostas curtas como "Sala" ou listas detalhadas)
  if (comodos.length < 4 || comodos.length > 500) {
    return "Os cômodos com acesso do animal devem ter entre 3 e 500 caracteres.";
  }

  return null;
}