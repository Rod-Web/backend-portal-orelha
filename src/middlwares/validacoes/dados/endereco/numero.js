export function validarNumero(numero) {
    // Verifica se o número foi informado
    if (!numero || numero.trim() === "") {
        return "Número é obrigatório";
    }

    // Verifica se o número é um texto
    if (typeof numero !== "string") {
        return "Número deve ser um texto";
    }

    // Remove espaços desnecessários no início e no final
    numero = numero.trim();

    // Número precisa ter pelo menos 1 caractere
    if (numero.length < 1) {
        return "Número precisa ter pelo menos 1 caractere";
    }

    // Número não pode ter mais de 10 caracteres
    if (numero.length > 10) {
        return "Número não pode ter mais de 10 caracteres";
    }

    return null;
};