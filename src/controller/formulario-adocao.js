import { serviceInserirSolicitacaoAdocao } from "../service/formulario-adocao.js";

export async function controllerInserirSolicitacaoAdocao(req, res, next) {
    try {
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

        const resultado = await serviceInserirSolicitacaoAdocao(dados)
        return res.status(201).json(resultado)

    } catch (err) {
        next(err)
    }
}