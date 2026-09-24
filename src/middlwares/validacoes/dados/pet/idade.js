
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
    if (!grandeza) {
        return "É obrigatório informar a grandeza da idade";
    }

    // Service
    if (!["meses", "anos"].includes(grandeza)) {
        return "A idade deve ser meses ou anos";
    }

    return null;
}