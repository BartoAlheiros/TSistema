<template>
  <div class="about">
    <h1>{{ msg }}</h1> <br>
    <p id="text">{{ p1 }}</p>
    <p id="text">{{ p2 }}</p>
    <p id="text">{{ p3 }}</p>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'Quem somos',
      p1: 'O TSistema é uma iniciativa ambiciosa de alunos da UFRPE de entrar no mercado de softwares de HelpDesk.',
      p2: 'O sistema é inteiramente focado na experiência tanto dos usuários, quanto dos técnicos em informática e/ou eletrônica, podendo ser extendido a outros públicos futuramente.',
      p3: 'Para mais informações, mande um e-mail para: alheirosb@gmail.com .'
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

#text {
  text-align: justify;
}
</style>
