<h2 align="center">
    <br>
    <p align="center">Projeto Final {reprograma}<p>
    <p align="center">Bella Leitura<p>
    <p align="center">Compartilhamento de Livros Infantis<p>
</h2>
<p align="center">
<img src="./assets/bella_leitura_bg.jpg" width="80%" height="50%"/>
</p>
<br>

## 📚 Descrição da API

<br>

<p align="justify">
Esta aplicação visa facilitar a implantação de postos de compartilhamentos de livros infantis. Os postos são estruturas simples, lúdicas e acessíveis às crianças. Localizados na calçada de comércios locais, em áreas próximas a escols públicas, eles visam proporcionar uma experiência continua de descoberta da leitura para o público infantil. 

Através desta aplicação comércios locais (mercados, padarias, farmácias, petshops, etc.) podem se cadastrar como postos de hospedagem das estruturas de compartilhamento de livros. Enquanto outras instituições (editoras, livrarias, sebos, etc.) podem se cadastrar como colaboradores para a doação de livros. Por fim, a comunidade na qual os posto são instalados tem papel fundamental no compartilhamento de livros e pode através da aplicação checar a lista de livros doados e sugeridos para crianças.
  
<br>


## ⚙️ Funcionalidades

- Cadastro de estabelecimentos comerciais para a hospedagem de postos de compartilhamento de livros. 
- Cadastro de empresas colaboradoras para a doação de livros infantis.
- Listagem dos postos de compartilhamento de livros.
- Listagem do catalogo de livros doados e sugeridos para crianças.

<br>

## 📚 Aprendizados

Desenvolvimento de uma API RESTful fundamentada no CRUD (Create, Read, Update, Delete) com integração com o banco de dados MongoDB. Criação de rotas públicas e privadas com sistema de cadastro e login de usuários. 

<br>

## 🛠️ Tecnologias

<br>

Tecnologias utilizadas para desenvolvimento do projeto:

- [Git/GitHub](https://github.com/)
- [Heroku](https://dashboard.heroku.com/apps)
- [JavaScript](https://www.javascript.com/)
- [MongoDB](https://www.mongodb.com/)
- [MongoCompass](https://www.mongodb.com/pt-br/products/compass)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Node.js](https://nodejs.org/en/)
- [Postman](https://www.postman.com/)
- [VScode](https://code.visualstudio.com/)  

### Pacotes Utilizados 

- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv-safe](https://www.npmjs.com/package/dotenv)
- [Express](https://expressjs.com/pt-br/)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon)

<br>

## 📁 Arquitetura MVC 

```
 📁 bella-leitura
   |
   |-  📁 src
   |    |
   |    |- 📁 controllers
   |         |- 📑 authController.js
   |         |- 📑 doacaoController.js
   |         |- 📑 hospedagemController.js 
   |         |- 📑 livrosController.js 
   |
   |    |- 📁 database
   |         |- 📑 MongoConfig.js
   |
   |    |- 📁 middleware
   |         |- 📑 auth.js
   |
   |    |- 📁 models
   |         |- 📑 doacaoSchema.js
   |         |- 📑 hospedagemSchema.js
   |         |- 📑 livroSchema.js
   |         |- 📑 userSchema.js
   |
   |    |- 📁 routes
   |         |- 📑 authRoutes.js 
   |         |- 📑 doacaoRoutes.js
   |         |- 📑 hospedagemRoutes.js
   |         |- 📑 index.js
   |         |- 📑 livrosRoutes.js
   |
   |    |- 📑 app.js
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 LICENSE
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 Procfile
   |- 📑 README.md
   |- 📑 server.js

```
<br>

## 🔃 Rotas

* local: http://localhost:8080

* Heroku: https://bella-leitura.herokuapp.com/

    * Os endpoints da API podem ser testados através do [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/).

<br>

## 🔃 Rota Index 

| Método HTTP  | Endpoint                     | Descrição                            |
| ------------ | ---------------------------- | ------------------------------------ |
| GET          | `http://localhost:8080/`     |  Apresentação (Index)    |             |

<br>

## 🔃 Rotas de Hospedagem:

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| POST         | `/postos/novo-posto`    | Cadastro de posto de compartilhamento          |
| PUT          | `/postos/:id`          | Atualiza de posto de compartilhamento       |
| DELETE        | `/postos/:id`          | Remove posto de compartilhamento          |

<br>

## 🔃 Rotas de Busca por Postos de Compartilhamento:

| Método HTTP  | Endpoint              | Descrição                                  |
| ------------ | --------------------- | ------------------------------------------ |
| GET          | `/postos`         | Retorna todos os postos               |
| GET          | `/postos/bairro`     | Filtra postos por bairro    |
| GET         | `/postos/cidade`   | Filtra postos por cidade
| GET          | `/postos/estado`     |Filtra postos por estado        |           |

<br>

## 🔃 Rotas de Colaboradores Para a Doação de Livros:

| Método HTTP  | Endpoint              | Descrição                                  |
| ------------ | --------------------- | ------------------------------------------ |
| GET          | `/doacao`         | Retorna todos os colaboradores que doam livros.               |
| POST         | `/doacao/nova-doacao`   | Cadastra colaboradores para doação de livros.                    |
| PUT          | `/doacao/:id`     | Altera cadastro do colaborador doador de livros.        |
| DELETE        | `/doacao/:id`     | Remove colaborador da lista de doadores de livros.           |

<br>

## 🔃 Rotas de Cadastramento de Livros:

| Método HTTP  | Endpoint               | Descrição                                         |
| ------------ | ---------------------- | ------------------------------------------------- |
| POST         | `/livros/novo-livro`    | Cadastra um novo livro                       |
| PUT          | `/livros/:id`          | Altera informações de um livro                    
| DELETE        | `/livros/:id`          | Remove um livro específico                        |


<br>

## 🔃 Rotas de Livros Doados/Sugeridos:

| Método HTTP  | Endpoint               | Descrição                                         |
| ------------ | ---------------------- | ------------------------------------------------- |
| GET          | `/livros`              | Retorna todos os livros cadastrados               |
| GET          | `/livros/autor`       | Filtra livros por autor                |
| GET          | `/livros/titulo`          | Filtra livros por título               |

<br>


## ✅ Dados para Collection Hospedagem

- id: autogerado e obrigatório
- nome: texto e obrigatório 
- telefone: texto e obrigatório
- cnpj: texto e obrigatório 
- endereco: texto e obrigatório  
- bairro: texto e obrigatório 
- cidade: texto e obrigatório 
- estado: texto e obrigatório 
- termoDeCompromisso: boolean e obrigatório 
- criadoEm: data gerada automaticamente

<br>

## ✅ API deve retornar seguinte JSON:

```jsx

{
    "message": "Posto de compartilhamento cadastrado com sucesso",
    "hospedagem": {
        "nome": "Acai Tropical Berry ",
        "email": "acaitropical@tropicalberry.com",
        "telefone": "(34) 2477-0512",
        "cnpj": "18.976.496/0001-07",
        "endereco": "Av Perreira Correia , 1272",
        "bairro": "Centro",
        "cidade": "Uberaba",
        "estado": "Minas Gerais",
        "termoDeCompromisso": true,
        "createdAt": "2021-12-16T15:09:59.522Z",
        "_id": "61bb570b9c45654e143eb22a",
        "__v": 0
    }
}

```
 <br>

  ## ✅ Dados para Collection Doacao

- id: autogerado e obrigatório
- nome: texto e obrigatório 
- email: texto e obrigatório
- telefone: texto e obrigatório
- cnpj: texto e obrigatório  
- termoDeCompromisso: boolean e obrigatório 
- criadoEm: data gerada automaticamente

<br>

## ✅ API deve retornar seguinte JSON:
```jsx
{
    "message": "Doador cadastrado com sucesso",
    "doacao": {
        "nome": "Livrooks",
        "email": "livrooks@livrooks.com",
        "telefone": "(11) 2017-0763",
        "cnpj": "70.165.190/0001-82",
        "termoDeCompromisso": true,
        "createdAt": "2021-12-16T15:15:05.260Z",
        "_id": "61bb5868703291a368ea6dc6",
        "__v": 0
    }
}

```

## ✅ Dados para Collection Livros

- id: autogerado e obrigatório
- titulo: texto e obrigatório
- texto: texto e obrigatório
- ilustracao: texto e obrigatório
- tradutores: texto e não-obrigatório
- editora: texto e obrigatório
- idades: texto e obrigatório
- ano: número e obrigatório
- pais: texto e obrigatório
- paginas: número e obrigatório
- idDoador: texto e obrigatório
- createdAt: data gerada automaticamente

<br>


## ✅ API deve retornar seguinte JSON:

```jsx
{
    "message": "Livro cadastrado com sucesso",
    "livro": {
        "titulo": "AMORAS",
        "texto": "Emicida",
        "ilustracao": "Aldo Fabrini",
        "editora": "Companhia das Letrinhas",
        "idades": "3-5, 6-8",
        "ano": 2018,
        "pais": "Brasil",
        "paginas": 44,
        "idDoador": "61bab7e0ff367e6c9d6fcd84",
        "createdAt": "2021-12-16T15:24:34.719Z",
        "_id": "61bb5add1698486c3a191473",
        "__v": 0
    }
}

```

<br>

## 🚧 Implementações Futuras

<br>


* Desenvolvimento Front-end da aplicação.
* Mecanismo de busca dos postos por proximidade.
* Gerenciamento de autorização do sistema.


<br>


## 👨‍💻 Autora

## [Victoria R. Bastos](https://github.com/VictoriaBastos)
## [LinkedIn](https://www.linkedin.com/mwlite/in/victoriarezende253) 

<br>
 

## 📝 Licença

Este projeto esta sob a licença [MIT](./LICENSE).
