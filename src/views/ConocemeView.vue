<template>
    <MenuWeb />
    <div class="subtitle">
        <p class="textoDescripcion">Mi nombre es Jairo, tengo 39 años y me apasionan las nuevas tecnologías.</p>
        <p class="textoDescripcion">Aunque he dedicado toda mi vida laboral a todo tipo de trabajos, siempre he intentado formarme de manera autodidacta.</p>        
        <p class="textoDescripcion">Actualmente estoy consolidando mis conocimientos como desarrollador Front End intentando ofrecer la mejor experiencia al usuario.</p>
    </div>
    <div class="cajaSaly">
        <img class="imagenDescripcion" src="../assets/Saly.webp" alt="diseño de la descripción">
    </div>
</template>

<script>
import MenuWeb from '../componentes/MenuWeb.vue'

export default {
    name: 'ContactoView',
        components: {
            MenuWeb,
        }
    }
</script>

<style>
/* revisar scroll innecesario */
    .subtitle{
        width: 100%;
        padding-top: 4vh !important;
        display: flex;
        flex-direction: column;
        align-content: center;
        flex-wrap: wrap;

        /* background-image: url(../assets/saly.webp);
        background-position:0% 0%;
        background-size: cover;
        background-repeat: no-repeat; */
        /* overflow: hidden !important; */
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
        box-shadow: -5px -5px 12px rgba(255,255,255,0.6),
				5px 5px 12px rgba(70,70,70,0.15);
}
p{
    opacity: 0;
}
p:nth-child(1){
    animation: revelarTexto 2s forwards;
    
}
p:nth-child(2){
    animation: revelarTexto 2s forwards;
    animation-delay: 1.5s;
}
p:nth-child(3){    
    animation: revelarTexto 2s forwards;
    animation-delay: 3s;
    width: 50vw;
    position: absolute;
    left: 45vw;
    top: 31vh;
    z-index: 2;

}

.cajaSaly{
    display: flex;
    flex-direction: column;
    
}
.imagenDescripcion{   
    overflow:  hidden !important;
    position:fixed;
    z-index: 1;
    left:0;
    bottom: 0px !important;
    width:90vw;
    /* animation: revelarSaly 2s linear forwards; */
}

@keyframes revelarTexto{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

/* @keyframes right{
    0%{
    transform:translateX(-20rem);
    }
    100%{
    transform:translateX(0);
    }
} */

@keyframes revelarSaly {
0%{
    transform: translateY(25%) translateX(-50%);
}
25%{
    transform: translateY(15%) translateX(-45%);
    
}
50%{
    transform: translateY(5%) translateX(-40%);
    
}
75%{
    transform: translateY(0%) translateX(-35%);
    
}
100% {
    transform: translateY(0%) translateX(-20%);

}

}
</style>