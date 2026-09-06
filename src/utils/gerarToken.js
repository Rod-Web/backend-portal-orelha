import jsonwebtoken from "jsonwebtoken";
import { segredoJwt } from "../config/credenciais.js";

export function gerarAccessToken(id, tipo_usuario) {

    return jsonwebtoken.sign(
        {id: id, tipo_usuario: tipo_usuario}, 
        segredoJwt().access_token, 
        {expiresIn: "15m"}
    );

};

export function gerarRefreshToken(id, tipo_usuario) {
    return jsonwebtoken.sign(
        {id: id, tipo_usuario: tipo_usuario},
        segredoJwt().refresh_token,
        {expiresIn: "7d"}
    )
}
