<script setup allowjs>
import { storeToRefs } from 'pinia';
import { useGithubDataStore } from '@/stores/githubData';

const githubData = useGithubDataStore()

const {profile, loadingProfile, error} = storeToRefs(githubData)
</script>

<template>
  <main>
    <div v-if="loadingProfile">
      Loading ...
    </div>
    <div v-else-if="error">
      error: {{ error }}
    </div>
    <div v-else>
      <img :src="profile.avatar_url"/>
      <div>{{ profile.name }}</div>
      <div>{{ profile.login }}</div>
      <div>{{ profile.bio }}</div>
      <a :href="profile.html_url" target="_blank">Visit GitHub Page</a>
      <div><span>followers: {{ profile.followers }}</span> <span>following: {{ profile.following }}</span></div>
      <div v-if="profile.blog">website: <a :href="profile.blog">{{ profile.blog }}</a></div>
      <div v-if="profile.location">location: {{ profile.location }}</div>
      <div v-if="profile.twitter_username">twitter: <a :href="`https://twitter.com/${profile.twitter_username}`" target="_blank">@{{ profile.twitter_username }}</a></div>
      <RouterLink to="/repos">Public Repositories ({{ profile.public_repos }})</RouterLink>
      <!-- <div>Public Repositories ({{ profile.public_repos }})</div> -->
    </div>
  </main>
</template>
