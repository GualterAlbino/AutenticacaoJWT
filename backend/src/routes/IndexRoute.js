/*
* ROTA DEFAULT DA API
*/

const IndexController = require(`../controllers/IndexController`)


class IndexRoute {
    constructor(app){

        app.get("/", IndexController.inicializacao)
        
    }
}

module.exports = IndexRoute;

