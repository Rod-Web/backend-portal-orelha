import { validarNome } from "./dados/global/nome.js";
import { validarIdade } from "./dados/pessoa/idade.js";
import { validarEmail } from "./dados/pessoa/email.js";
import { validarEndereco } from "./dados/endereco/enderecoCompleto.js"
import { validarCEP } from "./dados/endereco/cep.js";
import { validarTelefone } from "./dados/pessoa/telefone.js"
import { validarProfissao } from "./dados/pessoa/profissão.js";
import { validarMedidasSegurancaResidencial } from "./dados/solicitacaoAdocao/medidas_seguranca_residencial.js";
import { validarComodosAcessoAnimal } from "./dados/solicitacaoAdocao/comodos_acesso_animal.js";
import { validarPossuiOutrosAnimais } from "./dados/solicitacaoAdocao/possui_outros_animais.js";
import { validarDescricaoAnimaisExistentes } from "./dados/solicitacaoAdocao/descricao_animais_existentes.js";
import { validarRacaoAtual } from "./dados/solicitacaoAdocao/racao_atual.js";
import { validarVeterinarioResponsavel } from "./dados/solicitacaoAdocao/veterinario_responsavel.js";
import { validarCuidadorDireto } from "./dados/solicitacaoAdocao/cuidador_direto.js";
import { validarQuantidadePessoasResidencia } from "./dados/solicitacaoAdocao/quantidade_pessoas_residencia.js";
import { validarFamiliaCienteConcorda } from "./dados/solicitacaoAdocao/familia_ciente_concorda.js";
import { validarCriancaConvivio } from "./dados/solicitacaoAdocao/crianca_convivio.js";
import { validarAnimaisAnteriores } from "./dados/solicitacaoAdocao/animais_anteriores.js";
import { validarDescricaoAnimaisAnteriores } from "./dados/solicitacaoAdocao/descricao_animais_anteriores.js";
import { validarRotinaFamiliar } from "./dados/solicitacaoAdocao/rotina_familiar.js";
import { validarCompromissoAdocaoResponsavel } from "./dados/solicitacaoAdocao/compromisso_adocao_responsavel.js";
import { validarId } from "./dados/global/id.js";


export function dadosSolicitacao(req, res, next) {

    if (!req.body) {
      return res.status(400).json({
        erro: "O corpo da requisição não foi informado.",
      });
    }
    
  const dados = {
    nome: req.body.nome_completo,
    idade: req.body.idade,
    email: req.body.email,
    endereco_completo: req.body.endereco_completo,
    cep: req.body.cep,
    telefone: req.body.telefone,
    profissao: req.body.profissao,
    medidas_seguranca_residencial: req.body.medidas_seguranca_residencial,
    comodos_acesso_animal: req.body.comodos_acesso_animal,
    possui_outros_animais: req.body.possui_outros_animais,
    descricao_animais_existentes: req.body.descricao_animais_existentes,
    racao_atual: req.body.racao_atual,
    veterinario_responsavel: req.body.veterinario_responsavel,
    cuidador_direto: req.body.cuidador_direto,
    quantidade_pessoas_residencia: req.body.quantidade_pessoas_residencia,
    familia_ciente_concorda: req.body.familia_ciente_concorda,
    crianca_convivio: req.body.crianca_convivio,
    animais_anteriores: req.body.animais_anteriores,
    descricao_animais_anteriores: req.body.descricao_animais_anteriores,
    rotina_familiar: req.body.rotina_familiar,
    compromisso_adocao_responsavel: req.body.compromisso_adocao_responsavel,
    id_pet: req.body.id_pet
  };

  const erro =
    validarNome(dados.nome) ||
    validarIdade(dados.idade) ||
    validarEmail(dados.email) ||
    validarEndereco(dados.endereco_completo) ||
    validarCEP(dados.cep) ||
    validarTelefone(dados.telefone) ||
    validarProfissao(dados.profissao) ||
    validarMedidasSegurancaResidencial(dados.medidas_seguranca_residencial) ||
    validarComodosAcessoAnimal(dados.comodos_acesso_animal) ||
    validarPossuiOutrosAnimais(dados.possui_outros_animais) ||
    validarDescricaoAnimaisExistentes(dados.descricao_animais_existentes) ||
    validarRacaoAtual(dados.racao_atual) ||
    validarVeterinarioResponsavel(dados.veterinario_responsavel) ||
    validarCuidadorDireto(dados.cuidador_direto) ||
    validarQuantidadePessoasResidencia(dados.quantidade_pessoas_residencia) ||
    validarFamiliaCienteConcorda(dados.familia_ciente_concorda) ||
    validarCriancaConvivio(dados.crianca_convivio) ||
    validarAnimaisAnteriores(dados.animais_anteriores) ||
    validarDescricaoAnimaisAnteriores(dados.descricao_animais_anteriores) ||
    validarRotinaFamiliar(dados.rotina_familiar) ||
    validarCompromissoAdocaoResponsavel(dados.compromisso_adocao_responsavel) ||
    validarId(dados.id_pet);

  if (erro) {
    console.log("Erro de validação:", erro);
    return res.status(400).json({ erro });
  }

  next();
}