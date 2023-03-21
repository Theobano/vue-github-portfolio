<script setup allowjs>
import { RouterLink } from 'vue-router'

import { useGithubDataStore } from '@/stores/githubData'
import { storeToRefs } from 'pinia'

const githubData = useGithubDataStore()

const { profile } = storeToRefs(githubData)
</script>

<template>
  <div class="navbar">
    <RouterLink :to="{ name: 'home' }" v-if="profile" class="profile-info">
      <img :src="profile.avatar_url" alt="avatar" class="avatar-img" height="30" />
      <span>{{ profile.login }}</span>
    </RouterLink>
    <RouterLink :to="{ name: 'home' }" v-else class="profile-info">Home</RouterLink>
    <RouterLink :to="{ name: 'repos' }">Repositories</RouterLink>
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
}
.profile-info {
  display: flex;
  align-items: center;
  gap: 1em;
}
.avatar-img {
  border-radius: 50%;
}

a {
  text-decoration: none;
  color: inherit;
  padding: 0.5em 1em;
}

a:hover {
  filter: brightness(1.5);
  background-color: var(--color-border);
}
</style>
