<!--eslint-disable--> 
<template>
  <div >
    <v-card class="my-9 mx-auto" width="70%" v-if="mostrarForm">

      <v-row justify="center">
        <v-btn absolute fab class="error white--text " @click="mostrarForm=false">
          <v-icon dark>mdi-close</v-icon>
        </v-btn>
      </v-row>
      
     
      <!--Botão apresentado para fechar a tela de novo usuario-->
   


      <!--Dentro do Template foi criado esse cointainer para agrupar os elementos do FORM-->
      <v-container>
        <div class="mb-9 px-4 pt-4">{{ formTitulo }}</div>
        <v-row>

          <v-col cols="12" sm="6" >
            <v-text-field label="Nome" outlined v-model="usuarioAtual.nome"></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" >
            <v-text-field label="Username"  outlined v-model="usuarioAtual.username"></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" >
            <v-text-field label="E-mail" outlined v-model="usuarioAtual.email" ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" >
            <v-text-field label="Senha" outlined v-model="usuarioAtual.senha" type="password"></v-text-field>
          </v-col>


        </v-row>
      </v-container>

      <v-card-actions>
        <v-row justify="center">
          <v-btn class="success white--text mx-2 mb-6" @click="salvar">Salvar</v-btn>
          <v-btn class="error white--text mx-2 mb-6" @click="cancelar">Cancelar</v-btn>
        </v-row>
      </v-card-actions>

    </v-card>



    <v-data-table :headers="cabecalho" :items="usuarios" sort-by="id" class="elevation-1">
      <!--Ao criar lá em baixo a estrutura da tabela, deve-se alterar aqui também-->



      <!--Topo da tabela (Titulo e botão)-->
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Usuários Cadastrados</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-btn color="primary" class="white--text" @click="abrirFormulario" v-if="!mostrarForm">Novo Usuário</v-btn>
        </v-toolbar>
      </template>
      <!--V-IF faz com que determinado elemento só apareça se for TRUE-->



      <!--Coluna da tabela referente a edição, ativação e inativação de usuarios-->
      <template v-slot:item.acoes="{ item }">

        <v-icon small class="mr-2" @click="editar(item)">
          mdi-pencil
        </v-icon>
        <!--Se o meu usario estiver ativo (true) ele exibe um icone, se não, ele exibe outro-->
        <v-icon small @click="ativarInativar(item)">
          {{ item.ativo ? "mdi-cancel" : "mdi-check-bold" }}
        </v-icon>
      </template>



      <!--Informação exibida se não houver usuario cadastrado-->
      <template v-slot:no-data>
          <v-subheader>Nenhum Usuario Cadastrado</v-subheader>
      </template>



    </v-data-table>
  </div>
</template>

<script>

//import UsuarioHttpUtil from '../util/UsuarioHttpUtil';

export default {
  data: () => ({
    itemEdicao : null,
    usuarios: [{ nome: "Gualter Albino", username: "Gualter", email: "gualter@gmail.com"}],
    usuarioAtual : {},
    GeradorDeId : 3,
    mostrarForm: false,
    cabecalho: [
      //Os campos VALUE devem coincidir com os criados no objeto usuario
      {text:"Nome", value: "nome"},
      {text:"Username", value: "username"},
      {text:"E-mail", value: "email"},
      {text:"Ações", value: "acoes"}
    ]
  }),

  computed: {
    formTitulo(){
        return this.itemEdicao === null ? "Novo usuário" : "Editar usuário";
    },
  },

  //Ao ser criado invoca o initialize invocando os Usuarios de exemplo
  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      UsuarioHttpUtil.buscarTodos().then((usuarios) =>{
        this.usuarios = usuarios
    })
    },

    abrirFormulario() {
      this.mostrarForm = true
    },

    //O atributo ATIVO do OBJETO usuario se inverte ao seleciona-lo, trocando assim seu icone
    ativarInativar(usuario) {
      if(confirm("Tem certeza que deseja mudar o status?")){
        usuario.ativo = !usuario.ativo

        UsuarioHttpUtil.editar(usuario).then((resposta) => {
          if(resposta.status == 200){
            alert("Status alterado")

          }else {
            alert("Erro ao alterar status do usuario")
          }
        })
      }
      
    },

    salvar(){
      if( this.itemEdicao == null ){
        this.adicionar()
      }else {
        this.salvarEdicao();
      }
      this.mostrarForm = false
      this.cancelar()
    },

    cancelar(){
      this.usuarioAtual = {}
      this.itemEdicao = null;
    },

    adicionar(){
      let usuarioCopia= {}
      usuarioCopia.ativo = true
      //Essa função copia dos campos para um objeto para só então salvar
      Object.assign(usuarioCopia, this.usuarioAtual)

      UsuarioHttpUtil.adicionar(usuarioCopia).then((response) => {
        if(response.status == 200){
          alert("Usuario cadastrado com sucesso!")
          this.initialize();
        }else{
          alert("Erro ao cadastrar usuario!")
        }
      })
  
    },
    editar(usuario){
      let usuarioCopia= {}
      Object.assign(usuarioCopia, usuario)
      this.itemEdicao = usuarioCopia
      this.usuarioAtual = usuarioCopia
      this.mostrarForm = true
    },
    //Percorre o ARRAY de usuarios procurando pelo indice e utiliza a função splice que susbtitui um elemento por outro (1,1)
    salvarEdicao(){
      UsuarioHttpUtil.editar(this.itemEdicao).then((response) => {
        if(response.status == 200){
          alert("Cadastro editado!")
          this.initialize();
        }else {
          alert("Cadastro não editado!")
        }
      })
    }

  
    
  },
}
</script>