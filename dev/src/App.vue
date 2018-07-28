<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#/">TSistema</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="#/">Home</b-nav-item>
          <b-nav-item href="#/sobre">Quem somos</b-nav-item>
          <b-nav-item href="#/cadastro">Cadastre-se</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
        </b-navbar-nav>

      </b-collapse>
    </nav>

    <!-- navbar-1.vue -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style scoped src="./css/app.css">
</style>