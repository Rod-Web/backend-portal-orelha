export function validarFamiliaCienteConcorda(cienteConcorda) {

  if (cienteConcorda === null || cienteConcorda === undefined || cienteConcorda === "") {
    return "Preencha o campo informando se a família está ciente e concorda.";
  }

  let valor = cienteConcorda;

  // Converte caso o valor venha como string de formulários web ou query params
  if (typeof cienteConcorda === "string") {
    const valorStr = cienteConcorda.trim().toLowerCase();
    if (valorStr === "true" || valorStr === "1") {
      valor = true;
    } else if (valorStr === "false" || valorStr === "0") {
      valor = false;
    }
  }

  // Garante que o tipo final seja estritamente booleano (true ou false)
  if (typeof valor !== "boolean") {
    return "O campo família ciente e concorda deve ser verdadeiro ou falso.";
  }

  // Observação: Se a regra de negócio exigir que a família obrigatoriamente concorde para prosseguir, descomente as linhas abaixo:
  // if (valor !== true) {
  //   return "A família precisa estar ciente e concordar para continuar.";
  // }

  return null;
}