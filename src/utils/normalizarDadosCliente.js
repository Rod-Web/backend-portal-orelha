export function normalizarDadosCliente(cpf, nome, idade, email, senha, telefone, cep, numero) {
      //NORMALIZAÇÃO
      cpf = cpf.trim().replace(/\D/g, "");
      
      nome = nome
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase() // Tudo minusculo
        .replace(/\b\w/g, (letra) => letra.toUpperCase()); // Primeira letra de cada palavra maiuscúla
      
      email = email.trim();
      
      telefone = telefone.trim().replace(/\D/g, "");
      
      cep = cep.trim().replace(/\D/g, "");
      
      numero = numero.trim();

      return {
        cpf,
        nome,
        idade,
        email,
        senha,
        telefone,
        endereco: {
            cep,
            numero
        }
    };
}