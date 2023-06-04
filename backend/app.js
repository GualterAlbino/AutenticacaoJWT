//Importação de bibliotecas
const express = require(`express`);
const cors = require(`cors`);
const mongoose = require(`mongoose`);
const morgan = require(`morgan`);
const dotenv = require('dotenv');
const UsuarioModel = require('./src/models/UsuarioModel');
dotenv.config();


const port = process.env.PORT;

const app = express();
app.use(express.json()); //Configura JSON como resposta padrão para testar no postman
app.use(cors());
//app.use(morgan(`dev`));


class App {
    constructor(){
        this.app
    }
    inicializar(){

        //Inicialização da aplicação
        app.listen(port, () => {
            console.log(`Aplicação em execução na porta: ${port}`);
        })


        //Conectando com o banco
        const DataBaseConfig = require(`./src/config/DataBaseConfig`)
        new DataBaseConfig(app)

        //Instanciando as tabelas (obejtos) no banco
        new UsuarioModel();


        //Instanciando as rotas
        const IndexRoute = require(`./src/routes/IndexRoute`)
        new IndexRoute(app);

        const UsuarioRoute = require(`./src/routes/UsuarioRoute`);
        new UsuarioRoute(app);

            
    }
}

new App().inicializar();