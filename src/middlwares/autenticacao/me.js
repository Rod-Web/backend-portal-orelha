import {validarAccess} from '../../utils/tokens/validarToken.js';

export function autenticarMe(req, res, next) {
    const access_token = req.cookies.accessToken;
    const accessTokenInfo = validarAccess(access_token);

        if (typeof accessTokenInfo !== "string") {
          if (accessTokenInfo.tipo_usuario === "gerente") {
            return next();
          }
          return res
            .status(403)
            .json({
              erro: "Usuário não tem permissão para acessar esse serviço.",
            });
        }

        return res.status(401).json({ erro: accessTokenInfo });

}