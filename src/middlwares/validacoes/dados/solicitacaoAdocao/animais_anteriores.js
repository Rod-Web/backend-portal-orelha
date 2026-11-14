export function validarAnimaisAnteriores(animaisAnteriores) {

  if (animaisAnteriores === null || animaisAnteriores === undefined || animaisAnteriores === "") {
    return "Preencha o campo informando se já teve animais anteriormente.";
  }

  // Garante que o tipo final seja estritamente booleano (true ou false)
  if (typeof animaisAnteriores !== "boolean") {
    return "O campo de animais anteriores deve ser verdadeiro ou falso.";
  }

  return null;
}