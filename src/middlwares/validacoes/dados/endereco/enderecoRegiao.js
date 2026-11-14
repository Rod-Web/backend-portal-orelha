export function validarEnderecoRegiao(endereco) {

  // 1. Verifica se foi informado
  if (!endereco) {
    return "Preencha o campo do endereço residencial.";
  }

  // 2. Garante que é string ANTES de qualquer manipulação (evita TypeError no .trim())
  if (typeof endereco !== "string") {
    return "O endereço residencial deve ser uma string.";
  }

  // 3. Sanitiza espaços nas extremidades
  endereco = endereco.trim();

  if (!endereco) {
    return "Preencha o campo do endereço residencial.";
  }

  // 4. Valida tamanho (TEXT no banco, limite seguro de 5 a 250 caracteres)
  if (endereco.length < 5 || endereco.length > 250) {
    return "O endereço residencial deve ter entre 5 e 250 caracteres.";
  }

  // 5. Valida caracteres permitidos (letras com acentos, números, espaços, vírgulas, hífens e pontos)
  const regexCaracteres = /^[A-Za-zÀ-ÿ0-9\s,\.\-]+$/;
  if (!regexCaracteres.test(endereco)) {
    return "O endereço residencial contém caracteres inválidos.";
  }

  // 6. Valida o formato "Cidade, Bairro" (exige separação por vírgula com ambos preenchidos)
  const partes = endereco.split(",");
  if (partes.length !== 2 || !partes[0].trim() || !partes[1].trim()) {
    return "O endereço residencial deve seguir o formato: Cidade, Bairro (ex: São Paulo, Bela Vista).";
  }

  return null;
}