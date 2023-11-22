<template>
    <div class="inicio">
        <img class="imagen" src="../assets/desktop.webp" alt="imagen inicio portfolio">
        <h1 class="texto1">Jairo García González</h1>
        <h2 class="texto2">Front End Developer</h2>
        <router-link class="botonInicio" to="/conoceme">Conozcámonos</router-link>
    </div>
</template>

<script>



export default {
    name: 'HomeView',
        components: {
            
        }
    }
</script>

<style>
.inicio{
    height: 100vh;
    /* background-image: url(../assets/desktop.webp);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain; */
}
.imagen{
    animation: revelarMesa 2.5s ;
    width: 94vw;
    height: 80vh;
    margin: 0 3vw 0 3vw !important;
    position: absolute;
    bottom: 0;
    z-index: 0;
}
.texto1, .texto2{
    display: flex;
    position: relative;
    justify-content: center;
    z-index: 2;
    background-color: transparent;
    text-shadow: var(--sombraTexto);
    font-family: "Roboto", sans-serif;
}
.texto1{
    font-size:3.5em;    
    padding-top: 35vh !important;
    color:var(--azulClaro2); 
    animation: down 1.5s linear;
}
.texto2{
    font-size:2.5em;
    padding-top: 15px;
    letter-spacing: 2px;
    color:var(--azulOscuro1); 
    animation: right 1.5s linear;
    
}
.botonInicio{
    animation: revealBoton 1.5s ;
    height: 5vh;
	width: 30vw !important;
    border-radius: 15px;
    box-shadow: var(--sombraCaja);
    border: var(--borde);
    color:var(--azulOscuro1); 
    display: flex;
    margin: 2vh auto !important;
	font-size: 1.8em;
    letter-spacing: 2px;
    align-items: center;
	justify-content: center;
    padding:0.2em;
    text-decoration: none; 
    position: relative;
    z-index: 2;
    
}
.botonInicio:active{
	box-shadow: inset -7px -7px 17px rgba(255,255,255,0.6),
				inset 7px 7px 17px rgba(70,70,70,0.15);	
	background-color: #a9ceff;	
	border: 0.2px solid #154884;
}

@keyframes revelarMesa {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes revealBoton {
    0% {
    transform: translateY(200px) rotate(20deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}

@keyframes down {
    0%{
        transform: translateY(-8rem);
    }
    50%{
        transform: translateY(-4rem);
    }
	
    100% {
      transform: translateY(0rem);
    }
    
}

@keyframes right{
    0%{
    transform:translateX(-20rem);
    }
    100%{
    transform:translateX(0);
    }
}
</style>
