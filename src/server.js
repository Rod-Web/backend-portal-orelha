import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { testarConexao } from './config/conexao.js';

import { route_login } from './routes/login.js';
import { route_refresh } from './routes/refresh.js'
import { route_administrador } from './routes/administrador.js';
import { route_authMe } from "./routes/auth.js";
import { route_pet } from "./routes/pet.js"
import { route_oportunidade } from "./routes/trabalho-voluntario.js"

import { middlewaresError } from './middlwares/validacoes/error/erroGlobal.js';

const app = express();

app.use(cookieParser());
app.use(express.json());

// A ESTUDAR MELHOR
app.use(
  cors({
    // definir rotas
    origin: ["http://localhost:5501", "https://portalorelhafront.vercel.app", "https://frontend-portal-orelha.vercel.app"],
    credentials: true,
  }),
);

app.use('/login', route_login);
app.use('/auth', route_refresh);
app.use('/rotasprivadas', route_authMe);
app.use("/rotasprivadas/administrador", route_administrador);
app.use("/", route_pet);
app.use('/', route_oportunidade);

app.use(middlewaresError)

app.get("/", (req, res)=> {
    res.send("Backend rodando.");    
});

app.post("/logout", (req, res) => {
  res
  .clearCookie("accessToken", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/rotasprivadas",   // ← mesmo path do res.cookie
  })
  .clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/auth/refresh",    // ← mesmo path do res.cookie
  })
  .status(200).end();
});

app.listen(3000, async ()=> {
    await testarConexao()
    console.log("Servidor rodando na porta: 3000");
});