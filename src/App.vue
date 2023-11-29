<template>
  <div id="app">
    <router-view />
  </div>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=Pacifico&display=swap" rel="stylesheet">
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
*,*{
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box;
  background-color: var(--color0);
}
:root{
  --fuenteTitulos: "Pacifico";
  --fuenteTextos: "IBM Plex Sans";
  --color0: #cae2ff;
  --color1:#0c356a;
  --color2:#0174be;
  --color3:#ffc436;
  --color4:#fff0ce;
  --sombraTexto:  0 1px 0 #ccc,
                  0 2px 0 #cae2ff,
                  0 3px 0 var(--color2),
                  0 4px 0 var(--color1),
                  0 6px 1px rgba(0,0,0,.1),
                  0 0 5px rgba(0,0,0,.1),
                  0 1px 3px rgba(0,0,0,.3),
                  0 3px 5px rgba(0,0,0,.2),
                  0 5px 10px rgba(0,0,0,.25),
                  0 10px 10px rgba(0,0,0,.2),
                  0 15px 15px rgba(0,0,0,.15)
                  ;
   --sombraCaja:inset -7px -7px 17px rgba(255,255,255,0.6),
				inset 7px 7px 17px rgba(70,70,70,0.15);               
   --borde:0.2px solid var(--color2);	
}
</style>
