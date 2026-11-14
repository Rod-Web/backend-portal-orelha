export function validarEspecie(especie) {
  

  if (!especie || especie === undefined) {
    return "É obrigatório inserir a espécie do pet";
  }

  if (typeof especie !== "string") {
    return "A espécie do pet deve ser um texto";
  }

  if (especie.trim() === "") return "É obrigatório inserir a espécie do pet";

  if (especie !== "cachorro" && especie !== "gato") {
    return "A espécie do pet deve ser 'cachorro' ou 'gato'";
  }

  return null;
}
