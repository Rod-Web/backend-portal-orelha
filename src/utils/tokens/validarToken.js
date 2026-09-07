import jsonwebtoken from 'jsonwebtoken';
import { segredoJwt } from '../../config/credenciais.js';

export function validarRefresh(refresh) {
    try {
        const payload = jsonwebtoken.verify(refresh, segredoJwt().refresh_token);  
        return  payload
    } catch (error) {
        console.error(error.message)
        const erro = new Error("Token de atualização inválido ou expirado");
        erro.status = 401;
        throw erro
    }
};