import { gerarAccessToken } from "../utils/tokens/gerarToken.js";
import { validarRefresh } from "../utils/tokens/validarToken.js";

export function serviceRefresh(refresh) {
    // validar se o Refresh é valido e decodifica e pega o id + tipo
    const infoRefresh = validarRefresh(refresh);
    const access_token = gerarAccessToken(infoRefresh.id, infoRefresh.tipo_usuario);
    return access_token;
}