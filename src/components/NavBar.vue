<script setup allowjs>
import { RouterLink, RouterView } from 'vue-router'

import { useGithubDataStore } from '@/stores/githubData'
import { storeToRefs } from 'pinia'

const githubData = useGithubDataStore()

const { profile } = storeToRefs(githubData)
</script>

<template>
  <div class="navbar">
    <RouterLink :to="{name: 'home'}" v-if="profile" class="profile-info">
      <img :src="profile.avatar_url" alt="avatar" class="avatar-img" height="30" />
        <span>{{ profile.login }}</span>
    </RouterLink>
    <RouterLink :to="{name: 'repos'}" >Repositories</RouterLink>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  height: 3em;
  border: thin solid var(--color-border);
  /* background-color: #24292e;
  color: #fff; */
}
.profile-info {
  display: flex;
  align-items: center;
  gap: 1em;
}
.avatar-img {
  border-radius: 50%;
}

a{
    text-decoration: none;
    color: inherit;
}

a:hover{
    background: none;
    filter: brightness(1.5);
}
</style>
