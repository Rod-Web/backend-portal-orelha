
export function validarIdadeNumerica(idadeNumerica) {
    if (idadeNumerica == null || idadeNumerica === "") {
        return "É obrigatório inserir a idade";
    }

    const idadeNumero = Number(idadeNumerica);

    if (!Number.isInteger(idadeNumero)) {
        return "A idade deve ser um número inteiro";
    }

    if (idadeNumero < 0) {
        return "A idade não pode ser negativa";
    }

    return null;

}

export function validarGrandezaIdade(grandeza) {
    if (!grandeza || grandeza.trim() === "") {
        return "É obrigatório informar a grandeza da idade";
    }

    // Service
    if (!["dias", "semanas", "meses", "anos"].includes(grandeza.trim().toLowerCase())) {
        return "A idade deve ser dias, semanas, meses ou anos";
    }
    return null;
}