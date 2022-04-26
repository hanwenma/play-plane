<template>
  <Container>
    <Sprite :texture="bunny"></Sprite>
  </Container>
</template>
  
<script setup lang='ts'>
import { reactive } from 'vue';
import bunny from '../assets/bunny-self.png'

window.addEventListener('keydown', (e) => {

})
</script>

<style>
</style>