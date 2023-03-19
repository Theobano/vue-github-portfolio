<script setup allowjs>
import { storeToRefs } from 'pinia'
import { useGithubDataStore } from '@/stores/githubData'
import GitHubIcon from '../../components/icons/GitHubIcon.vue';

const githubData = useGithubDataStore()

const { profile, loadingProfile, error } = storeToRefs(githubData)
</script>

<template>
  <main>
    <div v-if="loadingProfile">Loading ...</div>
    <div v-else-if="error">error: {{ error }}</div>
    <div v-else>
      <div class="flex-center avatar-container"><img :src="profile.avatar_url" /></div>
      <div class="container">
        <h1>{{ profile.name }} ({{ profile.login }})</h1>
        <div>{{ profile.bio }}</div>
        <a :href="profile.html_url" target="_blank" class="open-in-github"><span>Visit GitHub Page</span><span><GitHubIcon/></span></a>
        <div class="connections">
          <span>Followers: {{ profile.followers }}</span>
          <span>Following: {{ profile.following }}</span>
        </div>
        <div v-if="profile.blog">
          website: <a :href="profile.blog">{{ profile.blog }}</a>
        </div>
        <div v-if="profile.location">location: {{ profile.location }}</div>
        <div v-if="profile.twitter_username">
          twitter:
          <a :href="`https://twitter.com/${profile.twitter_username}`" target="_blank"
            >@{{ profile.twitter_username }}</a
          >
        </div>
        <RouterLink to="/repos">Public Repositories ({{ profile.public_repos }})</RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
main > div {
  display: flex;
  flex-direction: column;
  gap: 2em;
}

.avatar-container {
  overflow: hidden;
}
.avatar-container > img {
  width: 50vmin;
  border: thin solid var(--color-border);
  object-fit: cover;
  border-radius: 50%;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-self: center;
  align-items: center;
}

.container > h1 {
  font-size: 2em;
  text-align: center;
}

.connections{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  width: 100%;
}
</style>
