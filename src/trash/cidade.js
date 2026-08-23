export function validarCidade(cidade) {
    // Verifica se a cidade foi informada
    if (!cidade || cidade.trim() === "") {
        return "Cidade é obrigatória";
    }

    // Verifica se a cidade é um texto
    if (typeof cidade !== "string") {
        return "Cidade deve ser um texto";
    }

    // Remove espaços desnecessários no início e no final
    cidade = cidade.trim();

    // Cidade precisa ter pelo menos 2 caracteres
    if (cidade.length < 2) {
        return "Cidade precisa ter pelo menos 2 caracteres";
    }

    // Cidade não pode ter mais de 100 caracteres
    if (cidade.length > 100) {
        return "Cidade não pode ter mais de 100 caracteres";
    }

    return null;
};