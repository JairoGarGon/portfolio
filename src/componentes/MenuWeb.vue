<template>
  <div class="navigation">
    <a class="btnRedes" href="https://www.linkedin.com/in/jairogargon/" >
      <img class="iconosRedes" src="../assets/linkedinLogo.webp" alt="icono portada">
    </a>
    <a class="btnRedes" href="https://github.com/JairoGarGon" >
      <img class="iconosRedes" src="../assets/github.webp" alt="icono portada">
    </a>
    <br>
    <br>
    <br>
    <br>
    <br>

    <router-link class="botones" to="/conoceme" :class="{ 'active': $route.path === '/conoceme' }">
      <span class="text">Conóceme</span>
      <img class="icons" :class="{ 'active-icon': $route.path === '/conoceme' }" src="../assets/conoceme.webp" alt="icono portada">
    </router-link>
    <router-link class="botones" to="/formacion" :class="{ 'active': $route.path === '/formacion' }">
      <span class="text">Formación</span>
      <img class="icons" :class="{ 'active-icon': $route.path === '/formacion' }" src="../assets/estudios.webp" alt="icono portada">
    </router-link>
    <router-link class="botones" to="/contacto" :class="{ 'active': $route.path === '/contacto' }">
      <span class="text">Contácto</span>
      <img class="icons" :class="{ 'active-icon': $route.path === '/contacto' }" src="../assets/contacto.webp" alt="icono portada">
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
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  animation: derechaMenu 1s;
  position: fixed;
  bottom: 3vh;
  right: 2vw;
  z-index: 2;
}

.botones {
  margin: 2vh 2vw !important;
  height: 55px;
  width: 55px;
  box-shadow: var(--sombraSuave);
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
  /* left: 50%;
  transform: translateX(-50%); */
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
.btnRedes{
  background-color: transparent !important;
}
.iconosRedes{
  background-color: transparent !important;
  width: 45px;
  height: 45px;
  margin-top: 10px !important;
}


@keyframes derechaMenu {
  0% {
    transform: translateX(100px) rotate(20deg);
  }

  100% {
    transform: translateX(0rem) rotate(0deg);
  }
}
/* Tablet */
@media screen and (min-width: 471px) and (max-width: 800px) {

}
/* portatil */
@media screen and (min-width: 801px) {


}
</style>
