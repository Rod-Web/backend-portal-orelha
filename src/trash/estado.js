export function validarEstado(estado) {
    // Verifica se o estado foi informado
    if (!estado || estado.trim() === "") {
        return "Estado é obrigatório";
    }

    // Verifica se o estado é um texto
    if (typeof estado !== "string") {
        return "Estado deve ser um texto";
    }

    // Remove espaços desnecessários no início e no final
    estado = estado.trim();

    // Estado precisa ter pelo menos 4 caracteres
    if (estado.length < 4) {
        return "Estado precisa ter pelo menos 4 caracteres";
    }

    // Estado não pode ter mais de 30 caracteres
    if (estado.length > 30) {
        return "Estado não pode ter mais de 30 caracteres";
    }

    return null;
};