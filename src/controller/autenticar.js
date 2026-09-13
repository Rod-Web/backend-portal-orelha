export function controllerTipoUsuario(req, res) {

    res.status(200).json({tipo_usuario: req.usuario})

}