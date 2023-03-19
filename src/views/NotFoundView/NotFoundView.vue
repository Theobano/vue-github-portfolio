<script setup allowjs>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="flex-center">
    <div>
      <h1>404</h1>
      <p>Looks like you lost your way</p>
      <p>Let's take you <RouterLink :to="{ name: 'home' }">Home</RouterLink>.</p>
    </div>
  </main>
</template>

<style scoped>
main > div {
  text-align: center;
}
</style>
