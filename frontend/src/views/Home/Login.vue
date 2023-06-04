<template>
    <div class="Login">
        <v-app id="inspire">     


            <v-card class="my-auto mx-auto" width="30%" elevation="24" loading>
                <v-container class="my-7">

                    <v-card-title class="justify-center">Login</v-card-title>
                    <v-form ref="form" v-model="valid" lazy-validation>

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
                                    class="mr-5"
                                    @click="Entrar"
                                   

                                >Entrar</v-btn>

                                <v-btn
                                    color="blue darken-4 white--text"
                                    class=""
                                    @click="teste"
                                    to="/cadastro"
                                >Cadastrar</v-btn>


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
            email:"",
            senha:""
        },
      
        validaEmail: [v => !!v || "E-mail é obrigatório!", v => /.+@.+\..+/.test(v) || "Informe um e-mail válido."],
        validaSenha: [v => !!v || "Senha é obrigatória!", v => (v && v.length >= 1) || "A senha deve conter 8 caracteres"]
    }),
    methods: {
        
    
        Entrar(usuario){

            try {
                if((usuario.email != '') && (usuario.senha != '')){
                    UsuarioHttpUtil.loginUsuario(this.usuario)
                    alert("ok")
                }
            } catch (error) {
                alert("merda")
            }
            console.log(JSON.stringify(this.usuario))
           
           
        }
      
    },
 
}
</script>