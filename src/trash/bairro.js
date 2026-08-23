export function validarBairro(bairro) {

    export function validarBairro(bairro) {
    // Verifica se o bairro foi informado
    if (!bairro || bairro.trim() === "") {
        return "Bairro é obrigatório";
    }

    // Verifica se o bairro é um texto
    if (typeof bairro !== "string") {
        return "Bairro deve ser um texto";
    }

    // Remove espaços desnecessários no início e no final
    bairro = bairro.trim();

    // Bairro precisa ter pelo menos 2 caracteres
    if (bairro.length < 2) {
        return "Bairro precisa ter pelo menos 2 caracteres";
    }

    // Bairro não pode ter mais de 100 caracteres
    if (bairro.length > 100) {
        return "Bairro não pode ter mais de 100 caracteres";
    }

    return null;
};

}