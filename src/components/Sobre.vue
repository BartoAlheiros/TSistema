<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <b-alert show>Alerta Padrão</b-alert>

    <b-alert variant="danger"
             dismissible
             :show="showDismissibleAlert"
             @dismissed="showDismissibleAlert=false">
      Erro! Mensagem de erro...
    </b-alert>
    
    <b-btn @click="showDismissibleAlert=true" variant="info" class="m-1">
      Apresentar Erro! ({{showDismissibleAlert?'visível':'oculta'}})
    </b-btn>
  
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'Quem somos.',
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
</style>
