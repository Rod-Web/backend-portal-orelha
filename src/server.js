import express, { text } from 'express';
import { testarConexao } from './config/conexao.js';
import { bancoDeDados } from './config/credenciais.js'

import { route_cliente } from './routes/cliente.js';
import { middlewaresError } from './middlwares/validacoes/error/erroGlobal.js';

const app = express();

app.use(express.json());

app.use('/cliente', route_cliente);

app.use(middlewaresError)

app.get("/", (req, res)=> {
    const credenciais = bancoDeDados()
    res.send("Backend rodando.   " + credenciais.host);    
});

app.listen(3000, async ()=> {
    await testarConexao()
    console.log("Servidor rodando na porta: 3000");
});