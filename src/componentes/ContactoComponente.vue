<template>
  <div>
    <h2 class="texto2" id="contacto">Contacto</h2>
    <a href="#contacto"></a>

    <form action="mailto:tu@email.com" method="post" enctype="text/plain">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" v-model="nombre" required>

      <label for="mensaje">Mensaje:</label>
      <textarea id="mensaje" v-model="mensaje" required></textarea>

      <button type="submit">Enviar</button>
    </form>

    <div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum cumque natus inventore repellat placeat assumenda nulla deserunt consequatur eius reprehenderit quo molestias expedita totam error dicta pariatur corrupti, voluptatum tenetur.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactoComponent',
  data() {
    return {
      nombre: '',
      mensaje: ''
    };
  }
};
</script>