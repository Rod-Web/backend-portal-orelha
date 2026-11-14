export function validarCienteAtividadesResponsabilidades(ciente) {

  if (ciente === null || ciente === undefined || ciente === "") {
    return "Preencha o campo informando se está ciente das atividades e responsabilidades.";
  }

  let valor = ciente;

  // Converte caso o valor venha como string de formulários web ou query params
  if (typeof ciente === "string") {
    const valorStr = ciente.trim().toLowerCase();
    if (valorStr === "true" || valorStr === "1") {
      valor = true;
    } else if (valorStr === "false" || valorStr === "0") {
      valor = false;
    }
  }

  // Garante que o tipo final seja estritamente booleano (true ou false)
  if (typeof valor !== "boolean") {
    return "O campo de ciência das atividades e responsabilidades deve ser verdadeiro ou falso.";
  }

  // Como se trata de ciência de responsabilidades, exige que seja obrigatoriamente true para prosseguir
  if (valor !== true) {
    return "Você precisa estar ciente das atividades e responsabilidades para prosseguir.";
  }

  return null;
}