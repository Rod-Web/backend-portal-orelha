export async function buscarInfosViaCep(cep) {
    const fontes = [
        {
            nome: "ViaCEP",
            url: `https://viacep.com.br/ws/${cep}/json/`,
            normalizar: (d) => d,
        },
        {
            nome: "BrasilAPI",
            url: `https://brasilapi.com.br/api/cep/v1/${cep}`,
            normalizar: (d) => ({
                cep: d.cep,
                logradouro: d.street,
                bairro: d.neighborhood,
                localidade: d.city,
                uf: d.state,
            }),
        },
        {
            nome: "OpenCEP",
            url: `https://opencep.com/v1/${cep}`,
            normalizar: (d) => d,
        },
    ];

    let ultimoErro;
    for (const fonte of fontes) {
        try {
            const response = await fetch(fonte.url);
            if (!response.ok) throw new Error(`${fonte.nome} respondeu ${response.status}`);
            const dados = await response.json();
            return fonte.normalizar(dados);
        } catch (err) {
            console.warn(`Falha em ${fonte.nome}:`, err.message);
            ultimoErro = err;
        }
    }

    const erro = new Error("Erro ao consultar o CEP em todas as fontes disponíveis");
    erro.status = 502;
    erro.cause = ultimoErro;
    throw erro;
}