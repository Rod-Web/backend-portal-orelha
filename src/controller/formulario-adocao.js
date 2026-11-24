import {
  serviceSelecionarSolicitacoesAdocao,
  serviceSelecionarSolicitacaoAdocaoPorId,
  serviceInserirSolicitacaoAdocao,
  serviceInserirAnotacoes,
  serviceEditarStatusSolicitacaoAdocao,
  serviceEditarEntrevistaSolicitacaoAdocao,
  serviceDeletarSolicitacaoAdocaoPorId,
} from "../service/formulario-adocao.js";

export async function controllerSelecionarSolicitacoesAdocao(req, res, next) {
    try {
        const solicitacoes = await serviceSelecionarSolicitacoesAdocao();
        return res.status(200).json(solicitacoes);
    } catch (error) {
        next(error);
    };
};

export async function controllerSelecionarSolicitacaoAdocaoPorId(req, res, next) {
  try {
    const { id } = req.params;

    const solicitacao = await serviceSelecionarSolicitacaoAdocaoPorId(id);
    res.status(200).json(solicitacao);
  } catch (error) {
    next(error);
  }
}

export async function controllerInserirSolicitacaoAdocao(req, res, next) {
    try {
        const dados = {
            nome: req.body.nome_completo,
            idade: req.body.idade,
            email: req.body.email,
            endereco_completo: req.body.endereco_completo,
            cep: req.body.cep,
            telefone: req.body.telefone_contato,
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

        const resultado = await serviceInserirSolicitacaoAdocao(dados)
        return res.status(201).json(resultado)

    } catch (err) {
        next(err)
    }
}

export async function controllerInserirAnotacoes(req, res, next) {
  try {
    const {id} = req.params

    const anotacao = req.body.anotacoes.trim();

    const inserir = await serviceInserirAnotacoes(id, anotacao);

    res.status(201).json(inserir);
  } catch(err) {
    next(err);
  }
}

export async function controllerEditarStatusSolicitacaoAdocao(req, res, next) {
  try {
    const {id} = req.params;

    const status = req.body.status.toUpperCase().trim();

    const edicao = await serviceEditarStatusSolicitacaoAdocao(id, status);
    res.status(200).json(edicao);
  } catch (err) {
    next(err)
  }
}

export async function controllerEditarEntrevistaSolicitacaoAdocao(req, res, next){
  try {
    const {id} = req.params;

    const entrevista = req.body.entrevista;

    const edicao = await serviceEditarEntrevistaSolicitacaoAdocao(id, entrevista);
    res.status(200).json(edicao);
  } catch (err) {
    next(err)
  }
}

export async function controllerDeletarSolicitacaoAdocaoPorId(req, res, next) {
  try {
    const { id } = req.params;
    const solicitacao = await serviceDeletarSolicitacaoAdocaoPorId(id);
    res.status(200).json(solicitacao);
  } catch (error) {
    next(error);
  }
};

