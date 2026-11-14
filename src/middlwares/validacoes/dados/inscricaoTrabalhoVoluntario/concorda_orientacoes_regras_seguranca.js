export function validarConcordaOrientacoesRegrasSeguranca(concorda) {

  if (concorda === null || concorda === undefined || concorda === "") {
    return "Preencha o campo informando se concorda com as orientações e regras de segurança.";
  }

  let valor = concorda;

  // Converte caso o valor venha como string de formulários web ou query params
  if (typeof concorda === "string") {
    const valorStr = concorda.trim().toLowerCase();
    if (valorStr === "true" || valorStr === "1") {
      valor = true;
    } else if (valorStr === "false" || valorStr === "0") {
      valor = false;
    }
  }

  // Garante que o tipo final seja estritamente booleano (true ou false)
  if (typeof valor !== "boolean") {
    return "O campo de concordância com as orientações e regras de segurança deve ser verdadeiro ou falso.";
  }

  // Como se trata de concordância com regras de segurança, exige que seja obrigatoriamente true para prosseguir
  if (valor !== true) {
    return "Você precisa concordar com as orientações e regras de segurança para prosseguir.";
  }

  return null;
}