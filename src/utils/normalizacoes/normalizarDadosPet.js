export function normalizarDadosPet(
    img,
    nome,
    descricao,
    peso,
    raca,
    idadeNumerica,
    grandezaIdade,
    genero,
    tipo_pet,
) {
  
    //NORMALIZAÇÃO

    function normalizacaoPadrao(word) {

            word = word.trim().replace(/\s+/g, " ").toLowerCase();

            return word.charAt(0).toUpperCase() + word.slice(1);

    }


    nome = normalizacaoPadrao(nome)
        .replace(/\b\w/g, (letra) =>
            letra.toUpperCase(),
        ); // Primeira letra de cada palavra maiuscúla


    descricao = normalizacaoPadrao(descricao);
    raca = raca.trim().replace(/\s+/g, " ");
    grandezaIdade = normalizacaoPadrao(grandezaIdade);
    genero = normalizacaoPadrao(genero);
    tipo_pet = normalizacaoPadrao(tipo_pet);

    
    peso = Number(peso);

    idadeNumerica = Number(idadeNumerica);
  return {
    img,
    nome,
    descricao,
    peso,
    raca,
    idadeNumerica,
    grandezaIdade,
    genero,
    tipo_pet
  };
}
