<template>
  <div class="lineaTemporal_Evento">
    <div class="lineaTemporal_Marcador" @click="verAnio(2019)">
      2019
    </div>
    <transition name="expand">
      <div v-if="expandirPanel === 2019" class="lineaTemporal_Contenido">
        <h3 class="tituloExpand">Tras probar con Java, descubro el desarrollo web</h3>
        <p class="cursos"><strong>"Buen código Java"</strong><br>25 horas - Universidad Juan Carlos 3º de Madrid</p>
        <p class="cursos"><strong>"Programación Java"</strong><br>30 horas - Universidad Autonoma de Mexico</p>
        <p class="cursos"><strong>"Programación en Java con NetBeans"</strong><br>34 horas - Edutin Academy</p>
        <p class="cursos"><strong>"HTML 5"</strong><br>30 horas - Píldoras Informáticas</p>

        <!-- Galería de Proyectos -->
        <div class="cajaProyectos">
          <div class="proyecto">
            <img src="ruta/a/la/imagen1.jpg" alt="Proyecto 1" />
            <p>Proyecto 1</p>
            <!-- Otros campos según sea necesario -->
          </div>
          <div class="proyecto">
            <img src="ruta/a/la/imagen2.jpg" alt="Proyecto 2" />
            <p>Proyecto 2</p>
            <!-- Otros campos según sea necesario -->
          </div>
          <!-- Agrega más proyectos según sea necesario -->
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expandirPanel: null,
    };
  },
  methods: {
    verAnio(anio) {
      this.expandirPanel = this.expandirPanel === anio ? null : anio;
    },
  },
};
</script>

<style scoped>
/* Estilos para la galería de proyectos */
.cajaProyectos {
  display: flex;
  flex-wrap: wrap;
}

.proyecto {
  margin: 10px;
  text-align: center;
}

.proyecto img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
