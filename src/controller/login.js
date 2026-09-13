import {serviceLogar} from '../service/login.js'

export async function controllerLogin(req, res, next) {
    try {
        const {cpf, senha} = req.body;
        const {tokens, tipo_usuario} = await serviceLogar(cpf, senha);
        res
        .cookie("accessToken", tokens.accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            path: '/rotasprivadas',
            maxAge: 15 * 60 * 1000
        })
        .cookie('refreshToken', tokens.refreshToken, {
            httpOnly: true, // JavasCript não pode ler
            secure: true, // Só permite https
            sameSite: "none", // Permite cross-site, consumir a API em dominio diferente
            path: '/auth/refresh',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        .status(200)
        .json({mensagem: "Login efetuado com sucesso.", tipo_usuario: tipo_usuario});
    } catch (error) {
        next(error);
    };
};