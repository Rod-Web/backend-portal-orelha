export function validarDiasDisponiveis(dias) {

  if (!dias || dias === undefined || !dias.trim()) {
    return "Preencha o campo de dias disponíveis.";
  }

  dias = dias.trim();

  if (typeof dias !== "string") {
    return "Os dias disponíveis devem ser uma string.";
  }

  // Respeita o limite exato do banco de dados (VARCHAR(100)) e exige um mínimo de 3 caracteres
  if (dias.length < 3 || dias.length > 100) {
    return "Os dias disponíveis devem ter entre 3 e 100 caracteres.";
  }

  // Permite letras (com acentos), números, espaços, vírgulas, hífens e barras (comuns ao listar dias, ex: "Segunda a Sexta" ou "Seg, Ter, Qua")
  const regexDias = /^[A-Za-zÀ-ÿ0-9\s,\-\/]+$/;
  if (!regexDias.test(dias)) {
    return "Os dias disponíveis contêm caracteres inválidos.";
  }

  return null;
}