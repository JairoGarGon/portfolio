<template>
    <div class="formacion">
        <div class="anios">

        </div>
    </div>
</template>

<script>


export default {
    name: 'FormacionView',
        components: {
            
        }
    }
</script>

<style>
.formacion{
    display: grid;
    grid-template-columns:
    repeat(
        auto-fit,
        minmax(150px, 1fr)
    ) ;
    gap: 32px;
}
.anios{
    border-radius: 8px;
    width: 100%;
    height: auto;
    box-shadow: 0 0 30px #000;
}
</style>