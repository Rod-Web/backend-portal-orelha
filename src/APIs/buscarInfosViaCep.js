export async function buscarInfosViaCep(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) {
            const erro = new Error("Erro ao consultar o ViaCEP");
            erro.status = 502;
            throw erro;
        }
        return await response.json();
    } catch (err) {
        console.error("Erro detalhado:", err);
        console.error("Causa:", err.cause);
        throw err;
    }
}
