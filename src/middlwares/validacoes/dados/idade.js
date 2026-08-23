export function validarIdade(idade) {
  if (!idade) return "Coloque sua idade.";

  if (!Number.isInteger(idade)) return "Só é permitido números inteiros.";

  return null;
}
