import { validarAccess } from "../../utils/tokens/validarToken.js";

export function autenticar(req, res, next) {

    const access_token = req.cookies.accessToken;
    const accessTokenInfo = validarAccess(access_token);

    if (typeof accessTokenInfo !== "string") {

        req.usuario = accessTokenInfo.tipo_usuario
        return next();

    };

    return res.status(401).json({erro: accessTokenInfo});

};