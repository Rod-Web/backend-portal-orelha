import {serviceRefresh} from '../service/refresh.js'

export function controllerRefresh(req, res, next) {

    try {
        const refresh = req.cookies.refreshToken;
        const accessToken = serviceRefresh(refresh);
        res
          .cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            path: "/rotasprivadas",
            maxAge: 15 * 60 * 1000,
          })
          .sendStatus(204);

    } catch (err) {
        next(err)
    }
};