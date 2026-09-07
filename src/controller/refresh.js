import {serviceRefresh} from '../service/refresh.js'

export function controllerRefresh(req, res, next) {

    try {
        const refresh = req.cookies.refreshToken;
        const accessToken = serviceRefresh(refresh);
        res.cookie("accessToken", accessToken, {
          httpOnly: true,
          secure: false,
          sameSite: "none",
          path: "/rotasprivadas",
        }).sendStatus(204);

    } catch (err) {
        next(err)
    }
};