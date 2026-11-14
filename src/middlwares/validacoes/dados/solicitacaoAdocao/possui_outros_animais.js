export function validarPossuiOutrosAnimais(possuiOutrosAnimais) {

  if (possuiOutrosAnimais === null || possuiOutrosAnimais === undefined || possuiOutrosAnimais === "") {
    return "Preencha o campo se possui outros animais.";
  }

  // Verifica se o resultado final é estritamente um booleano (true ou false)
  if (typeof possuiOutrosAnimais !== "boolean") {
    return "O campo 'possui outros animais' deve ser verdadeiro ou falso.";
  }

  return null;
}