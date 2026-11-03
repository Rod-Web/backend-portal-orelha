import jsonwebtoken from "jsonwebtoken";
import { segredoJwt } from "../../config/credenciais.js";

export function gerarAccessToken(id, nomeUsuario) {

    return jsonwebtoken.sign(
        // colocar tipo_usuario e nome  
        {id: id, nomeUsuario: nomeUsuario, tipo_usuario: "admin"}, 
        segredoJwt().access_token, 
        {expiresIn: "15m"}
    );

};

export function gerarRefreshToken(id, nomeUsuario) {
    return jsonwebtoken.sign(
        {id: id, nomeUsuario: nomeUsuario, tipo_usuario: "admin"},
        segredoJwt().refresh_token,
        {expiresIn: "7d"}
    )
}
