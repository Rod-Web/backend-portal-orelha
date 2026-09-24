import { serviceSelecionarPets, seriveInserirPet } from '../service/pet.js'

export function controllerSelecionarPets(req, res, next) {
    try {
        const pets = serviceSelecionarPets();
        res.status(200).json({pets: pets});
    } catch (error) {
        next(error);
    };
};

export async function controlllerInserirPet(req, res, next) {
    try {
        const dados = {
            img: req.file,
            nome: req.body.nome,
            descricao: req.body.descricao,
            peso: req.body.peso,
            raca: req.body.raca,
            idadeNumerica: req.body.unidade_idade,
            grandezaIdade: req.body.grandeza_idade,
            genero: req.body.genero,
            tipo_pet: req.body.tipo_pet,
        };

        const nomePet = await seriveInserirPet(dados);

        res.json({nomePet})   
    } catch (error) {
        next(error);
    };
};