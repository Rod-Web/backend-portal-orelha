import {serviceInserirCliente} from '../service/cliente.js'

export async function controllerInserirCliente(req, res, next) {
    try {
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

        const user = await serviceInserirCliente(dados);
        // TEM QUE VER O QUE VAMOS RETORNAR
        return res.status(201).json({user})
        

    } catch (error) {
        next(error)
    }
}