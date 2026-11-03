import {
  repositoryBuscarPets,
  repositoryCadastrarPet,
  repositoryBuscarPetsPorCampo,
  repositoryEditarPet,
  repositoryDeletarPetPorId,
} from "../repository/pet.js";
import { normalizarDadosPet } from "../utils/normalizacoes/normalizarDadosPet.js";
import { calcularIdadeComOsDias } from "../utils/normalizacoes/calcularIdadeComOsDias.js";
import { uploadImg } from '../utils/salvarImgPet.js';

export async function serviceSelecionarPets() {
    const allPets = await repositoryBuscarPets();
    if (!allPets || allPets.length === 0) {
        const erro = new Error("Nenhum pet encontrado.");
        erro.status = 404;
        throw erro;
    }

    calcularIdadeComOsDias(allPets);
    return allPets;
};

export async function serviceSelecionarPetsPorCampo(campo, valor) {

    const pets = await repositoryBuscarPetsPorCampo(campo, valor);
    if (!pets || pets.length === 0) {
        const erro = new Error("Nenhum pet encontrado.");
        erro.status = 404;
        throw erro;
    }
    return pets;
};

export async function serviceDeletarPetPorId(id) {

  const pet = await repositoryBuscarPetsPorCampo("numero_identificacao", id);
  if(pet.length !== 1) {
    const erro = new Error("Pet não encontrado.");
    erro.status = 404
    throw erro;
  }

  const affectedRows = await repositoryDeletarPetPorId(id);
  
  if (affectedRows !== 1) {
    throw new Error(
      "Não foi possível excluir o pet. Tente novamente ou entre em contato com o suporte.",
    );
  }
  return {
    mensagem: "Pet " + pet[0].nome + " excluído com sucesso."
  };
}


export async function serviceInserirPet(dados) {
  // NORMALIZAR
  dados = normalizarDadosPet(
    dados.img,
    dados.nome,
    dados.idade,
    dados.grandeza_idade,
    dados.especie,
    dados.peso,
    dados.raca,
    dados.sexo,
    dados.descricao,
  );

  
    // Converter idade para número em dias com base na grandez
    if (dados.grandeza_idade === "Anos") {
      dados.idade = parseInt(dados.idade) * 365;
    } else if (dados.grandeza_idade === "Meses") {
      dados.idade = parseInt(dados.idade) * 30;
    } else if (dados.grandeza_idade === "Semanas") {
      dados.idade = parseInt(dados.idade) * 7;
    } else if (dados.grandeza_idade === "Dias") {
        dados.idade = parseInt(dados.idade);
    }

  const upload_url = await uploadImg(dados.img);

  dados.img = upload_url;

  dados.status = "DISPONIVEL";
  
  const affectedRows = await repositoryCadastrarPet(dados);
  // VALIDAR SE AS TABELAS SOFRERAM ALTERAÇÕES
  if (affectedRows != 1) {
    const erro = new Error(
      "Não foi possivel cadastrar o Pet. Entre em contato com o suporte.",
    );
    throw erro;
  }

  return dados.nome;
};

export async function serviceEditarPet(id, dados, status) {

  // NORMALIZAR
  dados = normalizarDadosPet(
    dados.img,
    dados.nome,
    dados.idade,
    dados.grandeza_idade,
    dados.especie,
    dados.peso,
    dados.raca,
    dados.sexo,
    dados.descricao,
  );
  
  dados.status = status;

  // Converter idade para número em dias com base na grandeza
  if (dados.grandeza_idade === "Anos") {
    dados.idade = parseInt(dados.idade) * 365;
  } else if (dados.grandeza_idade === "Meses") {
    dados.idade = parseInt(dados.idade) * 30;
  } else if (dados.grandeza_idade === "Semanas") {
    dados.idade = parseInt(dados.idade) * 7;
  } else if (dados.grandeza_idade === "Dias") {
      dados.idade = parseInt(dados.idade);
  }

  const pet = await repositoryBuscarPetsPorCampo("numero_identificacao", id);
  if (pet.length !== 1) {
    const erro = new Error("Pet não encontrado.");
    erro.status = 404;
    throw erro;
  }


  // Fazer comparação entre a imagem antiga e a nova se for a mesma não precisa fazer upload, se for diferente faz o upload e salva a nova url no banco de dados
  if (dados.img === pet[0].imagem) {
    dados.img = pet[0].imagem;
  } else if (typeof dados.img === "string"){
      const erro = new Error("A imagem atual não foi encontrada na base de dados, reenvie por favor.");
      erro.status = 404
      throw erro;
  } else {
    const upload_url = await uploadImg(dados.img);
    dados.img = upload_url;
  }

  const affectedRows = await repositoryEditarPet(id, dados);
  if (affectedRows !== 1) {
    const erro = new Error(
      "Não foi possível editar o pet. Tente novamente ou entre em contato com o suporte.",
    );
    throw erro;
  }

  return dados.nome;

}