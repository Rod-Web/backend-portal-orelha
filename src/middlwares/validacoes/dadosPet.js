import { validarId} from "./dados/global/id.js"
import { validarNome } from "./dados/global/nome.js";
import { validarDescricao } from "./dados/pet/descricao.js";
import { validarPeso } from "./dados/pet/peso.js";
import { validarRaca } from "./dados/pet/raca.js";
import {
  validarIdadeNumerica,
  validarGrandezaIdade,
} from "./dados/pet/idade.js";
import { validarSexo } from "./dados/pet/sexo.js";
import { validarEspecie } from "./dados/pet/especie.js";
import { validarStatus } from "./dados/pet/status.js";

export function validarIdPet(req, res, next) {
  const { id } = req.params;

  const erro = validarId(id);

  if (erro) return res.status(400).json({ erro });

  next();
}

export function dadosPet(req, res, next) {
  const dados = {
    nome: req.body.nome,
    idade: req.body.unidade_idade,
    grandeza_idade: req.body.grandeza_idade,
    especie: req.body.especie,
    peso: req.body.peso,
    raca: req.body.raca,
    sexo: req.body.sexo,
    descricao: req.body.descricao,
  };

  const erro =
    validarNome(dados.nome) ||
    validarDescricao(dados.descricao) ||
    validarPeso(dados.peso) ||
    validarRaca(dados.raca) ||
    validarIdadeNumerica(dados.idade) ||
    validarGrandezaIdade(dados.grandeza_idade) ||
    validarSexo(dados.sexo) ||
    validarEspecie(dados.especie) ||
    validarDescricao(dados.descricao);
  if (erro) {
    console.log("Erro de validação:", erro);
    return res.status(400).json({ erro });
  }

  next();
}

import { validarCampo } from "./dados/pet/campoBusca.js";
import { validarValor } from "./dados/pet/valorBusca.js";

export function validarCampoEValorDeBuscaPet(req, res, next) {
  const { campo, valor } = req.query;

  const erro = validarCampo(campo) || validarValor(valor);

  if (erro) {
    return res.status(400).json({ erro });
  }

  next();
}


export function validarStatusPet(req, res, next) {
  const { status } = req.body;

  const erro = validarStatus(status);

  if (erro) return res.status(400).json({ erro });

  next();
};