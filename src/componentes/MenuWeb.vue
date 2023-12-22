<template>
  <nav class="navigation">
    <a class="botones" target="blank"  href="https://www.linkedin.com/in/jairogargon/">
      <img class="iconoRedes" src="../assets/linkedin.png" alt="icono portada">
      <span class="text">Linkedin</span>
    </a>
    <a class="botones"  target="blank" href="https://github.com/JairoGarGon">
      <img class="iconoRedes" src="../assets/githubLogo.webp" alt="icono portada">
      <span class="text">Conóceme</span>
    </a>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <router-link class="botones" :class="{ 'active': $route.name === 'Conoceme' }" to="/conoceme">
      <img class="icons" src="../assets/conoceme.webp" alt="icono portada">
      <span class="text">Conóceme</span>
    </router-link>
    <router-link class="botones" :class="{ 'active': $route.name === 'Formacion' }" to="/formacion">
      <img class="icons" src="../assets/estudios.webp" alt="icono portada">
      <span class="text">Formación</span>
    </router-link>
    <router-link class="botones" :class="{ 'active': $route.name === 'Contacto' }" to="/contacto">
      <img class="icons" src="../assets/contacto.webp" alt="icono portada">
      <span class="text">Contácto</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'MenuWeb',

  data() {

  },

  methods: {
    
  }
}
</script>

<style scoped>


.imagenDescripcion.menu-active {
  /* transform: scale(0.8) translateY(20vw); */
}

.tooltip {
  position: fixed;
  bottom: 25%;
  left: 40%;
  transform: translateX(-40%);
  background-color: var(--color0);
  color: var(--color1);
  padding: 18px  !important;
  font-family: var(--fuenteTextos);
  font-weight: 700;
  font-size: 1.2em;
  border-radius: 50px 50px 50px 5px;
  border: 2px solid var(--color2);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.tooltip.show {
  opacity: 1;
}
.navigation {
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  flex-wrap: wrap;
  position: fixed;
  bottom: 5vh;
  right: 0;
  background-color: transparent !important;
  z-index: 5;
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

.botones:hover {
  background-color: var(--color2);
  border: 0.2px solid var(--color3);
  color: var(--color2);
}



.botones.active {
  background-color: var(--color2);
  border: 0.1px solid var(--color4) !important;
}
.text {
  opacity: 0;
  display: flex;
  position: fixed;
  top: 70px;
  transition: opacity 0.3s ease-in-out;
  background-color: transparent;
  font-size: .8em;
}
.text:hover{
  opacity: 1;
}

.icons , .iconoRedes{
  width: 30px;
  margin: .5vw !important;
  background-color: transparent !important;
}

.icons.active-icon, .icons:hover {
  filter:invert(1);
}

@keyframes revelarSaly {
    0% {
      transform: translateY(200px) translateX(-200px);
    }
    100% {
      transform: translateY(0px) translateX(0px);
    }
  }

/* Tablet */
@media screen and (min-width: 471px) and (max-width: 800px) {

}
/* portatil */
@media screen and (min-width: 801px) {


}
</style>
