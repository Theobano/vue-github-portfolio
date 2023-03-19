<script setup allowjs>
import { storeToRefs } from 'pinia'
import { useGithubDataStore } from '@/stores/githubData'
import GitHubIcon from '../../components/icons/GitHubIcon.vue'
import TwitterIcon from '../../components/icons/TwitterIcon.vue'
import LocationIcon from '../../components/icons/LocationIcon.vue'
import LinkIcon from '../../components/icons/LinkIcon.vue'
import Loading from '../../components/Loading.vue'

const githubData = useGithubDataStore()

const { profile, loadingProfile, error } = storeToRefs(githubData)
</script>

<template>
  <main>
    <Loading v-if="loadingProfile" />
    <div v-else-if="error">error: {{ error }}</div>
    <div v-else>
      <div class="flex-center avatar-container"><img :src="profile.avatar_url" /></div>
      <div class="container">
        <h1>{{ profile.name }} ({{ profile.login }})</h1>
        <div>{{ profile.bio }}</div>
        <a :href="profile.html_url" target="_blank" class="open-in-github horizontal-flex-small-gap"
          ><span>Visit GitHub Page</span><span><GitHubIcon /></span
        ></a>
        <div class="connections">
          <span>Followers: {{ profile.followers }}</span>
          <span>Following: {{ profile.following }}</span>
        </div>
        <div v-if="profile.blog" class="horizontal-flex-small-gap">
          <span><LinkIcon /></span><a :href="profile.blog">{{ profile.blog }}</a>
        </div>
        <div v-if="profile.location" class="horizontal-flex-small-gap">
          <span><LocationIcon /></span><span>{{ profile.location }}</span>
        </div>
        <div v-if="profile.twitter_username" class="horizontal-flex-small-gap">
          <span><TwitterIcon /></span>
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

.connections {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  width: 100%;
}
</style>
