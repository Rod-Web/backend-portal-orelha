export function validarEndereco(endereco) {

  if (!endereco || endereco === undefined || !endereco.trim()) {
    return "Preencha o campo do endereço.";
  }

  endereco = endereco.trim();

  if (typeof endereco !== "string") {
    return "O endereço deve ser uma string.";
  }

  if (endereco.length < 10 || endereco.length > 250) {
    return "O endereço completo deve ter entre 10 e 250 caracteres.";
  }

  // Verifica se o endereço possui separação por vírgulas (mínimo esperado: logradouro, número, cidade/UF)
  const partes = endereco.split(",");
  if (partes.length < 3) {
    return "O formato do endereço está incompleto. Use o formato: Rua, Número, Bairro, Cidade/UF.";
  }

  // Valida se a última parte contém a cidade e a sigla do estado em maiúsculo (ex: Poá/SP)
  const regexCidadeUF = /\/[A-Z]{2}$/;
  if (!regexCidadeUF.test(endereco.trim())) {
    return "O endereço deve terminar com a cidade e a sigla do estado válida (ex: Poá/SP).";
  }

  return null;
}