export function validarTipoPet(tipo_pet) {
  if (tipo_pet == null || tipo_pet === "") {
    return "É obrigatório inserir o tipo do pet";
  }

  if (typeof tipo_pet !== "string") {
    return "O tipo do pet deve ser um texto";
  }

  if (tipo_pet !== "cachorro" && tipo_pet !== "gato") {
    return "O tipo do pet deve ser 'cachorro' ou 'gato'";
  }

  return null;
}
