export function validarStatus(status) {
    if (status == null || status == undefined || status === "") {
        return "É obrigatório inserir um status";
    }

    if (typeof status !== "string") {
        return "O status deve ser uma string";
    }
    
    const statusNormalizado = status.trim().toLowerCase();
    const statusValidos = ["disponivel", "adotado", "em_processo"];

    if (!statusValidos.includes(statusNormalizado)) {
        return "O status deve ser 'DISPONIVEL', 'ADOTADO' ou 'EM_PROCESSO'";
    }

    return null;
}