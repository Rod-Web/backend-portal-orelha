import {serviceLogar} from '../service/login.js'

export async function controllerLogin(req, res, next) {
    try {
        const {cpf, senha} = req.body;
        const tokens = await serviceLogar(cpf, senha);
        res
        .cookie("accessToken", tokens.accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            path: '/rotasprivadas'
        })
        .cookie('refreshToken', tokens.refreshToken, {
            httpOnly: true, // JavasCript não pode ler
            secure: true, // Só permite https
            sameSite: "none", // Permite cross-site, consumir a API em dominio diferente
            path: '/auth/refresh'
        })
        .status(200)
        .json({mensagem: "Login efetuado com sucesso."});
    } catch (error) {
        next(error);
    };
};