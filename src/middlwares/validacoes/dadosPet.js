import { validarImg } from "./dados/global/img.js";
import { validarNome } from "./dados/global/nome.js";
import { validarDescricao } from "./dados/pet/descricao.js";
import { validarPeso } from "./dados/pet/peso.js";
import { validarRaca } from "./dados/pet/raca.js";
import { validarIdadeNumerica, validarGrandezaIdade } from "./dados/pet/idade.js";
import { validarGenero } from "./dados/pet/genero.js";
import { validarTipoPet } from "./dados/pet/tipoPet.js";


export function dadosPet(req, res, next) {
    const dados = {
        img: req.file,
        nome: req.body.nome,
        descricao: req.body.descricao,
        peso: req.body.peso,
        raca: req.body.raca,
        idadeNumerica: req.body.unidade_idade,
        grandezaIdade: req.body.grandeza_idade,
        genero: req.body.genero,
        tipo_pet: req.body.tipo_pet        
    };

    console.log(dados);

    const erro = 
    validarImg(dados.img) || 
    validarNome(dados.nome) || 
    validarDescricao(dados.descricao) || 
    validarPeso(dados.peso) ||
    validarRaca(dados.raca) ||
    validarIdadeNumerica(dados.idadeNumerica) ||
    validarGrandezaIdade(dados.grandezaIdade) ||
    validarGenero(dados.genero) ||
    validarTipoPet(dados.tipo_pet);

    if(erro) {
        return res.status(400).json({erro});
    };

    next();
}