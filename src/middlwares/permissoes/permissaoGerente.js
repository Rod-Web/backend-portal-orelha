export function confirmarPermissoesGerente(req, res, next) {

    const tipo_usuario = req.usuario
        
    if(tipo_usuario === "gerente") {    
        return next();     
    };
        
    return res.status(403).json({erro: "Usuário não tem permissão para acessar esse serviço."});

};