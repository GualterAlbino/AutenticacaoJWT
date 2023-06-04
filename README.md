<h1 align="center"> Autenticação Utilizando JWT </h1>

## Aplicação desenvolvida com o objetivo de praticar o uso das bibliotecas: jsonwebtoken e bcrypt.


## ✅ Funcionalidades do projeto:
- `Cadastro de Usuarios`: Possibilita o cadastro de usuario fazendo as devidas validações dos campos. 
- `Login de Usuario`: Posssibilita realizar o login validando o usuario e senha. 
- `Token`: Possibilita a geração e validação do token gerado.

## 📁 Utilização do projeto:

### Requisitos:

Instalaçao: `git`, `node`, `postman`.
Ter uma conta no `MongoDB Atlas`.


### 📥 Instalação de BackEnd

1. `cd AutenticacaoJWT/Backend`
2. `npm i`
3. Acessar o arquivo `.env`
4. Preencher os seguintes campos de acordo com suas credenciais do MongoDB:
5. `DB_USER=`
6. `DB_PASSWORD=`
7. `DB_HOST=`
8. `DB_NAME=`
9. Comando para incialização: `npm run dev`


## 🧭 Rotas usadas no Postaman:

1. (GET)Rota default: `http://localhost:3000/`

2. (GET)Rota de Login: `http://localhost:3000/usuario/login`
Parâmetros: { "email": "", "senha": "" }

3.(POST)Rota de Registro: `http://localhost:3000/usuario/registro`
Parâmetros:{ "nome": "", "email": "", "senha": "", "confirmaSenha": "" }

## ⚙️ Bibliotecas e dependências utilizadas:
1. bcrypt
2. dotenv
3. express
4. jsonwebtoken
5. mongoose
6. nodemon


