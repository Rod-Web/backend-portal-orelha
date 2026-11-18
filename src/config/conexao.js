import mysql2 from "mysql2/promise";
import { bancoDeDados } from "./credenciais.js";

export const pool = mysql2.createPool({
  host: bancoDeDados().host,
  port: bancoDeDados().porta,
  database: bancoDeDados().database,
  user: bancoDeDados().usuario,
  password: bancoDeDados().senha,
});

// Configura o fuso horário em cada nova conexão do pool
pool.on("connection", (connection) => {
  connection.query("SET time_zone = '-03:00'", (err) => {
    if (err) {
      console.error("Erro ao configurar fuso horário:", err.message);
    }
  });
});

export async function testarConexao() {
    try {
        await pool.query("SELECT 1");
        console.log("✅ Conexão com o MySQL bem-sucedida!");
    } catch(err) {
        console.error("❌ Falha ao conectar com o MySQL:", err.message);
    }
}
