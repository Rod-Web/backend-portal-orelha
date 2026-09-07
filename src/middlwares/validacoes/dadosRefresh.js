
export function dadosRefresh(req, res, next) {
    const refresh = req.cookies.refreshToken;
    if(!refresh) {
        return res.status(401).json({erro: "O cookie refresh não existe."})
    };

    next();
};