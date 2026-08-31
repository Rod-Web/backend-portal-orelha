import mysql2 from 'mysql2/promise';
import { bancoDeDados } from './credenciais.js';

export const pool =  mysql2.createPool({        
        host: bancoDeDados().host,
        port: bancoDeDados().porta,
        database: bancoDeDados().database,
        user: bancoDeDados().usuario,
        password: bancoDeDados().senha
    })

export async function testarConexao() {
    try {
        await pool.query("SELECT 1");
        console.log("✅ Conexão com o MySQL bem-sucedida!");
    } catch(err) {
        console.error("❌ Falha ao conectar com o MySQL:", err.message);
    }
}
