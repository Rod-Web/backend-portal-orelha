import { pool } from "../config/conexao.js";

export async function repositoryBuscarPets() {
    const [pets] = await pool.query("SELECT * FROM pet");
    return pets;
};

export async function repositoryBuscarPetsPorCampo(campo, valor) {
    const [pets] = await pool.execute(`SELECT * FROM pet WHERE ${campo} = ?`, [valor]);
    return pets;
};

export async function repositoryEditarPet(id, dados) {
    const { img, nome, idade, especie, peso, raca, status, sexo, descricao } = dados;
    const query = "UPDATE pet SET imagem = ?, nome = ?, idade_aproximada_em_dias = ?, especie = ?, peso = ?, raca = ?, status = ?, sexo = ?, descricao = ? WHERE numero_identificacao = ?";
    const values = [img, nome, idade, especie, peso, raca, status, sexo, descricao, id];
    const [result] = await pool.execute(query, values);
    return result.affectedRows;
}

export async function repositoryDeletarPetPorId(id) {
    const [pet] = await pool.execute(`DELETE FROM pet WHERE numero_identificacao = ?`, [id]);
    return pet.affectedRows;
};

export async function repositoryCadastrarPet(dados) {
    const { img, nome, idade, especie, peso, raca, status, sexo, descricao } = dados;
    const query = "INSERT INTO pet (imagem, nome, idade_aproximada_em_dias, especie, peso, raca, status, sexo, descricao) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [img, nome, idade, especie, peso, raca, status, sexo, descricao];
    const [result] = await pool.execute(query, values);
    return result.affectedRows;
}
