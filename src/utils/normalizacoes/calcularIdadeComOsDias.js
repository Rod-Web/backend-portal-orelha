export function calcularIdadeComOsDias(pets) {
    pets.forEach((pet) => {
        if (pet.idade_aproximada_em_dias < 7) {
            const dias = pet.idade_aproximada_em_dias;
            pet.idade = `${dias} ${dias === 1 ? "dia" : "dias"}`;
        } else if (pet.idade_aproximada_em_dias < 30) {
            const semanas = Math.floor(pet.idade_aproximada_em_dias / 7);
            pet.idade = `${semanas} ${semanas === 1 ? "semana" : "semanas"}`;
        } else if (pet.idade_aproximada_em_dias < 365) {
            const meses = Math.floor(pet.idade_aproximada_em_dias / 30);
            pet.idade = `${meses} ${meses === 1 ? "mês" : "meses"}`;
        } else {
            const anos = Math.floor(pet.idade_aproximada_em_dias / 365);
            pet.idade = `${anos} ${anos === 1 ? "ano" : "anos"}`;
        }
    });

    return pets;
}