import { pool } from "../config/conexao.js";
import { pets } from '../APIs/petsFic.js'
export function repositoryBuscarPets() {
    /*
    const pets = pool.query("SELECT * FROM pet");
    return pets;
    */

    console.log(pets);
    return pets;
};