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


<script type="text/javascript" src="./js/login.js">

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./css/login.css">
</style>
