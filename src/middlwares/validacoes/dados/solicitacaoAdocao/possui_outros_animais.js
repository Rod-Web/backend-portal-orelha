export function validarPossuiOutrosAnimais(possuiOutrosAnimais) {

  if (possuiOutrosAnimais === null || possuiOutrosAnimais === undefined || possuiOutrosAnimais === "") {
    return "Preencha o campo se possui outros animais.";
  }

  let valor = possuiOutrosAnimais;

  // Se o valor vier como string (ex: enviado por formulário web ou API), convertemos para boolean
  if (typeof possuiOutrosAnimais === "string") {
    const valorStr = possuiOutrosAnimais.trim().toLowerCase();
    if (valorStr === "true" || valorStr === "1") {
      valor = true;
    } else if (valorStr === "false" || valorStr === "0") {
      valor = false;
    }
  }

  // Verifica se o resultado final é estritamente um booleano (true ou false)
  if (typeof valor !== "boolean") {
    return "O campo possui outros animais deve ser verdadeiro ou falso.";
  }

  return null;
}