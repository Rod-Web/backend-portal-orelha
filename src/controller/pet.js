import {
  serviceSelecionarPets,
  serviceInserirPet,
  serviceSelecionarPetsPorCampo,
  serviceDeletarPetPorId,
  serviceEditarPet,
} from "../service/pet.js";

export async function controllerSelecionarPets(req, res, next) {
  try {
    const pets = await serviceSelecionarPets();
    res.status(200).json(pets);
  } catch (error) {
    next(error);
  }
}

export async function controllerSelecionarPetsPorId(req, res, next) {
  try {
    const { id } = req.params;
    const pet = await serviceSelecionarPetsPorCampo("numero_identificacao", id);
    res.status(200).json(pet);
  } catch (error) {
    next(error);
  }
}

export async function controllerSelecionarPetsPorCampo(req, res, next) {
  try {
    const { campo, valor } = req.query;
    const pets = await serviceSelecionarPetsPorCampo(campo, valor);
    res.status(200).json(pets);
  } catch (error) {
    next(error);
  }
}

export async function controllerInserirPet(req, res, next) {
  try {
    if (!req.file || req.file === undefined || req.file === null) {
      return res.status(400).json({
        erro: "É obrigatório enviar uma imagem do pet.",
      });
    }

    const dados = {
      img: req.file,
      nome: req.body.nome,
      idade: req.body.unidade_idade,
      grandeza_idade: req.body.grandeza_idade,
      especie: req.body.especie,
      peso: req.body.peso,
      raca: req.body.raca,
      sexo: req.body.sexo,
      descricao: req.body.descricao,
    };

    const nomePet = await serviceInserirPet(dados);

    return res.status(201).json({ nomePet });
  } catch (error) {
    next(error);
  }
}

export async function controllerEditarPet(req, res, next) {
  try {
    const { id } = req.params;
    const dados = {
      img: req.body.imagemUrl || req.file,
      nome: req.body.nome,
      idade: req.body.unidade_idade,
      grandeza_idade: req.body.grandeza_idade,
      especie: req.body.especie,
      peso: req.body.peso,
      raca: req.body.raca,
      sexo: req.body.sexo,
      descricao: req.body.descricao,
    };

    const status = req.body.status.toUpperCase().trim();

    const nomePet = await serviceEditarPet(id, dados, status);

    return res.status(200).json({ nomePet });
  } catch (err) {
    next(err);
  }
}

export async function controllerDeletarPetsPorId(req, res, next) {
  try {
    const { id } = req.params;
    const pet = await serviceDeletarPetPorId(id);
    res.status(200).json(pet);
  } catch (error) {
    next(error);
  }
}
