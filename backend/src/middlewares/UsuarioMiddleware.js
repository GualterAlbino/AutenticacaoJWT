const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config();



class UsuarioMiddleware{

        static async ValidaToken(req, res, next){
            const authHeader = req.headers['authorization']
            const token = authHeader && authHeader.split(" ")[1]//Verifico se existe um token, e se existe pego a segunda metade dele

            if(!token) {
                return res.status(401).json({ msg: "Acesso negado!" })
            }

            try {
                const secret = process.env.SECRET_KEY

                jwt.verify(token,secret)

                next()
                
            } catch (error) {
                res.status(400).json({ msg: "Token invalido!" })
                console.log(`[TOKEN]: VALIDAÇÃO DE TOKEN => ERRO: ${error}`)
            }
                
            
        }  

    

}

module.exports = UsuarioMiddleware

