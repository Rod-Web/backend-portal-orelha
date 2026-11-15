export function validarCriancaConvivio(criancaConvivio) {

  if (!criancaConvivio || criancaConvivio === undefined || typeof criancaConvivio !== "string" || !criancaConvivio.trim()) {
    return "Preencha o campo de convívio com crianças.";
  }

  criancaConvivio = criancaConvivio.trim();

  // Como o tipo no banco é TEXT, definimos um limite razoável para a aplicação (ex: entre 3 e 500 caracteres)
  if (criancaConvivio.length < 3 || criancaConvivio.length > 500) {
    return "O campo de convívio com crianças deve ter entre 3 e 500 caracteres.";
  }

  return null;
}