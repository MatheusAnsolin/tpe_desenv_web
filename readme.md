# Marcenaria Sob Medida — Portal Institucional e CRUD

**Projeto de Desenvolvimento Web**
**Trilha Pedagógica**
**Nicho:** Móveis Planejados Sob Medida

Este repositório contém o código-fonte completo de um site institucional para uma marcenaria fictícia, com módulo de gerenciamento de conteúdo (CRUD) para portfólio de projetos.

---

# 1. Instalação de Dependências

## Pré-requisitos

* **Node.js** (v16 ou superior) — https://nodejs.org
* **npm** (incluído com o Node.js)

## Backend

```bash
cd backend
npm install
```

### Dependências principais

* **express** — Framework web
* **sequelize** — ORM para banco de dados
* **sqlite3** — Banco SQLite
* **jsonwebtoken** — Autenticação JWT
* **bcrypt** — Hash de senhas
* **cors** — Controle de requisições cross-origin
* **dotenv** — Variáveis de ambiente

## Frontend

```bash
cd frontend
npm install
```

### Dependências principais

* **react** — Biblioteca de interface
* **react-dom** — Renderização no DOM
* **vite** — Bundler e servidor de desenvolvimento
* **@vitejs/plugin-react** — Plugin React para Vite

---

# 2. Configuração

## Backend — Arquivo `.env`

Crie ou edite `backend/.env` com base em `backend/.env.example`:

```env
PORT=4000
JWT_SECRET=sua_chave_secreta_muito_segura_aqui
DATABASE_FILE=./data/database.sqlite
```

### Variáveis

| Variável        | Descrição                                  |
| --------------- | ------------------------------------------ |
| `PORT`          | Porta do servidor (padrão: 4000)           |
| `JWT_SECRET`    | Chave utilizada para assinar os tokens JWT |
| `DATABASE_FILE` | Caminho do banco SQLite                    |

## Banco de Dados

O banco é criado automaticamente na primeira execução.

Para popular com dados de exemplo:

```bash
cd backend
npm run seed
```

### Dados criados pelo seed

* Usuário administrador

    * **Email:** `admin@marcenaria.local`
    * **Senha:** `Password123!`
* 12 projetos de exemplo no portfólio.

---

# 3. Execução do Projeto

Abra dois terminais.

## Terminal 1 — Backend

```bash
cd backend
npm run dev

# ou
npm start
```

Servidor:

```
http://localhost:4000
```

## Terminal 2 — Frontend

```bash
cd frontend
npm run dev
```

Servidor:

```
http://localhost:5173
```

---

## Estrutura do Projeto

```text
tpe_desenv_web/
├── backend/
│   ├── data/
│   │   └── database.sqlite
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── seed.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── api.js
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── README.md
└── RELATORIO_TECNICO.md
```

---

# 4. Acesso ao Sistema

## Site Público

```
http://localhost:5173
```

Portfólio público de projetos.

## Painel Administrativo

Acesse:

```
http://localhost:5173
```

Clique em **Painel Admin**.

### Credenciais

**Email**

```
admin@marcenaria.local
```

**Senha**

```
Password123!
```

### Funcionalidades

* ✅ Listar projetos
* ✅ Criar projeto
* ✅ Editar projeto
* ✅ Excluir projeto

---

## Campos do Projeto (CRUD)

| Campo       | Tipo    | Descrição                |
| ----------- | ------- | ------------------------ |
| `titulo`    | String  | Nome do projeto          |
| `descricao` | Text    | Detalhes do projeto      |
| `cliente`   | String  | Nome do cliente          |
| `dimensoes` | String  | Ex.: 3.5m x 2.8m         |
| `materiais` | String  | Ex.: MDF, Laca branca    |
| `preco`     | Decimal | Valor em R$              |
| `imagemUrl` | String  | URL da imagem (opcional) |

---

# API REST (Backend)

## Endpoints Públicos

| Método | Endpoint            | Descrição                    |
| ------ | ------------------- | ---------------------------- |
| GET    | `/api/health`       | Verifica a saúde do servidor |
| GET    | `/api/projetos`     | Lista todos os projetos      |
| GET    | `/api/projetos/:id` | Detalhes de um projeto       |

## Endpoints Protegidos (JWT)

| Método | Endpoint            | Descrição         |
| ------ | ------------------- | ----------------- |
| POST   | `/api/auth/login`   | Login             |
| POST   | `/api/projetos`     | Criar projeto     |
| PUT    | `/api/projetos/:id` | Atualizar projeto |
| DELETE | `/api/projetos/:id` | Excluir projeto   |

---

## Exemplo de Login

```bash
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@marcenaria.local","password":"Password123!"}'
```

Resposta:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": 1,
    "email": "admin@marcenaria.local",
    "name": "Administrador"
  }
}
```

---

# Troubleshooting

## Porta 4000 em uso

Edite o arquivo `.env`:

```env
PORT=5000
```

---

## Erro

```
ENOENT: no such file or directory...
```

Execute:

```bash
npm run seed
```

Certifique-se de que existe a pasta:

```
backend/data/
```

---

## Frontend não conecta ao Backend

Verifique se:

* Backend está rodando em `http://localhost:4000`;
* O CORS está habilitado em `app.js`.

---

## Token JWT expirado

Faça login novamente no painel administrativo.

---

# Tecnologias Utilizadas

| Camada         | Tecnologia        | Versão      |
| -------------- | ----------------- | ----------- |
| Frontend       | React             | 18.2+       |
| Build          | Vite              | 5.0+        |
| Backend        | Node.js + Express | 18.2+       |
| ORM            | Sequelize         | 6.32+       |
| Banco de Dados | SQLite3           | 5.1+        |
| Autenticação   | JWT + bcrypt      | 9.0+ / 5.1+ |

---

# Notas Adicionais

* Banco de dados em **SQLite**, ideal para desenvolvimento local.
* Senhas armazenadas utilizando **bcrypt** com **10 rounds de salt**.
* Tokens JWT possuem validade de **8 horas**.
* **CORS** habilitado para comunicação entre frontend e backend.
