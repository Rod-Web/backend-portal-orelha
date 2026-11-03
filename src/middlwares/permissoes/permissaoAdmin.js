export function confirmarPermissoesAdmin(req, res, next) {

    const tipo_usuario = req.usuario
        
    if(tipo_usuario === "admin") {    
        return next();     
    };
        
    return res.status(403).json({erro: "Usuário não tem permissão para acessar esse serviço."});

};