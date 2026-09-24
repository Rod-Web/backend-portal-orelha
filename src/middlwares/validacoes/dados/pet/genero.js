export function validarGenero(genero) {
  if (genero == null || genero === "") {
    return "É obrigatório inserir o gênero";
  }

  if (typeof genero !== "string") {
    return "O gênero deve ser um texto";
  }

  if (genero !== "femea" && genero !== "macho") {
    return "O gênero deve ser 'femea' ou 'macho'";
  }

  return null;
}
