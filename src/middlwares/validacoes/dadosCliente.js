import { validarCEP } from "./dados/endereco/cep.js"
import { validarNumero } from "./dados/endereco/numero.js"

export function dadosCliente(req, res, next) {

    const {cep, numero} = req.body.endereco

    const erro = validarCEP(cep) || validarNumero(numero)

    if(erro) return res.status(400).json({erro})

    next()
        
};
