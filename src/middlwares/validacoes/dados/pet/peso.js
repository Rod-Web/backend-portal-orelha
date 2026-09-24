export function validarPeso(peso) {
  if (peso == null || peso === "") {
    return "É obrigatório inserir o peso";
  }

  if (typeof peso !== "number" && isNaN(Number(peso))) {
    return "O peso deve ser um número";
  }

  const pesoNumero = Number(peso);

  if (!Number.isFinite(pesoNumero)) {
    return "O peso deve ser um número válido";
  }

  if (pesoNumero <= 0) {
    return "O peso deve ser maior que zero";
  }

  if (pesoNumero > 150) {
    return "O peso não pode ser maior que 150 kg";
  }

  return null;
}
