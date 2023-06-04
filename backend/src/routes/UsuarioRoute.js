const UsuarioController = require("../controllers/UsuarioController");
const UsuarioMiddleware = require("../middlewares/UsuarioMiddleware");

class UsuarioRoute{
    constructor(app){
        
        //Rota: (POST) localhost:3000/usuario/registrar
        app.post("/usuario/registrar",UsuarioController.registrarUsuario);
        app.post("/usuario/login",UsuarioController.loginUsuario)

        //rota privada(Necessita do ID e do TOKEN)
        app.get("/usuario/:id",UsuarioMiddleware.ValidaToken,UsuarioController.acessoUsuario)
    }
}

module.exports = UsuarioRoute;