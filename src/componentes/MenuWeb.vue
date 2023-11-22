<template>
  <div class="navigation">
    <router-link to="/">Conóceme</router-link>
    <router-link to="/formacion">Formación</router-link>
    <router-link to="/experiencia">Experiencia</router-link>
    <router-link to="/contacto">Contácto</router-link>
  </div>
</template>

<script>

export default {
  name: 'MenuWeb',
  mounted() {

  },
  methods: {
    
  }
}
</script>

<style scoped>
.navigation{
  border: 2px solid black;
}
</style>
