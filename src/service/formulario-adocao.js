import { serviceSelecionarPetsPorCampo } from "./pet.js";
import { buscarInfosViaCep } from "../APIs/buscarInfosViaCep.js";

import { repositoryInserirSolicitacaoDeAdocao } from "../repository/formulario-adocao.js";

export async function serviceInserirSolicitacaoAdocao(dados) {

    if (dados.compromisso_adocao_responsavel !== true || dados.familia_ciente_concorda !== true) {
        const erro = new Error(
            "Não foi possível prosseguir com a solicitação de adoção. Para garantir o bem-estar do animal, é necessário que você e sua família estejam cientes e de acordo com as responsabilidades envolvidas na adoção.",
        );
        erro.status = 422
        throw erro;
    }

    const [pet] = await serviceSelecionarPetsPorCampo("numero_identificacao", dados.id_pet);

    if (pet.status !== "DISPONIVEL") {
        const erro = new Error("Pet não disponível")
        erro.status = 404
        throw erro
    }

    // VALIDAR SE O CEP EXISTE
    const cepinfos = await buscarInfosViaCep(dados.cep)
    if (cepinfos.erro) {
        const erro = new Error("O CEP informado não existe")
        erro.status = 400
        throw erro
    }

    const affectedRows = await repositoryInserirSolicitacaoDeAdocao(dados);
    // VALIDAR SE AS TABELAS SOFRERAM ALTERAÇÕES
    if (affectedRows != 1) {
        const erro = new Error(
            "Não foi possivel realizar sua solicitação. Tente novamente mais tarde ou entre em contato com o suporte.",
        );
        throw erro;
    }



    return { mensagem: `Sua solicitação foi realizada com sucesso, aguarde pelo contato da ONG.` };

}