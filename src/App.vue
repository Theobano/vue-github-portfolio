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
</style>