export function validarFamiliaCienteConcorda(cienteConcorda) {

  if (cienteConcorda === null || cienteConcorda === undefined || cienteConcorda === "") {
    return "Preencha o campo informando se a família está ciente e concorda.";
  }

  // Garante que o tipo final seja estritamente booleano (true ou false)
  if (typeof cienteConcorda !== "boolean") {
    return "O campo família ciente e concorda deve ser verdadeiro ou falso.";
  }

  // Observação: Se a regra de negócio exigir que a família obrigatoriamente concorde para prosseguir, descomente as linhas abaixo:
  if (cienteConcorda !== true) {
    return "A família precisa estar ciente e concordar para continuar.";
  }

  return null;
}