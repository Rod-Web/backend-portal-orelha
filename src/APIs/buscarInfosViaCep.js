export async function buscarInfosViaCep(cep) {
    console.log("Buscando O CEP")
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    if (!response.ok) {
        const erro = new Error("Erro ao consultar o ViaCEP");
        erro.status = 502;
        throw erro;
    }
    const resultado = await response.json()
    return resultado

}

//await buscarInfosViaCep('12345678')

