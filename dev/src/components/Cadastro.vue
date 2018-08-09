<template>
 <div>
  <br>
    <b-card-group deck id="cards">
        <b-card header=" "
                header-tag="header"
                footer=" "
                footer-tag="footer"
                title="Empresa"
                class="mb-2"
                style="max-width: 20rem;">
            <br>    
            <p class="card-text">Faça seu cadastro como técnico e desfrute
            de todas as funcionalidades do nosso sistema agora mesmo!</p>
            <br>
            <b-button href="#"
                      variant="primary"
                      id="button">Cadastrar</b-button>
        </b-card>
        <b-card title="Cliente"
                header=" "
                header-tag="header"
                footer=" "
                footer-tag="footer"
                class="mb-2"
                style="max-width: 20rem;">
            <p class="card-text">Fez um chamado e quer saber se já estamos a caminho? Tem alguma ordem de serviço para conferir? Nota fiscal? Interagir com os técnicos? Faça seu cadastro de Cliente!</p>    
            <b-button href="#"
                      variant="primary"
                      id="button">Vamos lá!</b-button>
        </b-card>
    </b-card-group>
</div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'Cadastro',
      showDismissibleAlert: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#button {
  color: white;
  background-color: #127a38;
  border-color: #127a38;
  -webkit-box-shadow: 6px 6px 10px #999; 
     -moz-box-shadow: 6px 6px 10px #999;
          box-shadow: 6px 6px 10px #999;  
}

#cards {
  padding-left: 20px;
}
</style>
