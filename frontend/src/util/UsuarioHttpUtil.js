const API_URL = "http://localhost:3000/usuario/registrar"


import axios from "axios"
import swal from "sweetalert";

export default {

    async registrarUsuario(usuario){

        try {
            const resposta = axios.post(API_URL,usuario)
            const { token } = (await resposta).data;
            console.log(resposta)
            if(token){
                localStorage.setItem('jwt', token);
                    swal({
                        title:"Excelente!",
                        text:"Usuario cadastrado com sucesso!",
                        icon: 'sucess'
                    })
            }
        } catch (error) {
            alert(error)
            swal({
                title:"Erro!",
                text:"Não foi possivel criar uma conta!",
                icon: 'error'
            })
        }
        //return axios.post(API_URL, usuario).then((response) => response);
    },

    async loginUsuario(usuario){

        
       
        return axios.post(API_URL,usuario).then((response) => response)
    },

    async acessoUsuario(id, token){
        //Nesse caso, além de passar a API devo enviar o ID e o TOKEN do usuario
        return axios.get(API_URL,id,token).then((response) => response.data)
    }

}