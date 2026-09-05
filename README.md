# 📖 Documentação da API - Portal Orelha

Bem-vindo à documentação oficial da API do **Portal Orelha**. Este documento detalha os endpoints disponíveis para a comunicação com o back-end da aplicação, descrevendo as rotas, regras de negócio, parâmetros exigidos e as respostas esperadas.

A API foi desenvolvida seguindo os princípios REST, utilizando primariamente o formato `application/json` para o envio e recebimento de dados, além de adotar os códigos de status HTTP convencionais para o tratamento de sucessos e erros.

### 🔗 Base URL
Todas as requisições devem ser apontadas para o servidor de produção:
> `https://backend-portal-orelha.onrender.com`

---

## 🗂️ Sumário de Rotas

* **Clientes**
  * [`POST /cliente/inserirCliente`](#1-cadastro-de-cliente) - Registra um novo cliente no sistema.
  * *(Adicione aqui outras rotas futuras do seu projeto, ex: `GET /cliente/listar`)*
* **Autenticação** *(Exemplo de módulo futuro)*
  * *(Adicione aqui as rotas de login)*

---

## 🧑‍💻 Especificação dos Endpoints

Abaixo estão detalhadas as especificações de cada rota, começando pelo módulo de clientes.

### 1. Cadastro de Cliente

#### 🚀 `POST` `/cliente/inserirCliente`

Responsável por registrar um novo cliente no sistema. A requisição deve ser feita no formato `application/json`.

**📋 Regras de Validação (Payload)**

| Campo | Tipo | Obrigatório | Regras de Negócio |
| :--- | :--- | :---: | :--- |
| `cpf` | `String` | Sim | • Exatamente 11 dígitos numéricos.<br>• Não pode conter todos os dígitos iguais.<br>• Deve ser um CPF matematicamente válido.<br>• **Único:** Não pode existir outro usuário com o mesmo CPF. |
| `nome` | `String` | Sim | • Tamanho: 3 a 100 caracteres.<br>• Permitido apenas letras (A-Z, a-z). |
| `idade` | `Integer` | Sim | • Valores permitidos: 18 a 120 (anos). |
| `email` | `String` | Sim | • Tamanho: 10 a 200 caracteres.<br>• Formato de e-mail válido (`@`, `.` e domínio).<br>• **Único:** Não pode existir outro usuário com o mesmo e-mail. |
| `telefone` | `String` | Sim | • Tamanho: 10 a 11 dígitos numéricos.<br>• **Único:** Não pode existir outro usuário com o mesmo telefone. |
| `senha` | `String` | Sim | • Tamanho: 8 a 30 caracteres.<br>• **Requisitos:** Mínimo de 1 letra maiúscula, 1 minúscula, 1 número e 1 caractere especial. |
| `endereco` | `Object` | Sim | • Objeto contendo os dados de endereço do cliente. |
| `endereco.cep` | `String` | Sim | • Exatamente 8 caracteres.<br>• Deve ser um CEP válido. |
| `endereco.numero` | `String` | Sim | • Tamanho: 1 a 10 caracteres. |

**💻 Exemplo de Requisição**

```json
{
  "cpf": "12345678909",
  "nome": "Joao Silva",
  "idade": 25,
  "email": "joao.silva@dominio.com",
  "telefone": "11987654321",
  "senha": "Password@123",
  "endereco": {
    "cep": "01001000",
    "numero": "123A"
  }
}

```

---

**📬 Respostas**

**✅ Sucesso**

**`201 Created` - Cliente Cadastrado**
Retornado quando o cliente é inserido com sucesso e todas as validações são aprovadas.

```json
{
  "nomeCliente": "Joao Silva"
}

```

**❌ Respostas de Erro**

Em caso de falha na requisição, a API retornará um objeto JSON contendo a chave `"erro"` com a descrição do motivo da falha, acompanhado do código de status HTTP correspondente.

* **`400 Bad Request` - Erro de Validação de Formato**
Retornado quando a requisição possui campos ausentes, tipos de dados incorretos ou formatos inválidos (ex: ausência de arroba no e-mail, senhas fora do padrão, CEP incompleto).
*Exemplo:*
```json
{
  "erro": "CEP precisa ter exatamente 8 dígitos"
}

```


* **`409 Conflict` - Conflito de Dados**
Retornado quando há uma tentativa de cadastrar um dado que possui regra de unicidade no banco de dados e já está em uso por outro cliente (CPF, e-mail ou telefone).
*Exemplo:*
```json
{
  "erro": "Já existe um usuário com esse CPF"
}

```


* **`422 Unprocessable Entity` - Erro de Regra de Negócio**
Retornado quando a requisição está com o formato correto, mas os dados enviados violam regras de negócio ou semânticas da aplicação (como restrições de idade).
*Exemplo:*
```json
{
  "erro": "Para efetuar o cadastro é necessário ser maior de idade"
}

```


* **`500 Internal Server Error` - Erro no Servidor**
Retornado caso ocorra uma falha inesperada no processamento da requisição ou queda na comunicação com o banco de dados.
*Exemplo:*
```json
{
  "erro": "Erro interno no servidor. Informe o suporte técnico."
}

```



```

```