export function controllerTipoUsuario(req, res) {

    res.status(200).json({nomeUsuario: req.nomeUsuario, tipo_usuario: req.usuario})

}