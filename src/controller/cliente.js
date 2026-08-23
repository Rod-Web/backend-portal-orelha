// import {serviceInserirCliente} from '../service/cliente.js'

export async function controllerInserirCliente(req, res, next) {
    try {
        console.log("oi")
        const dados = {
            cpf: req.body.cpf,
            nome: req.body.nome,
            idade: req.body.idade,
            senha: req.body.senha,
            telefone: req.body.telefone,
            email: req.body.email,
            endereco: {
                cep: req.body.endereco.cep,
                numero: req.body.endereco.numero,
            }
        };

        //const user = await serviceInserirCliente(dados);

        return res.status(201).json({dados})

    } catch (error) {
        next(error)
    }
}