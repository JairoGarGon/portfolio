<template>
  <section class="seccionFormacion">
    <h2 class="formYExp">Formación y Experiencia</h2>
    <section class="cajaTextos" ref="cajaTextos">
      <p class="textoDescripcion" ref="parrafo1"></p>
    </section>
    
    <!-- revisar esto -->
    <!-- <div class="bola"></div> -->
    <section class="lineaTemporal">
      <div class="lineaTemporal_Evento">
        <div class="lineaTemporal_Marcador" @click="verAnio(2018)">
          2018
        </div>
        <transition name="expand">
          <div v-if="expandirPanel === 2018" class="lineaTemporal_Contenido">
            <p class="tituloCajaProyectos">Mís comienzos en la programación</p>
              <p class="cursos"><strong>"Principios de Programación"</strong><br>50 horas - Universidad Juan Carlos 3º de Madrid</p>
              <p class="cursos"><strong>"Pruebas de testing en Software"</strong><br>10 horas- Edutin Academy</p>
              <p class="cursos"><strong>"Programación Java"</strong><br>45 horas - Píldoras Informáticas</p>
          </div>
        </transition>
      </div>

      <div class="lineaTemporal_Evento">
        <div class="lineaTemporal_Marcador" @click="verAnio(2019)">
          2019
        </div>
        <transition name="expand">
          <div v-if="expandirPanel === 2019" class="lineaTemporal_Contenido">
            <p class="tituloCajaProyectos">Tras probar con Java, descubro el desarrollo web</p>
              <p class="cursos"><strong>"Buen código Java"</strong><br>25 horas - Universidad Juan Carlos 3º de Madrid</p>
              <p class="cursos"><strong>"Programación Java"</strong><br>30 horas - Universidad Autonoma de Mexico</p>
              <p class="cursos"><strong>"Programación en Java con NetBeans"</strong><br>34 horas - Edutin Academy</p>
              <p class="cursos"><strong>"HTML 5"</strong><br>30 horas - Píldoras Informáticas</p>

          <p class="tituloCajaProyectos">Proyectos de prueba</p>

            <section class="cajaProyectos">
              <div class="proyecto">
                <img class="imagenProyecto" src="../assets/buscadorGit.webp" alt="Buscador de empleos">
                <p class="nombreProyecto">Buscador de empleo</p>
                <p class="textoTech">Creado con:</p>
                <div class="icons">
                    <img class="icon" src="../assets/html.webp" alt="logo de html">
                    <img class="icon" src="../assets/css.webp" alt="logo de css">
                    <img class="icon" src="../assets/js.webp" alt="logo de js">
                </div>
                <p class="textoTech">Visitar la web:</p>
                <div class="iconosVer">
                  <a target="_blank" href="https://github.com/JairoGarGon/buscaEmpleos.git" rel="noreferrer">
                    <img class="icon" src="../assets/github.webp" alt="icono enlace a github">
                  </a>
                  <a target="_blank" href="https://buscaempleo.netlify.app/" rel="noreferrer">
                    <img class="icon" src="../assets/iconoWeb.webp" alt="icono enlace a la web">
                  </a>
                </div>
              </div>
              <div class="proyecto">
                <img class="imagenProyecto" src="../assets/buscaImagenes.webp" alt="Buscador de imagenes">
                <p class="nombreProyecto">Buscador de imagenes</p>
                <p class="textoTech">Creado con:</p>
                <div class="icons">
                    <img class="icon" src="../assets/html.webp" alt="logo de html">
                    <img class="icon" src="../assets/css.webp" alt="logo de css">
                    <img class="icon" src="../assets/js.webp" alt="logo de js">
                </div>
                <p class="textoTech">Visitar la web:</p>
                <div class="iconosVer">
                  <a target="_blank" href="https://github.com/JairoGarGon/buscaImagenes" rel="noreferrer">
                    <img class="icon" src="../assets/github.webp" alt="icono enlace a github">
                  </a>
                  <a target="_blank" href="https://cazaimagenes.netlify.app/" rel="noreferrer">
                    <img class="icon" src="../assets/iconoWeb.webp" alt="icono enlace a la web">
                  </a>
                </div>
              </div>

              <div class="proyecto">
                <img class="imagenProyecto" src="../assets/seguros.webp" alt="Buscador de imagenes">
                <p class="nombreProyecto">Calculador de seguros</p>
                <p class="textoTech">Creado con:</p>
                <div class="icons">
                    <img class="icon" src="../assets/html.webp" alt="logo de html">
                    <img class="icon" src="../assets/css.webp" alt="logo de css">
                    <img class="icon" src="../assets/js.webp" alt="logo de js">
                </div>
                <p class="textoTech">Visitar la web:</p>
                <div class="iconosVer">
                  <a target="_blank" href="https://github.com/JairoGarGon/calculaSeguros" rel="noreferrer">
                    <img class="icon" src="../assets/github.webp" alt="icono enlace a github">
                  </a>
                  <a target="_blank" href="https://calculaseguros.netlify.app/" rel="noreferrer">
                    <img class="icon" src="../assets/iconoWeb.webp" alt="icono enlace a la web">
                  </a>
                </div>
              </div>

              <div class="proyecto">
                <img class="imagenProyecto" src="../assets/inmobiliaria.webp" alt="Buscador de imagenes">
                <p class="nombreProyecto">Inmobiliaria ficticia</p>
                <p class="textoTech">Creado con:</p>
                <div class="icons">
                    <img class="icon" src="../assets/html.webp" alt="logo de html">
                    <img class="icon" src="../assets/css.webp" alt="logo de css">
                    <img class="icon" src="../assets/js.webp" alt="logo de js">
                </div>
                <p class="textoTech">Visitar la web:</p>
                <div class="iconosVer">
                  <a target="_blank" href="https://github.com/JairoGarGon/inmobiliariaPrueba" rel="noreferrer">
                    <img class="icon" src="../assets/github.webp" alt="icono enlace a github">
                  </a>
                  <a target="_blank" href="https://lainmobiliaria.netlify.app/" rel="noreferrer">
                    <img class="icon" src="../assets/iconoWeb.webp" alt="icono enlace a la web">
                  </a>
                </div>
              </div>
            </section>
          </div>
        </transition>
      </div>

      <div class="lineaTemporal_Evento">
        <div class="lineaTemporal_Marcador" @click="verAnio(2020)">
          2020
        </div>
        <transition name="expand">
          <div v-if="expandirPanel === 2020" class="lineaTemporal_Contenido">
            <h3 class="tituloCajaProyectos">Me centro en aprender Front y crear mis primeros proyectos.</h3>
            <p class="cursos"><strong>"JavaScript Moderno"</strong><br>37,5 horas - Udemy</p>
            <p class="cursos"><strong>"CSS3 edición 2020"</strong><br>13 horas - Udemy</p>
            <p class="cursos"><strong>"Desarrollo Web Completo"</strong><br>55 horas - Udemy</p>
            <p class="cursos"><strong>"Creación de Aplicaciones con Técnologias Web"</strong><br> - 580 horas - Grupo Carac</p>

            <p class="tituloCajaProyectos">Mi Primer proyecto real</p>
            <section class="cajaProyectos">
              <div class="proyecto">
                <img class="imagenProyecto" src="../assets/lapampa.webp" alt="web de bocateria la pampa">
                <p class="nombreProyecto">Bocateria La Pampa</p>
                <p class="textoTech">Creado con:</p>
                <div class="icons">
                  <img class="icon" src="../assets/Wix.webp" alt="logo de wix">
                </div>
                <p class="textoTech">Visitar la web:</p>
                <div class="iconosVer">
                  <a target="_blank" href="https://bocaterialapampa.wixsite.com/pola" rel="noreferrer">
                    <img class="icon" src="../assets/iconoWeb.webp" alt="icono enlace a la web">
                  </a>
                </div>
              </div>
            </section>
            
            <p class="tituloCajaProyectos">Mi trabajo en Grupo Carac</p>
            <p class="cursos"><strong>Front End Developer</strong> <br> 2 meses- Grupo Carac</p>
            <section class="cajaProyectos">
              <p class="tareas"><strong>Tareas:</strong> Desarrollo web con wordpress, campañas de email marketing, SEO, desarrollo de chat bot y analitica web</p>
              <div class="proyecto">
                <img class="imagenProyecto" src="../assets/fabero.webp" alt="web del ayuntamiento de Fabero">
                <p class="nombreProyecto">Ayuntamiento de Fabero</p>
                <p class="textoTech">Creado con:</p>
                <div class="icons">
                  <img class="icon" src="../assets/wordpress.webp" alt="logo de wordpress">
                </div>
                <p class="textoTech">Visitar la web:</p>
                <div class="iconosVer">
                <a target="_blank" href="https://fabero.org/" rel="noreferrer">
                  <img class="icon" src="../assets/iconoWeb.webp" alt="icono enlace a la web">
                </a>
                </div>
              </div>
            </section>
          </div>
        </transition>
      </div>

      <div class="lineaTemporal_Evento">
        <div class="lineaTemporal_Marcador" @click="verAnio(2021)">
          2021
        </div>
        <transition name="expand">
          <div v-if="expandirPanel === 2021" class="lineaTemporal_Contenido">
            <h3 class="tituloCajaProyectos">Conociendo Frameworks y el control de versiones</h3>
            <p class="cursos"><strong>"React: Hooks, Redux, Context,..."</strong><br>11 horas - Udemy</p>
            <p class="cursos"><strong>"React y Firebase"</strong><br>25 horas - Udemy</p>
            <p class="cursos"><strong>"Máster en Diseño UX"</strong><br> 15 horas - Udemy</p>
            <p class="cursos"><strong>"Git y GitHub"</strong><br>5 horas - Udemy</p>

            <p class="tituloCajaProyectos">Mi trabajo en Gerico Muro Associates</p>
              <p class="cursos"><strong>Full Stack Developer</strong><br>3 meses- Grupo Carac</p>
              <p class="tareas"><strong>Tareas:</strong>Desarrollo webs con wordpress, análisis web, campañas de marketing, SEO, diseño de recursos, gestión de dominios y documentación.</p>
            <section class="cajaProyectos">
              <div class="proyecto">
                <img class="imagenProyecto" src="../assets/gerico.webp" alt="web de Gerico Muro Abogados">
                <p class="nombreProyecto">Gerico Muro Abogados</p>
                <p class="textoTech">Creado con:</p>
                <div class="icons">
                  <img class="icon" src="../assets/wordpress.webp" alt="logo de wordpress">
                </div>
                <p class="textoTech">Visitar la web:</p>
                <div class="iconosVer">
                  <a target="_blank" href="https://gericoassociates.com/" rel="noreferrer">
                    <img class="icon" src="../assets/iconoWeb.webp" alt="icono enlace a la web">
                  </a>
                </div>
              </div>
              <div class="proyecto">
                <img class="imagenProyecto" src="../assets/cecamagan.webp" alt="web de Cecamagan Abogados">
                <p class="nombreProyecto">Cecamagan Abogados</p>
                <p class="textoTech">Creado con:</p>
                <div class="icons">
                  <img class="icon" src="../assets/wordpress.webp" alt="logo de wordpress">
                </div>
                <p class="textoTech">Visitar la web:</p>
                <div class="iconosVer">
                  <a target="_blank" href="https://www.cecamagan.com/" rel="noreferrer">
                    <img class="icon" src="../assets/iconoWeb.webp" alt="icono enlace a la web">
                  </a>
                </div>
              </div>
              <div class="proyecto">
                <img class="imagenProyecto" src="../assets/martin.webp" alt="web de Martín Garro Abogados">
                <p class="nombreProyecto">Martín Garro Abogados</p>
                <p class="textoTech">Creado con:</p>
                <div class="icons">
                  <img class="icon" src="../assets/wordpress.webp" alt="logo de wordpress">
                </div>
                <p class="textoTech">Visitar la web:</p>
                <div class="iconosVer">
                <a target="_blank" href="https://martinortegaygarroabogados.com/" rel="noreferrer">
                  <img class="icon" src="../assets/iconoWeb.webp" alt="icono enlace a la web">
                </a>
                </div>
              </div>
              <div class="proyecto">
                <img class="imagenProyecto" src="../assets/fashion.webp" alt="web de Fashion Businnes Abogados">
                <p class="nombreProyecto">Fashion Businnes Abogados</p>
                <p class="textoTech">Creado con:</p>
                <div class="icons">
                  <img class="icon" src="../assets/wordpress.webp" alt="logo de wordpress">
                </div>
                <p class="textoTech">Visitar la web:</p>
                <div class="iconosVer">
                <a target="_blank" href="https://www.fashionbusinesslawyer.com/" rel="noreferrer">
                  <img class="icon" src="../assets/iconoWeb.webp" alt="icono enlace a la web">
                </a>
                </div>
              </div>
            </section>

          </div>
        </transition>
      </div>

      <div class="lineaTemporal_Evento">
        <div class="lineaTemporal_Marcador" @click="verAnio(2022)">
          2022
        </div>
        <transition name="expand">
          <div v-if="expandirPanel === 2022" class="lineaTemporal_Contenido">
            <h3 class="tituloCajaProyectos">Vue, Ionic y los entresijos de las plataformas.</h3>
            <p class="cursos"><strong>"Introducción Vue js 2"</strong><br>15 horas - Udemy</p>
            <p class="cursos"><strong>"Vue JS 2"</strong><br> 10 horas - Udemy</p>
            <p class="cursos"><strong>"Ionic, aplicaciones para IOS y Android"</strong><br>10 horas - Udemy</p>

              <p class="tituloCajaProyectos">Mi trabajo en Vitesia Mobile Solutions</p>
              <p class="cursos"><strong>Front End Developer</strong><br>1 año y 2 meses- Vitesia</p>
                <p class="tareas"><strong>Tareas: </strong>Desarrollo webs y Apps con Vue, evolutivos e incidencias con Vue o React, mejoras de usabilidad y accesibilidad, migraciónes de Sencha a Vue, SEO, diseño de recursos, control de versiones, investigación y documentación.</p>

            <section class="cajaProyectos">
                <div class="proyecto">
                  <img class="imagenProyecto" src="../assets/vidacord.webp" alt="web vidacord">
                  <p class="nombreProyecto">Vidacord</p>
                  <p class="textoTech">Creado con:</p>
                  <div class="icons">
                    <img class="icon" src="../assets/vue.webp" alt="logo de vue">
                    <img class="icon" src="../assets/ionic.webp" alt="logo de ionic">
                  </div>
                  <p class="textoTech">Disponible en:</p>
                  <div class="botonesTiendas">
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.vitesia.vidacordapp" rel="noreferrer">
                      <img class="botonTienda" src="../assets/googlePlay.webp" alt="enlace play store">
                    </a>
                    <a target="_blank" href="https://apps.apple.com/es/app/vidacordapp/id1587679765" rel="noreferrer">
                      <img class="botonTienda" src="../assets/appleStore.webp" alt="enlace apple store">
                    </a>
                  </div>
                </div>

                <div class="proyecto">
                  <img class="imagenProyecto" src="../assets/e2k.webp" alt="web e2k">
                  <p class="nombreProyecto">E2K Global</p>
                  <p class="textoTech">Creado con:</p>
                  <div class="icons">
                    <img class="icon" src="../assets/vue.webp" alt="logo de vue">
                    <img class="icon" src="../assets/ionic.webp" alt="logo de ionic">
                  </div>
                  <p class="textoTech">Disponible en:</p>
                  <div class="botonesTiendas">
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.e2kglobal.app.verificacion" rel="noreferrer">
                      <img class="botonTienda" src="../assets/googlePlay.webp" alt="enlace play store">
                    </a>
                    <a target="_blank" href="https://apps.apple.com/es/app/verificacion-de-riesgos/id1312875381" rel="noreferrer">
                      <img class="botonTienda" src="../assets/appleStore.webp" alt="enlace apple store">
                    </a>
                  </div>
                </div>

                <div class="proyecto">
                  <img class="imagenProyecto" src="../assets/scs.webp" alt="Aplicación del servicio cantabro de salud">
                  <p class="nombreProyecto">Servicio Cantabro de Salud</p>
                  <p class="textoTech">Creado con:</p>
                  <div class="icons">
                    <img class="icon" src="../assets/vue.webp" alt="logo de vue">
                    <img class="icon" src="../assets/ionic.webp" alt="logo de ionic">
                  </div>
                  <p class="textoTech">Disponible en:</p>
                  <div class="botonesTiendas">
                    <a target="_blank" href="https://play.google.com/store/search?q=servicio+cantabro+de+salud&c=apps" rel="noreferrer">
                      <img class="botonTienda" src="../assets/googlePlay.webp" alt="enlace play store">
                    </a>
                    <a target="_blank" href="https://apps.apple.com/es/app/misalud-scs/id1154524994" rel="noreferrer">
                      <img class="botonTienda" src="../assets/appleStore.webp" alt="enlace apple store">
                    </a>
                  </div>
                </div>

                <div class="proyecto">
                  <img class="imagenProyecto" src="../assets/trabajastur.webp" alt="trabajastur">
                  <p class="nombreProyecto">Trabajastur</p>
                  <p class="textoTech">Creado con:</p>
                  <div class="icons">
                    <img class="icon" src="../assets/sencha.webp" alt="logo de sencha">
                    <img class="icon" src="../assets/ionic.webp" alt="logo de ionic">
                  </div>
                  <p class="textoTech">Disponible en:</p>
                  <div class="botonesTiendas">
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.vitesia.sepepa&hl=es&gl=US" rel="noreferrer">
                      <img class="botonTienda" src="../assets/googlePlay.webp" alt="enlace play store">
                    </a>
                    <a target="_blank" href="https://apps.apple.com/es/app/sepepa/id1041381997" rel="noreferrer">
                      <img class="botonTienda" src="../assets/appleStore.webp" alt="enlace apple store">
                    </a>
                  </div>
                </div>

                <div class="proyecto">
                  <img class="imagenProyecto" src="../assets/astursalud.webp" alt="astursalud">
                  <p class="nombreProyecto">Astur Salud</p>
                  <p class="textoTech">Creado con:</p>
                  <div class="icons">
                    <img class="icon" src="../assets/vue.webp" alt="logo de vue">
                    <img class="icon" src="../assets/ionic.webp" alt="logo de ionic">
                  </div>
                  <p class="textoTech">Disponible en:</p>
                  <div class="botonesTiendas">
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=es.asturias.miastursalud&hl=es_419&gl=US" rel="noreferrer">
                      <img class="botonTienda" src="../assets/googlePlay.webp" alt="enlace play store">
                    </a>
                    <a target="_blank" href="https://apps.apple.com/es/app/mi-astursalud-sespa/id6444213806" rel="noreferrer">
                      <img class="botonTienda" src="../assets/appleStore.webp" alt="enlace apple store">
                    </a>
                  </div>
                </div>

                <div class="proyecto">
                  <img class="imagenProyecto" src="../assets/ccoo.webp" alt="comisiones obreras asturias">
                  <p class="nombreProyecto">CC:OO Asturias</p>
                  <p class="textoTech">Creado con:</p>
                  <div class="icons">
                    <img class="icon" src="../assets/vue.webp" alt="logo de vue">
                  </div>
                  <p class="textoTech">Visitar la web:</p>
                  <div class="iconosVer">
                    <a target="_blank" href="https://asturias.ccoo.es/" rel="noreferrer">
                      <img class="icon" src="../assets/iconoWeb.webp" alt="icono enlace a la web">
                    </a>
                  </div>
                </div>

            </section>
          </div>
        </transition>
        </div>

      <div class="lineaTemporal_Evento">
        <div class="lineaTemporal_Marcador" @click="verAnio(2023)">
          2023
        </div>
        <transition name="expand">
          <div v-if="expandirPanel === 2023" class="lineaTemporal_Contenido">
            <h3 class="tituloCajaProyectos">Mejorando el diseño, pruebas con apis, pruebas de carga, etc...</h3>
            <p class="cursos"><strong>"Figma diseño de Interfaces"</strong><br>5 horas - Udemy</p>
            <p class="cursos"><strong>"Postman APi Testing"</strong><br> 5 horas - Udemy</p>
            <p class="cursos"><strong>"Vue 2 y 3"</strong><br>15 horas - Udemy</p>

          <section class="cajaProyectos">
            <div class="proyecto">
              <img class="imagenProyecto" src="../assets/trafikoapp.webp" alt="trafikoapp">
              <p class="nombreProyecto">Trafikoa EJGV</p>
              <p class="textoTech">Creado con:</p>
              <div class="icons">
                <img class="icon" src="../assets/vue.webp" alt="logo de vue">
                <img class="icon" src="../assets/ionic.webp" alt="logo de ionic">
              </div>
              <p class="textoTech">Disponible en:</p>
              <div class="botonesTiendas">
                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.vitesia.TrafikoaEJGV" rel="noreferrer">
                  <img class="botonTienda" src="../assets/googlePlay.webp" alt="enlace play store">
                </a>
                <a target="_blank" href="https://apps.apple.com/us/app/trafikoaejgv/id771607379?l=es&ls=1" rel="noreferrer">
                  <img class="botonTienda" src="../assets/appleStore.webp" alt="enlace apple store">
                </a>
              </div>
            </div>

            <div class="proyecto">
              <img class="imagenProyecto" src="../assets/barakaldo.webp" alt="barakaldoapp">
              <p class="nombreProyecto">Barakaldo App</p>
                <p class="textoTech">Creado con:</p>
              <div class="icons">
                <img class="icon" src="../assets/vue.webp" alt="logo de vue">
                <img class="icon" src="../assets/ionic.webp" alt="logo de ionic">
              </div>
              <p class="textoTech">Disponible en:</p>
              <div class="botonesTiendas">
                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.vitesia.barakaldo.app&hl=en_US" rel="noreferrer">
                  <img class="botonTienda" src="../assets/googlePlay.webp" alt="enlace play store">
                </a>
                <a target="_blank" href="https://apps.apple.com/es/app/barakaldoapp/id1447621341" rel="noreferrer">
                  <img class="botonTienda" src="../assets/appleStore.webp" alt="enlace apple store">
                </a>
              </div>
            </div>

            <div class="proyecto">
              <img class="imagenProyecto" src="../assets/reusapp.webp" alt="reusapp">
              <p class="nombreProyecto">Reusapp</p>
              <p class="textoTech">Creado con:</p>
              <div class="icons">
                <img class="icon" src="../assets/vue.webp" alt="logo de vue">
                <img class="icon" src="../assets/ionic.webp" alt="logo de ionic">
              </div>
              <p class="textoTech">Disponible en:</p>
              <div class="botonesTiendas">
                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.vitesia.EMULSA&hl=es&gl=US" rel="noreferrer">
                  <img class="botonTienda" src="../assets/googlePlay.webp" alt="enlace play store">
                </a>
                <a target="_blank" href="https://apps.apple.com/es/app/emulsa-reusapp/id705864040" rel="noreferrer">
                  <img class="botonTienda" src="../assets/appleStore.webp" alt="enlace apple store">
                </a>
              </div>
            </div>
          </section>
            <p class="tituloCajaProyectos">Mis proyectos tras finalizar en vitesia</p>
          <section class="cajaProyectos">
            <div class="proyecto">
              <img class="imagenProyecto" src="../assets/onlypans.webp" alt="onlyPans">
              <p class="nombreProyecto">OnlyPans</p>
              <p class="textoTech">Creado con:</p>
              <div class="icons">
                <img class="icon" src="../assets/vue.webp" alt="logo de vue">
                <img class="icon" src="../assets/ionic.webp" alt="logo de ionic">
              </div>
              <p class="textoTech">Ver en:</p>
                <a target="_blank" href="https://github.com/JairoGarGon/OnlyPansApp" rel="noreferrer">
                  <img class="icon" src="../assets/github.webp" alt="icono enlace a github">
                </a>
            </div>

            <div class="proyecto">
              <img class="imagenProyecto" src="../assets/wikibloq.webp" alt="wikibloq">
              <p class="nombreProyecto">WikiBloq</p>
              <p class="textoTech">Creado con:</p>
              <div class="icons">
                <img class="icon" src="../assets/vue.webp" alt="logo de vue">
                <img class="icon" src="../assets/firebase.webp" alt="logo de firebase">
              </div>
              <p class="textoTech">Ver en:</p>
                <a target="_blank" href="https://github.com/JairoGarGon/wikibloq" rel="noreferrer">
                  <img class="icon" src="../assets/github.webp" alt="icono enlace a github">
                </a>
            </div>
          </section>
          </div>
        </transition>
      </div>
    </section>
    <!-- <img class="flecha" src="../assets/Polygon.webp" alt="dibujo flecha"> -->
    
    <section class="cajaSaly">
        <img class="imagenDescripcion" src="../assets/SalyCara.webp" alt="diseño de la descripción">
        <img class="dibujoflecha" src="../assets/down.webp" alt="dibujo flecha" v-if="mostrarFlecha" :class="{ 'show': mostrarFlecha }">
    </section>
    <MenuWeb />
  </section>
</template>

<script>
import MenuWeb from '../componentes/MenuWeb.vue'

export default {
  name: 'FormacionComponente',
        components: {
            MenuWeb,
        },
  data() {
    return {
      expandirPanel: null,
      textos: [
        "La formación me proporciona las herramientas teóricas, mientras la experiencia potencia y perfecciona mis habilidades."
      ],
      parrafos: [],
      indexParrafo: 0,
      indexLetra: 0,
      mostrarFlecha: false,
    };
  },
  mounted(){
    this.parrafos = [this.$refs.parrafo1];
    this.mostrarParrafosConAnimacion();
  },
  methods: {
    verAnio(anio) {
      this.expandirPanel = this.expandirPanel === anio ? null : anio;
    },
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
        }
        
    },
    mostrarFlechaDespuesDelay() {
      setTimeout(() => {
        this.mostrarFlecha = true;
      }, 50000); 
    },
  }

};
</script>

<style scoped>

.formYExp{
  width: 100%;
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
.textoDescripcion{
  width: 85%;
  padding: 10px 15px !important;
}
/* .bola{
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: var(--color1);
  animation: right 2s linear;
  margin-left: 20px !important;
}
.flecha{
  margin-left: 20px !important;
  margin-top: 370px !important;
  width: 15px;
  height: 30px;
  animation: right 2s linear;
} */

/* revisar para añadir bola y flecha */
.lineaTemporal{
  padding-top: 1vh !important;
  padding-bottom: 1vh !important;
  animation: right 2s linear;
  margin-left: 25px !important;
  border-left: 4px dotted var(--color1);
  padding-left: 5px !important;
  position: absolute;
  z-index: 3;
  background-color: transparent;
}

.lineaTemporal_Marcador{
  display: flex;
  justify-content: center;
  width: 20vw;
  padding: 2vh 2vw !important;
  font-size: 1.2em;
  font-family: var(--fuenteTextos);
  font-weight: bold;
  color: var(--color1);
  border: 2px solid var(--color1) !important;
  border-radius: 0 10px 10px 0;
}
.lineaTemporal_Marcador:active{
  box-shadow: var(--sombraSuave);
}
.lineaTemporal_Marcador:hover, .lineaTemporal_Marcador:active{
  border: 2px solid var(--color2) !important;
  border-radius: 0 10px 10px 0;
  background-color: var(--color1);
  color: #fff;
}
.lineaTemporal_Evento{
  width: 75vw;
  background-color: transparent;
}
.lineaTemporal_Contenido{
  border: 2px solid var(--color1);
  box-shadow: var(--sombraCaja) !important;
  border-radius: 0 5px 5px 0;
  padding: 10px !important;
  z-index: 3 !important;
}

.tituloCajaProyectos{
  color: var(--color1);
  font-size: .9em;
  font-weight: 700;
  font-family: var(--fuenteTextos);
  padding-top: 1vh !important;
  padding-bottom: 1.5vh !important;
  padding-left: 1vw !important;
}
.cursos{
  color: var(--color1);
  padding-left: 1vw !important;
  font-family: var(--fuenteTextos);
  font-weight: 600;
  font-size: .8em;
  padding-bottom: 8px !important;
}

strong{
  font-weight: 700 !important;
  font-size: 1.1em !important;

}
.cajaProyectos {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
  width: 70vw !important;
}

.proyecto {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 30vw;
  border: 2px solid var(--color1);
  border-radius: 5px;
}

.imagenProyecto {
  width: 100%;
  min-height: 12vh;
  height: auto;
}
.icons{
  display: flex;
  justify-content: center;
}
.iconosVer{
  display: flex;
  justify-content: center;
  padding-top: 5px !important;
  padding-bottom: 5px !important;
  gap: 10px;
}
.icon{
  width: 25px;
}
.textoTech{
  padding-top: 2px !important;
}
.nombreProyecto, .textoTech{
  color: var(--color1);
  font-family: var(--fuenteTextos);
  font-size: .7em;
  font-weight: 600;
}
.tareas{
  color: var(--color1);
  font-family: var(--fuenteTextos);
  padding-bottom: 1vh !important;
}

.botonTienda{
  width: 25vw;
}

.cajaSaly{
  position: fixed;
  bottom: 0;
}
.imagenDescripcion{   
  overflow:  hidden !important;
  z-index: 1 !important;
  position:fixed;
  background-color: transparent;
  left:15vw;
  bottom: 0;
  width: 70vw !important;
  animation: revelarSaly 4s linear forwards;
}

.dibujoflecha{
    width: 40px !important;
    position: fixed;
    bottom: 6vh;
    right: 20vw;
    animation: bounce 2.5s infinite;
    transition: opacity 0.5s ease-in-out; 
    opacity: 0; 
}
.dibujoflecha.show {
    opacity: 1;
    z-index: 4;
    background-color: transparent;
}




@keyframes top {
  0% {
    transform: translateY(-10vh);
  }
  100% {
    transform: translateY(0);
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

@keyframes revelarSaly {
  0%{
      transform: translateY(45%);
  }

  100% {
      transform: translateY(0%);

  }
}


@media screen and (min-width: 600px) and (max-width: 800px) {
  
  .imagenDescripcion{   
    left:25vw;
    bottom: 0 !important;
    width: 45vw !important;
  }
  .tituloCajaProyectos, .tareas{
    font-size: 1.3em;
  }
  .formYExp{
    font-size: 3em;
  }
}

@media screen and (min-width: 801px) {
  .imagenDescripcion{   
    left:35vw;
    bottom: 0 !important;
    width: 25vw !important;
  }
  .lineaTemporal{
    margin-left: 10vw !important;
  }
  /* .bola{
    width: 20px;
    height: 20px;
    margin-left: 95px !important;

  }
  .flecha{
    width: 30px;
    height: 45px;
    margin-left: 90px !important;
  } */
  .cursos, .tituloCajaProyectos, .tareas{
    padding-left: 2.5vw !important;
  }

  .tituloCajaProyectos{
    width: 50vw;
    font-size: 1.3em;
  }
  .nombreProyecto, .textoTech{
    font-size: 1em;
  }
  .imagenProyecto {
    height: 30vh;
  }
  .botonTienda{
  width: 15vw;
}
.dibujoflecha{
    right: 8vw;
}
}

</style>
