export function normalizarDadosPet(
  img,
  nome,
  idade,
  grandeza_idade,
  especie,
  peso,
  raca,
  sexo,
  descricao,
) {
  //NORMALIZAÇÃO
  function normalizacaoPadrao(word) {
    // Limpa os espaços e deixa tudo minúsculo
    let limpa = word.trim().replace(/\s+/g, " ").toLowerCase();

    // Retorna apenas a primeira letra do parágrafo maiúscula
    return limpa.charAt(0).toUpperCase() + limpa.slice(1);
  }

  nome = normalizacaoPadrao(nome).replace(/\b\w/g, (letra) =>
    letra.toUpperCase(),
  ); // Primeira letra de cada palavra maiuscúla

  idade = Number(idade);

  grandeza_idade = normalizacaoPadrao(grandeza_idade);

  especie = normalizacaoPadrao(especie);
  especie =
    especie === "Cachorro"
      ? (especie = "CACHORRO")
      : especie === "Gato"
        ? (especie = "GATO")
        : especie;

  peso = Number(peso);

  raca = raca.trim().replace(/\s+/g, " ");

  sexo = normalizacaoPadrao(sexo);

  descricao = normalizacaoPadrao(descricao);

  return {
    img,
    nome,
    idade,
    grandeza_idade,
    especie,
    peso,
    raca,
    sexo,
    descricao,
  };
}
