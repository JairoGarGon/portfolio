<template>
    <section class="seccionContacto">
      <h2 class="texto2" id="contacto">Conozcámonos</h2>
      <section class="cajaFormulario">
        <form class="formulario" action="mailto:desarrollowebjairo@gmail.com" method="post" enctype="text/plain">
          <label for="nombre">Nombre:</label>
          <input class="inputForm" type="text" id="nombre" v-model="nombre" required>
    
          <label class="inputForm" for="mensaje">Mensaje:</label>
          <textarea id="mensaje" v-model="mensaje" required></textarea>
    
          <button class="botonEnviar" type="submit" id="neonButton">
            <span>Enviar</span>
          </button>
        </form>
      </section>
      <img class="imagenDescripcion" src="../assets/Saly.webp" alt="diseño de saly">
    </section>
    <MenuWeb />
</template>
  
  <script>
  import MenuWeb from '../componentes/MenuWeb.vue';
  
  export default {
    name: 'ContactoComponente',
    data() {
      return {
        nombre: '',
        mensaje: ''
      };
    },
    components: {
      MenuWeb,
    },
  };
  </script>
  
  <style scoped>
  .seccionContacto {
    width: 100vw;
    height: 100vh;
    overflow: hidden !important;
  }
  
  .texto2 {
    /* ... Tu estilo existente ... */
  }
  
  .cajaFormulario {
    /* ... Tu estilo existente ... */
  }
  
  .formulario {
    /* ... Tu estilo existente ... */
  }
  
  .inputForm {
    /* ... Tu estilo existente ... */
  }
  
  .botonEnviar {
    /* ... Tu estilo existente ... */
    position: relative;
  }
  
  /* Nuevo estilo para el botón con efecto neón */
  #neonButton {
    /* ... Estilos existentes ... */
    overflow: hidden;
  }
  
  #neonButton span {
    display: block;
    width: 100%;
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    padding-top: 15%;
    padding-right: 2.5%;
    font-size: 1.2rem;
    opacity: 0;
    transition: 0.3s ease-out;
  }
  
  #neonButton:hover span {
    opacity: 1;
    font-weight: 700;
  }
  
  #neonButton::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #03e9f4, #ff00c7, #03e9f4, #ff00c7);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    animation: moveNeon 2s linear infinite;
  }
  
  @keyframes moveNeon {
    0% {
      transform: translate(-150%, -150%);
    }
    100% {
      transform: translate(150%, 150%);
    }
  }
  </style>
  