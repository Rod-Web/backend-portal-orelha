export function validarCPF(cpf) {
    // Remove pontos, traços e qualquer outro caractere
    cpf = cpf.replace(/\D/g, "");

    // CPF precisa ter exatamente 11 dígitos
    if (cpf.length !== 11) {
        return "CPF precisa ter exatamente 11 dígitos";
    }

    // Rejeita CPFs com todos os dígitos iguais
    if (/^(\d)\1{10}$/.test(cpf)) {
        return "CPF não pode ter todos os dígitos iguais";
    }

    // Primeiro dígito verificador
    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += Number(cpf[i]) * (10 - i);
    }

    let resto = soma % 11;
    let digito1 = resto < 2 ? 0 : 11 - resto;

    // Compara com o primeiro dígito informado
    if (digito1 !== Number(cpf[9])) {
        return "O CPF informado é inválido.";
    }

    // Segundo dígito verificador
    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += Number(cpf[i]) * (11 - i);
    }

    resto = soma % 11;
    let digito2 = resto < 2 ? 0 : 11 - resto;

    // Compara com o segundo dígito informado
    if (digito2 !== Number(cpf[10])) {
        return "O CPF informado é inválido.";
    }

    return null;
};
