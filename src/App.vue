<script setup allowjs>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

import { useGithubDataStore } from '@/stores/githubData'

const githubData = useGithubDataStore()

githubData.fetchProfile()
</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style>
main {
  padding: 10vh 10vw;
}
svg {
  display: block;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
pre {
  background-color: #000;
  padding: 10px;
  border-radius: 5px;
  white-space: pre-wrap;
  overflow: auto;
}

code {
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
  background-color: #000;
  overflow: auto;
  color: #fff;
}

.open-in-github {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 1em;
  border: thin solid var(--color-border);
  background-color: #02022e17;
  text-decoration: none;
  color: var(--color-text);
  border-radius: 5px;
}

.horizontal-flex-small-gap {
  display: flex;
  gap: 0.5em;
}
</style>
