<script setup lang="ts">
import Plane from "./components/Plane.vue";
import Bullet from "./components/Bullet.vue";
import initGame from "./game";
import { reactive } from "vue";

const { palne, bullets } = initGame(reactive({}), reactive([]));
</script>

<template>
  <Container>
    <Plane :plane="palne"></Plane>
    <Bullet v-for="bullet in bullets" :x="bullet.x" :y="bullet.y"></Bullet>
  </Container>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>