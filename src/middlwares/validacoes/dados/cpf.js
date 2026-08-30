export function validarCPF(cpf) {

    if(!cpf) return "O CPF não foi informado"

    if (typeof cpf !== "string") return "O CPF precisa ser uma string.";

    return null;
};
