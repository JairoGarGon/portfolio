<template>
  <div class="inicio">
    <h1 class="texto1">Jairo García González</h1>
    <h2 class="texto2">Front End Developer</h2>
    <router-link class="botonInicio" to="/conoceme">Conozcámonos</router-link>
    <img class="img1" src="../assets/1.webp" alt="diseño papeles">
    <img  class="img2" src="../assets/2.webp" alt="diseño escritorio">
    <img  class="img3" src="../assets/3.webp" alt="diseño lampara">
    <img  class="img4" src="../assets/4.webp" alt="diseño mueble">
  </div>
</template>

<script>
export default {
  name: 'HomeComponente',
  components: {}
}
</script>

<style scoped>
.inicio {
  width: 100%;
  height: 100vh;
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

.img1, .img2, .img3, .img4{
  position: fixed;
  background-color: transparent;
}
.img1{
  width: 80vw;
  animation: mostrarPapeles 2s linear;
  bottom: 25vh;
}
.img2{
  width: 200vw;
  bottom: 0;
  animation: mostrarEscritorio 2s linear;
}
.img3{
  width: 50vw;
  right: -30vw;
  bottom: 0;
  animation: mostrarLampara 2s linear;
}
.img4{
  width: 55vw;
  bottom: 0;
  left: -20vw;
  animation: mostrarMueble 2s linear;
}


@keyframes mostrarPapeles {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes mostrarEscritorio {
  0% {
    transform: translateY(50vh);
  }
  100% {
    transform: translateY(0vh);
  }
}
@keyframes mostrarLampara {
  0% {
    transform: translateX(50vh);
  }
  100% {
    transform: translateX(0vh);
  }
}
@keyframes mostrarMueble {
  0% {
    transform: translateX(-50vh);
  }
  100% {
    transform: translateX(0vh);
  }
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
  .texto1 {
    font-size: 4rem;
    padding-top: 18vh !important;
  }

  .texto2 {
    padding-top: 4vh !important;
    font-size: 3rem;
  }

  .botonInicio {
    width: 35vw;
    margin: 4vh auto !important;
  }
}

@media screen and (min-width: 801px) {
  .texto1 {
    font-size: 5rem;
    padding-top: 6vh !important;
  }
  
  .texto2 {
    padding-top: 2vh !important;
    font-size: 4rem;
  }

  .botonInicio {
    width: 30vw;
    margin: 4vh auto !important;
  }
  .img1{
    width: 50vw;
    bottom: 25vh;
  }
  .img2{
    width: 100vw;
  }
  .img3{
    width: 30vw;
    right: 0vw;
  }
  .img4{
    width: 30vw;
    left: 10vw;
  }
}
</style>