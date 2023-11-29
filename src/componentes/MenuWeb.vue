<template>
  <div class="navigation">
    <router-link class="botones" to="/conoceme" :class="{ 'active': $route.path === '/conoceme' }">
      <span class="text">Conóceme</span>
      <img class="icons" :class="{ 'active-icon': $route.path === '/conoceme' }" src="../assets/conoceme.png" alt="icono portada">
    </router-link>
    <router-link class="botones" to="/formacion" :class="{ 'active': $route.path === '/formacion' }">
      <span class="text">Formación</span>
      <img class="icons" :class="{ 'active-icon': $route.path === '/formacion' }" src="../assets/estudios.png" alt="icono portada">
    </router-link>
    <router-link class="botones" to="/experiencia" :class="{ 'active': $route.path === '/experiencia' }">
      <span class="text">Experiencia</span>
      <img class="icons" :class="{ 'active-icon': $route.path === '/experiencia' }" src="../assets/trabajos.png" alt="icono portada">
    </router-link>
    <router-link class="botones" to="/contacto" :class="{ 'active': $route.path === '/contacto' }">
      <span class="text">Contácto</span>
      <img class="icons" :class="{ 'active-icon': $route.path === '/contacto' }" src="../assets/contacto.png" alt="icono portada">
    </router-link>
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
.navigation {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  animation: down 1s;
  position: relative;
  top: 0;
  z-index: 2;
}

.botones {
  margin: 1vh 2vw !important;
  height: 50px;
  width: 50px;
  box-shadow: -4px -4px 14px rgba(255, 255, 255, 0.6),
              4px 4px 14px rgba(70, 70, 70, 0.15);
  border-radius: 50%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: bold;
  font-family: var(--fuenteTextos);
  background-color: var(--color0);
  border: 0.1px solid var(--color2) !important;
  color: var(--color2);
  position: relative;
}

.botones .text {
  opacity: 0;
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.3s ease-in-out;
}
.text{
  bottom: -20px;
  background-color: transparent;
  font-size: .8em;
}

.botones:hover {
  background-color: var(--color2);
  border: 0.2px solid var(--color3);
  color: var(--color2);
  /* filter:invert(1); */
}


.botones:hover .text,
.botones.active .text {
  opacity: 1;
}

.botones.active {
  background-color: var(--color2);
  border: 0.1px solid var(--color4) !important;
}

.icons {
  width: 30px;
  margin: .5vw !important;
  background-color: transparent !important;
}

.icons.active-icon, .icons:hover {
  /* color: var(--color3) !important; */
  filter:invert(1);
}

@keyframes down {
  0% {
    transform: translateY(-200px) rotate(-20deg);
  }

  100% {
    transform: translateY(0rem) rotate(0deg);
  }
}
/* Tablet */
@media screen and (min-width: 471px) and (max-width: 800px) {

}
/* portatil */
@media screen and (min-width: 801px) {


}
</style>
