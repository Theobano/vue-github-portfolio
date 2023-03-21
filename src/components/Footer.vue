<script setup allowjs>
import GitHubIcon from './icons/GitHubIcon.vue'
import LinkIcon from './icons/LinkIcon.vue'
import TwitterIcon from './icons/TwitterIcon.vue'
</script>

<template>
  <footer>
    <h1>Follow me</h1>
    <div class="flex-center socials">
      <a href="https://theobano.github.io" target="_blank"><LinkIcon /></a>
      <a href="https://github.com/theobano" target="_blank"><GitHubIcon /></a>
      <a href="https://twitter.com/dotshine" target="_blank"><TwitterIcon /></a>
    </div>
    <p>&copy; Dotshine 2023 - GitHub portfolio with Vue.js</p>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 2em;
  align-items: center;
  justify-content: center;
  border-top: thin solid var(--color-border);
}
footer h1 {
  font-size: 1.5em;
  font-weight: 600;
}
.socials {
  display: flex;
  gap: 1em;
}
.socials a {
  text-decoration: none;
  color: var(--color-text);
  padding: 0.7em;
  border-radius: 50%;
  background-color: var(--color-background-soft);
}
.socials a:hover {
  background-color: var(--color-background-mute);
}
</style>
