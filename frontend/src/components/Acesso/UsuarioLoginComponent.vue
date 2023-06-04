<template>
    <div>
        <div class="Login">
    
    <v-app id="inspire">

<v-main>

<v-col class="my-10">
<v-card class="my-10 mx-auto" width="30%" elevation="24" loading>
<v-container class="my-10">

<v-card-title class="justify-center">Login</v-card-title>
  <v-form ref="form" v-model="valid" lazy-validation>

    <!--Campo de E-mail-->
    <v-row cols="12" sm="6" >
      <v-icon class="pl-5 pa-5">mdi-email</v-icon>
        <v-text-field
          v-model="email"
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
          v-model="senha"
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
            :disabled="!valid"
            color="blue darken-4 white--text"
            class="mr-5"
            @click="validate"

          >Entrar</v-btn>

          <v-btn
            color="blue darken-4 white--text"
            class=""
            @click="teste"
          >Cadastrar</v-btn>
      </v-row>
    </v-col>
  </v-card-actions>

  <nav>
  <router-link to="/cadastro">Home</router-link> |
  <router-link to="/about">About</router-link>
  </nav>
  

</v-form>
</v-container>
</v-card>
</v-col>




</v-main>




<v-footer app class="blue darken-4"> 
<span class="white--text" >Abacus - Gualter &copy; {{ new Date().getFullYear() }}</span>
<v-col></v-col>
<span class="white--text" >{{ new Date().getUTCHours()-3 + ':' + new Date().getMinutes() }}</span>
</v-footer>

</v-app>
</div>
    </div>
</template>

<script>
export default {
    nome: "UsuarioLoginComponent",
    data(){
        return{};
    }
}
</script>
