import express from 'express';
import cors from 'cors';

import { testarConexao } from './config/conexao.js';

import { route_cliente } from './routes/cliente.js';
import { route_login } from './routes/login.js';
import { middlewaresError } from './middlwares/validacoes/error/erroGlobal.js';

const app = express();

app.use(express.json());

// A ESTUDAR MELHOR
app.use(
  cors({
    // definir rotas
    origin: "http://127.0.0.1:5500",
    credentials: true,
  }),
);

app.use('/cliente', route_cliente);
app.use('/login', route_login);

app.use(middlewaresError)

app.get("/", (req, res)=> {
    res.send("Backend rodando.");    
});

app.listen(3000, async ()=> {
    await testarConexao()
    console.log("Servidor rodando na porta: 3000");
});