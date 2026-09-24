import { repositoryBuscarPets } from '../repository/pet.js'
import { normalizarDadosPet } from "../utils/normalizacoes/normalizarDadosPet.js";
import { uploadImg } from '../utils/salvarImgPet.js';

export function serviceSelecionarPets() {
    const capturar = repositoryBuscarPets();
    return capturar
};

export async function seriveInserirPet(dados) {
    // NORMALIZAR
    dados = normalizarDadosPet(
        dados.img,
        dados.nome,
        dados.descricao,
        dados.peso,
        dados.raca,
        dados.idadeNumerica,
        dados.grandezaIdade,
        dados.genero,
        dados.tipo_pet  
    );

    const upload_url = await uploadImg(dados.img);

    console.log(upload_url)
    return dados
};