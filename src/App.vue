<script setup allowjs>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

import { useGithubDataStore } from '@/stores/githubData';

const githubData = useGithubDataStore();

githubData.fetchProfile();

</script>

<template>
  <NavBar />
  <RouterView />
</template>


<style>
main{
padding: 10vh 10vw;
}
svg{
  display: block;
}

.flex-center{
  display: flex;
  justify-content: center;
  align-items: center;
}
pre {
  background-color: #000;
  padding: 10px;
  border-radius: 5px;
}

code {
  font-family: "Courier New", Courier, monospace;
  font-size: 14px;
  background-color: #000;
}

.open-in-github{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .2em;
  padding: 0.5em 1em;
  border: thin solid var(--color-border);
  background-color: #02022e17;
  text-decoration: none;
  color: white;
  border-radius: 5px;
}

</style>