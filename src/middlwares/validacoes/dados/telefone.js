export function validarTelefone(telefone) {
    // Verifica se o telefone foi informado
    if (telefone === undefined || telefone === null || telefone === "") {
      return "Telefone é obrigatório";
    }

    // Verifica se o telefone é um texto
    if (typeof telefone !== "string") {
        return "Telefone deve ser um texto";
    }

    telefone = telefone.trim();

    // Remove espaços, parênteses, traços e outros caracteres
    telefone = telefone.replace(/\D/g, "");

    // Telefone só pode ser números
    if (!/^\d{10,11}$/.test(telefone)) {
      return "Telefone precisa ser só número";
    }

    // Telefone precisa ter 10 ou 11 dígitos
    if (telefone.length !== 10 && telefone.length !== 11) {
        return "Telefone precisa ter 10 ou 11 dígitos";
    }

    return null;
};