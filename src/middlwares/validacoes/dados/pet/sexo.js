export function validarSexo(sexo) {
  if (!sexo || sexo == undefined || sexo.trim() === "") {
    return "É obrigatório inserir o sexo";
  }

  if (typeof sexo !== "string") {
    return "O sexo deve ser um texto";
  }

  if (sexo !== "femea" && sexo !== "macho") {
    return "O sexo deve ser 'femea' ou 'macho'";
  }

  return null;
}
