export function validarRua(rua) {
    // Verifica se a rua foi informada
    if (!rua || rua.trim() === "") {
        return "Rua é obrigatória";
    }

    // Verifica se a rua é um texto
    if (typeof rua !== "string") {
        return "Rua deve ser um texto";
    }

    // Remove espaços desnecessários no início e no final
    rua = rua.trim();

    // Rua precisa ter pelo menos 2 caracteres
    if (rua.length < 2) {
        return "Rua precisa ter pelo menos 2 caracteres";
    }

    // Rua não pode ter mais de 100 caracteres
    if (rua.length > 100) {
        return "Rua não pode ter mais de 100 caracteres";
    }

    return null;
};