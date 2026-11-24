import express from 'express'

import { dadosSolicitacaoAdocao, validarIdGeral, validarEntrevista, validarAnotacoes } from "../middlwares/validacoes/dadosSolicitacaoAdocao.js";

import { validarStatusForms } from "../middlwares/validacoes/dadosForms.js"


import { validarAccessMiddlware } from "../middlwares/validacoes/dadosUsuario.js";
import { autenticar } from "../middlwares/autenticacao/autenticar.js";
import { confirmarPermissoesAdmin } from "../middlwares/permissoes/permissaoAdmin.js";

import {
  controllerSelecionarSolicitacoesAdocao,
  controllerSelecionarSolicitacaoAdocaoPorId,
  controllerInserirSolicitacaoAdocao,
  controllerInserirAnotacoes,
  controllerEditarStatusSolicitacaoAdocao,
  controllerEditarEntrevistaSolicitacaoAdocao,
  controllerDeletarSolicitacaoAdocaoPorId,
} from "../controller/formulario-adocao.js";

export const route_formularioAdocao = express.Router()

route_formularioAdocao.get(
  "/rotasprivadas/solicitacao-adocao",
  validarAccessMiddlware,
  autenticar,
  confirmarPermissoesAdmin,
  controllerSelecionarSolicitacoesAdocao,
);

route_formularioAdocao.get(
  "/rotasprivadas/solicitacao-adocao/:id",
  validarAccessMiddlware,
  autenticar,
  confirmarPermissoesAdmin,
  validarIdGeral,
  controllerSelecionarSolicitacaoAdocaoPorId,
);


route_formularioAdocao.post(
  "/inserirSolicitacaoAdocao",
  dadosSolicitacaoAdocao,
  controllerInserirSolicitacaoAdocao,
);

route_formularioAdocao.post(
  "/rotasprivadas/inserirAnotacoesEntrevista/:id",
  validarAccessMiddlware,
  autenticar,
  confirmarPermissoesAdmin,
  validarIdGeral,
  validarAnotacoes,
  controllerInserirAnotacoes
)

route_formularioAdocao.patch(
  "/rotasprivadas/editarStatusSolicitacao/:id",
  validarAccessMiddlware,
  autenticar,
  confirmarPermissoesAdmin,
  validarIdGeral,
  validarStatusForms, 
  controllerEditarStatusSolicitacaoAdocao
);

route_formularioAdocao.patch(
  "/rotasprivadas/editarEntrevista/:id",
  validarAccessMiddlware,
  autenticar,
  confirmarPermissoesAdmin,
  validarIdGeral,
  validarEntrevista,
  controllerEditarEntrevistaSolicitacaoAdocao
)

route_formularioAdocao.delete(
  "/rotasprivadas/deletarSolicitacaoAdocao/:id",
  validarAccessMiddlware,
  autenticar,
  confirmarPermissoesAdmin,
  validarIdGeral,
  controllerDeletarSolicitacaoAdocaoPorId,
);
