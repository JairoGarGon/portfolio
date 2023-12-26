<template>
  <section class="seccion" id="conoceme">
    <h2 class="conoceme">Un poco sobre mí</h2>
    <section class="cajaTextos" ref="cajaTextos">
      <p class="textoDescripcion" ref="parrafo1"></p>
      <p class="textoDescripcion" ref="parrafo2"></p>
      <p class="textoDescripcion ultimo" ref="parrafo3"></p>
    </section>
    <section class="cajaSaly">
        <img class="imagenDescripcion" src="../assets/Saly.webp" alt="diseño de la descripción">
        <img class="dibujoflecha" ref="dibujoflecha" src="../assets/down.png" alt="dibujo flecha" v-if="mostrarFlecha" :class="{ 'show': mostrarFlecha }">
    </section>
    <MenuWeb />
  </section>
</template>

<script>
import MenuWeb from '../componentes/MenuWeb.vue'

export default {
    name: 'ContactoView',
        components: {
            MenuWeb,
        },
        data() {
    return {
      textos: [
        "¡Hola, soy Jairo! Con 39 años de experiencia y un entusiasmo inquebrantable por las nuevas tecnologías.",
        "En la actualidad, me encuentro inmerso en el fascinante mundo del desarrollo Front End.",
        "Intentando canalizar mi pasión para brindar experiencias únicas y cautivadoras a los usuarios."
      ],
      parrafos: [],
      indexParrafo: 0,
      indexLetra: 0,
      mostrarFlecha: false,
    };
  },
  mounted() {
    this.parrafos = [this.$refs.parrafo1, this.$refs.parrafo2, this.$refs.parrafo3];
    this.mostrarParrafosConAnimacion();
  },
  methods: {
    async mostrarParrafosConAnimacion() {
      await this.mostrarLetras();
      this.mostrarFlechaDespuesDelay();
    },
    mostrarLetras() {
      if (this.indexParrafo < this.parrafos.length) {
        const parrafoActual = this.parrafos[this.indexParrafo];
        const texto = this.textos[this.indexParrafo];

        this.mostrarLetra(parrafoActual, texto, this.indexLetra);
      }
    },
    mostrarLetra(parrafo, texto, index) {
      if (index < texto.length) {
        parrafo.innerHTML += texto[index];
        index++;

        setTimeout(() => {
          this.mostrarLetra(parrafo, texto, index);
        }, 50); //velocidad de la animación
        } else {
        this.indexLetra = 0;
        this.indexParrafo++;

        setTimeout(() => {
          this.mostrarLetras();
        }, 500); 
        }
        
    },
    mostrarFlechaDespuesDelay() {
      setTimeout(() => {
        this.mostrarFlecha = true;
      }, 18000); 
    },
    }
}
</script>

<style>
.conoceme{
    width: 100%;
    padding-top: 4vh !important;
    padding-right: 4vw !important;
    display: flex;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
    text-align: center;
    z-index: 2;
    background-color: transparent;
    line-height: 1.1;
    color: var(--color1);
    text-shadow: var(--sombraTexto);
    font-family: var(--fuenteTitulos);
    font-size: 2.2em;
    animation: right 2s linear;
}
.cajaTextos{
    margin-left: 4vw !important;
    margin-top: 2vh !important;
}

.textoDescripcion{
    font-size:.8rem;
    font-weight: 600;
    color:var(--color1);
    letter-spacing: 2px; 
    margin-bottom: 2vh !important;
    padding:5px 10px !important;
    font-family:var(--fuenteTextos);
    width:90vw;
    height:auto;
    border-radius: 5px;
    box-shadow: var(--sombraSuave)
}


.ultimo{
    width: 58vw;
    margin-left: 22vw !important;
}

.cajaSaly{
    position: fixed;
    bottom: 0;
}
.imagenDescripcion{   
    overflow:  hidden !important;
    position:fixed;
    background-color: transparent;
    z-index: 1;
    left:-15vw;
    bottom: -5px !important;
    width: 90vw !important;
    animation: revelarSaly 2s linear forwards;
}

.dibujoflecha{
    width: 50px !important;
    position: fixed;
    bottom: 17vh;
    right: 20vw;
    animation: bounce 2.5s infinite;
    transition: opacity 0.5s ease-in-out; 
    opacity: 0; 
}
.dibujoflecha.show {
    opacity: 1;
}

@keyframes right {
  0% {
    transform: translateX(-20rem);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes revelarTexto{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}


@keyframes revelarSaly {
    0%{
        transform: translateY(25%) translateX(-50%);
    }

    100% {
        transform: translateY(0%) translateX(0%) ;

    }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) rotate(-90deg);
  }
  40% {
    transform: translateX(-25px) rotate(-90deg);
  }
  60% {
    transform: translateX(-20px) rotate(-90deg);
  }
  100% {
    transform: rotate(-90deg);
  }
}

/* Tablet */
@media screen and (min-width: 600px) and (max-width: 800px) {
    .conoceme{
        font-size: 2.5em;
    }

    .textoDescripcion{
        font-size:1rem;
    }

    .imagenDescripcion{   
        left:-15vw;
        bottom: -45vh !important;
        width: 90vw !important;
    }

    .dibujoflecha{
        bottom: 17vh;
        right: 15vw;
    }
}

@media screen and (min-width: 801px) {
    .conoceme{
        font-size: 3em;
    }
    .cajaTextos{
        margin-left: 10vw !important;
        margin-top: 4vh !important;
    }
    .textoDescripcion{
        font-size:1.7em;
        width: 75vw;
        margin-bottom: 4vh !important;
    }
    .ultimo{
        width: 50vw;
        
    }

    .imagenDescripcion{   
        left:-15vw;
        bottom: -50vh !important;
        width: 50vw !important;
    }

    .dibujoflecha{
        bottom: 16vh;
        right: 10vw;
    }
}
</style>