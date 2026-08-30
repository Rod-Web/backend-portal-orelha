export function normalizarCPF(cpf) {
// RN01 — Normalização
    cpf = cpf.replace(/\D/g, "");

// RN02 — Quantidade de dígitos
    if (cpf.length !== 11) return "CPF precisa ter exatamente 11 dígitos";

// RN03 — CPFs com dígitos repetidos

    // Rejeita CPFs com todos os dígitos iguais
    if (/^(\d)\1{10}$/.test(cpf)) {
        return "CPF não pode ter todos os dígitos iguais";
    }


// RN04 — Primeiro dígito verificador

    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += Number(cpf[i]) * (10 - i);
    }

    let resto = soma % 11;
    let digito1 = resto < 2 ? 0 : 11 - resto;

    if (digito1 !== Number(cpf[9])) {
        return "O CPF informado é inválido.";
    }

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

    return null
}