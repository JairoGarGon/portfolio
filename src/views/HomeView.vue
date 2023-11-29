<template>
  <div class="inicio">
    <h1 class="texto1">Jairo García González</h1>
    <h2 class="texto2">Front End Developer</h2>
    <router-link class="botonInicio" to="/conoceme">Conozcámonos</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {}
}
</script>

<style scoped>
.inicio {
  width: 100%;
  height: 100vh;
  background-image: url(../assets/escritorio2.webp);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 200vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.texto1,
.texto2 {
  text-align: center;
  z-index: 2;
  background-color: transparent;
  line-height: 1.1;
  text-shadow: var(--sombraTexto);
  font-family: var(--fuenteTitulos);
}

.texto1 {
  color: var(--color2);
  font-size: 3rem;
  padding-top: 10vh !important;
  animation: down 1.5s linear;
  background-color: transparent;
}

.texto2 {
  padding-top: 5vh !important;
  color: var(--color1);
  font-size: 2rem;
  letter-spacing: 0px !important;
  animation: right 1.5s linear;
}

.botonInicio {
  animation: revelarBoton 1.5s;
  height: 5vh;
  width: 80vw;
  border-radius: 15px;
  background-color: var(--color1);
  border: var(--borde);
  color: var(--color4);
  display: flex;
  margin: 5vh auto !important;
  font-size: 1.8em;
  font-family: var(--fuenteTextos);
  letter-spacing: 2px;
  align-items: center;
  justify-content: center;
  padding: 0.2em;
  text-decoration: none;
  position: relative;
  z-index: 2;
}

.botonInicio:hover, .botonInicio:active {
  background-color: var(--color2);
  border: 0.1px solid var(--color4);
  color: var(--color3);
}


@keyframes revelarBoton {
  0% {
    transform: translateY(200px) rotate(20deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}

@keyframes down {
  0% {
    transform: translateY(-8rem);
  }
  50% {
    transform: translateY(-4rem);
  }
  100% {
    transform: translateY(0rem);
  }
}

@keyframes right {
  0% {
    transform: translateX(-20rem);
  }
  100% {
    transform: translateX(0);
  }
}

/* Media Queries para diferentes tamaños de pantalla */


/* Tablet */
@media screen and (min-width: 471px) and (max-width: 800px) {
.inicio {
  background-size: 100vw;
}
.texto1 {
  font-size: 3.5rem;
  padding-top: 18vh !important;
}

.texto2 {
  padding-top: 8vh !important;
  font-size: 2.5rem;
}

.botonInicio {
  width: 35vw;
  margin: 10vh auto !important;
}
}
@media screen and (min-width: 801px) {
.inicio {
  background-size: 100vw;
}
.texto1 {
  font-size: 7rem;
  padding-top: 15vh !important;
}

.texto2 {
  padding-top: 5vh !important;
  font-size: 5rem;
}

.botonInicio {
  width: 30vw;
  margin: 5vh auto !important;
}
}
</style>