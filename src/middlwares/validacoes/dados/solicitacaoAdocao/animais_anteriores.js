export function validarAnimaisAnteriores(animaisAnteriores) {

  if (animaisAnteriores === null || animaisAnteriores === undefined || animaisAnteriores === "") {
    return "Preencha o campo informando se já teve animais anteriormente.";
  }

  let valor = animaisAnteriores;

  // Converte caso o valor venha como string de formulários web ou query params
  if (typeof animaisAnteriores === "string") {
    const valorStr = animaisAnteriores.trim().toLowerCase();
    if (valorStr === "true" || valorStr === "1") {
      valor = true;
    } else if (valorStr === "false" || valorStr === "0") {
      valor = false;
    }
  }

  // Garante que o tipo final seja estritamente booleano (true ou false)
  if (typeof valor !== "boolean") {
    return "O campo de animais anteriores deve ser verdadeiro ou falso.";
  }

  return null;
}