<template>
    <div class="Login">
        <v-app id="inspire">     


            <v-card class="my-auto mx-auto" width="30%" elevation="24" loading>
                <v-container class="my-7">

                    <v-card-title class="justify-center">Cadastro</v-card-title>

                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-row cols="12" sm="6" >
                        <v-icon class="pl-5 pa-5">mdi-account</v-icon>
                        <v-text-field
                        v-model="usuario.nome"
                        :rules="validaNome"
                        label="Nome"
                        required
                        class="pr-10"
                        
                        ></v-text-field>
                    </v-row>

                    <!--Campo de E-mail-->
                    <v-row cols="12" sm="6" >
                        <v-icon class="pl-5 pa-5">mdi-email</v-icon>
                        <v-text-field
                        v-model="usuario.email"
                        :rules="validaEmail"
                        label="E-mail"
                        required
                        class="pr-10"
                        
                        ></v-text-field>
                    </v-row>

                    <!--Campo de Senha-->
                    <v-row>
                    <v-icon class="pl-5 pa-5" >mdi-lock</v-icon>
                    <v-text-field
                        type="password"
                        v-model="usuario.senha"
                        :rules="validaSenha"
                
                        label="Senha"
                        required
                        class="pr-10"
                        ></v-text-field>
                    </v-row>
                    
                    <!--Botões de ENTRAR e CADASTRAR-->
                    <v-card-actions >
                        <v-col>

                            <v-row justify="center" class=" mt-5">
                                
                                <v-btn
                                    color="blue darken-4 white--text"
                                    class=""
                                    @click="cadastrar"
                                    to="/cadastro"
                                >Cadastrar</v-btn>
                            </v-row>
                            <v-row class="justify-center mt-5">
                                <span>Já tem uma conta? </span>
                                
                                <router-link to="/">login</router-link>
                            </v-row>
                            
                        </v-col>
                    </v-card-actions>
                    
                    </v-form>
                </v-container>
            </v-card>

            <!--Rodapé-->
            <v-footer app class="blue darken-4"> 
                <span class="white--text" >Gualter &copy; {{ new Date().getFullYear() }}</span>
                    <v-col></v-col>
                <span class="white--text" >{{ new Date().getUTCHours()-3 + ':' + new Date().getMinutes() }}</span>
            </v-footer>

        </v-app>
    </div>
</template>

<script>
import UsuarioHttpUtil from '../../util/UsuarioHttpUtil';
import swal from 'sweetalert';

export default {
data: () => ({
    usuario:{
        nome:"",
        email:"",
        senha:""
    },
    camposPreenchidos : false,
    
    validaNome: [v => !!v || "O nome é obrigatório!", v => (v && v.length >= 5) || "Informe o nome completo"],
    validaEmail: [v => !!v || "E-mail é obrigatório!", v => /.+@.+\..+/.test(v) || "Informe um e-mail válido."],
    validaSenha: [v => !!v || "Senha é obrigatória!", v => (v && v.length >= 8) || "A senha deve conter 8 caracteres"],
    
}),
methods: {
    

    async cadastrar(){
        console.log(JSON.stringify(this.usuario))
        try {
            /*
            if((this.usuario.nome != '' ) && (this.usuario.email != '') && (this.usuario.senha != '')){
                swal({
                title: "Ação impossivel",
                text: "É obrigatorio o preenchimento de todos os campos",
                icon: "error"
                }); 
                return;  
            }
*/
            await UsuarioHttpUtil.registrarUsuario(this.usuario)
            
                this.$router.push('/');
            
            
        
        } catch (error) {
            console.log(error)
            swal({
                title: "Ação impossivel",
                text: "Algo de errado não está certo",
                icon: "error"
                }); 
        }
        
    }
    
},

}
</script>