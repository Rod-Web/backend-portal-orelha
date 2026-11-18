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

  return null;
}