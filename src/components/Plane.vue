<template>
  <Container :x="plane.x" :y="plane.y">
    <Sprite :texture="planeImg"></Sprite>
  </Container>
</template>
  
<script setup lang='ts'>
import { PropType } from "vue";
import { Plane } from '../game/Plane'
import planeImg from '../assets/plane.png'

const { plane } = defineProps({
  plane: {
    type: Object as PropType<Plane>,
    required: true
  }
})

window.addEventListener('keydown', (e) => {
  console.log(e.code);

  if (e.code === 'Space') {
    plane.attack();
  }

  switch (e.code) {
    case 'ArrowUp':
      plane.moveUp()
      break;

    case 'ArrowDown':
      plane.moveDown()
      break;

    case 'ArrowLeft':
      plane.moveLeft()
      break;

    case 'ArrowRight':
      plane.moveRight()
      break;
  }
})
</script>

<style>
</style>