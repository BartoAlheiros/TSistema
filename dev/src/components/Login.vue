<template>
  <b-container><br>
    <img src="../assets/logo.png"><br>
    
    <b-form>
      <label for="login"></label>
      <b-row id="user">
        <b-col sm="3">
          <label :for="txtLogin"></label>
        </b-col>
        <b-col sm="9">
          <b-form-input :id="txtLogin" :type="text" placeholder="Usuário" v-model="user.login"></b-form-input>
        </b-col>
      </b-row><br><br>
      
      <b-row id="password">
        <b-col sm="3">
          <label :for="passwordField"></label>
        </b-col>
        <b-col sm="9">
          <b-form-input :id="passwordField" :type="password" placeholder="Senha" v-model="user.password"></b-form-input>
        </b-col>
      </b-row>

      <div id="combo">
        <b-form-select v-model="selected" :options="options" class="mb-3" size="sm">
        </b-form-select>
      </div>
      <label id="legenda" for="comboPrivilegio">*Selecione um tipo de conta</label><br><br>
    </div>
    <div id="loginBttn">
     <b-button @click="validarLogin" style="background-color: #127a38;">Entrar</b-button>
     <!--<b-button :pressed="false" style="background-color: #127a38;" @click="testeMetodo">Entrar</b-button>-->
     <p id="demo"></p>
   </div>
 </b-form>
 <br><br><br><br>
 <div id="quemSomos" ref="quemSomos">
  <p>Teste</p>
</div>
</b-container>
</template>


<script>
import router from '../router/index.js'
export default {
  name: 'test',
  data () {
    return {
      msg: 'Cadastro.',
      user: {},
      showDismissibleAlert: false,
      selected: 'a',
      options: [
      { value: 'a', text: 'Cliente' },
      { value: 'b', text: 'Técnico' },
      { value: 'c', text: 'Recepção' }
      ],
      html: '<a href="#">Link</a>',
      registros: [{
        usuario: 'usuario1',
        senha: 'senha123'
      },
      {
        usuario: 'usuario2',
        senha: 'senha456'
      },
      {
        usuario: 'usuario3',
        senha: 'senha789'
      }
      ]
    }
  },
  methods: {
    validarLogin () {
      for (var i = 0; i < this.registros.length; i++) {
        console.log('rodei o for')
        if (this.user.login === this.registros[i].usuario && this.user.password === this.registros[i].senha) {
          alert('Voce conseguiu logar.')
          router.push('/painelAdmin')
          break
        } else {
          alert('Login ou senha incorretos')
          break
        }
      }
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./css/login.css">
</style>
