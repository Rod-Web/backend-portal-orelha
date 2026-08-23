import express from 'express';

import { route_cliente } from './router/cliente.js';

const app = express();

app.use(express.json());

app.use('/cliente', route_cliente);

app.get("/", (req, res)=> {
    res.send("Hello Word.");    
});

app.listen(3000, ()=> {
    console.log("Servidor rodando na porta: 3000");
});