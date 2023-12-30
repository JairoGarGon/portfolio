<template>
  <section class="seccionContacto">
    <h2 class="contacto" id="contacto">Conozcámonos</h2>

    <form class="formContacto" @submit.prevent="enviarFormulario">
      <label class="textoForm" for="nombre">Nombre:</label>
      <input class="inputForm" type="text" id="nombre" v-model="nombre" required>

      <label class="textoForm" for="mensaje">Mensaje:</label>
      <textarea class="inputForm" id="mensaje" v-model="mensaje" required></textarea>
      
      <div v-if="mensajeEnviado" class="mensaje-exito">Mensaje enviado con éxito. ¡Gracias!</div>
      <div v-if="mensajeError" class="mensaje-error">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.</div>
      
      <div class="cajaBtn">
        <button class="btnForm animated-button1" type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Enviar
        </button>
      </div>

    </form>
    <section class="cajaSaly">
        <img class="imagenDescripcion" src="../assets/Saly.webp" alt="diseño de la descripción">
    </section>
    <MenuWeb />
  </section>
</template>

<script>
import MenuWeb from '../componentes/MenuWeb.vue';

export default {
  name: 'ContactoComponente',
  components: {
            MenuWeb,
        },
  data() {
    return {
      nombre: '',
      mensaje: '',
      mensajeEnviado: false,
      mensajeError: false,
    };
  },
  methods: {
    enviarFormulario() {
      const destinatario = 'jairo1011@hotmail.com';
      const asunto = 'Mensaje desde formulario de contacto';
      const cuerpo = `Nombre: ${this.nombre}%0A%0A${this.mensaje}`;

      const mailtoURL = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

      // Abre el cliente de correo predeterminado del usuario
      window.location.href = mailtoURL;

      // Muestra un mensaje al usuario
      this.mensajeEnviado = true;

      // Puedes agregar un pequeño retraso antes de reiniciar el estado
      setTimeout(() => {
        this.mensajeEnviado = false;
        this.nombre = ''; // Limpiar el formulario si es necesario
        this.mensaje = '';
      }, 3000); // Reinicia el estado después de 3 segundos
    },
  },
};
</script>

<style scoped>
.mensaje-exito {
  color: green;
}

.mensaje-error {
  color: red;
}
.seccionContacto{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start
}
.contacto{
  padding-top: 4vh !important;
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
  animation: top 2s linear;
}
.formContacto{
  animation: revelarForm 2s linear;
  box-shadow: var(--sombraSuave);
  height: auto;
  width: 70vw;
  margin-top: 6vh !important;
  display: flex;
  flex-direction: column;
  padding: 2vh 5vw !important;
  border-radius: 20px 20px 20px 0;
}
.textoForm, .btnForm{
  color: var(--color1);
  font-size: 1.1em;
  font-weight: 600;
  font-family: var(--fuenteTextos);
}
.inputForm{
  margin-bottom: 4vh !important;
  border: 2px solid var(--color1);
}

.cajaBtn{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.btnForm{
  border: 2px solid var(--color2);
  width: 25vw;
  color: #fff;
  letter-spacing: 2px;
  background-color: var(--color1);
}

.animated-button1 {
  -webkit-transform: translate(0%, 0%);
          transform: translate(0%, 0%);
  overflow: hidden;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
}
.animated-button1 span {
  position: absolute;
}

.animated-button1 span:nth-child(1) {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(linear, right top, left top, from(rgba(43, 8, 8, 0)), to(var(--color2)));
  background: linear-gradient(to left, rgba(43, 8, 8, 0), var(--color2));
  -webkit-animation: 2s animateTop linear infinite;
          animation: 2s animateTop linear infinite;
}
.animated-button1 span:nth-child(2) {
  top: 0px;
  right: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(linear, left bottom, left top, from(rgba(43, 8, 8, 0)), to(var(--color2)));
  background: linear-gradient(to top, rgba(43, 8, 8, 0), var(--color2));
  -webkit-animation: 2s animateRight linear -1s infinite;
          animation: 2s animateRight linear -1s infinite;
}
.animated-button1 span:nth-child(3) {
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(linear, left top, right top, from(rgba(43, 8, 8, 0)), to(var(--color2)));
  background: linear-gradient(to right, rgba(43, 8, 8, 0), var(--color2));
  -webkit-animation: 2s animateBottom linear infinite;
          animation: 2s animateBottom linear infinite;
}
.animated-button1 span:nth-child(4) {
  top: 0px;
  left: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(43, 8, 8, 0)), to(var(--color2)));
  background: linear-gradient(to bottom, rgba(43, 8, 8, 0), var(--color2));
  -webkit-animation: 2s animateLeft linear -1s infinite;
          animation: 2s animateLeft linear -1s infinite;
}
@keyframes animateTop {
  0% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
  }
}
@keyframes animateRight {
  0% {
    -webkit-transform: translateY(100%);
            transform: translateY(100%);
  }
  100% {
    -webkit-transform: translateY(-100%);
            transform: translateY(-100%);
  }
}
@keyframes animateBottom {
  0% {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
  }
}
@keyframes animateLeft {
  0% {
    -webkit-transform: translateY(-100%);
            transform: translateY(-100%);
  }
  100% {
    -webkit-transform: translateY(100%);
            transform: translateY(100%);
  }
}













.cajaSaly{
    position: fixed;
}
.imagenDescripcion{   
    overflow:  hidden !important;
    position:fixed;
    background-color: transparent;
    z-index: 1;
    left: -60vw;
    bottom: -20vh !important;
    width: 130vw !important;
    animation: revelarSaly 2s linear forwards;
}



@keyframes revelarForm {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes top {
  0% {
    transform: translateY(-10vh);
  }
  100% {
    transform: translateY(0);
  }
}





@media screen and (min-width: 600px) and (max-width: 800px) {
  .contacto{
    font-size: 3em;
  }
  .formContacto{
    width: 50vw;
  }
  .btnForm{
    width: 25vw;
  }
  .imagenDescripcion{   
    bottom: 0vh !important;
  }
  .imagenDescripcion{   
    left: -70vw;
    bottom: -90vh !important;
    width: 150vw !important;
  }
}
@media screen and (min-width: 801px) and (max-width: 1000px){

  .formContacto{
    width: 35vw;
  }
  .btnForm{
    width: 15vw;
  }

  .imagenDescripcion{   
    left: -30vw;
    bottom: -100vh !important;
    width: 110vw !important;
  }
}
@media screen and (min-width: 1001px){

  .formContacto{
    width: 35vw;
  }
  .btnForm{
    width: 15vw;
  }

  .imagenDescripcion{   
    left: 0vw;
    bottom: -80vh !important;
    width: 60vw !important;
  }
}
</style>