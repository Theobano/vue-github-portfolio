<script setup allowjs>
import { RouterLink, RouterView } from 'vue-router'
import { useGithubDataStore } from '@/stores/githubData'
import { storeToRefs } from 'pinia'
import Repo from './Repo.vue'
import { default as useWindowSize } from '@/composables/windowSize'

const githubData = useGithubDataStore()
const { repos, loadingRepos, error } = storeToRefs(githubData)
const { windowWidth } = useWindowSize()

githubData.fetchRepos()
</script>

<template>
  <main >
    <div
      class="repos-container"
      
    >
      <div v-for="repo in repos" class="repo-container">
        <Repo :repo="repo" :key="repo.id" />
        <RouterView
          v-if="
            repo.name === $route.params.repoName
          "
          :repo="repo"
        />
      </div>
    </div>
    <!-- <RouterView v-if="0.2 * windowWidth + 2 + 1 + 40 < windowWidth" /> -->
  </main>
</template>

<style scoped>
/*.large-screen {
  display: flex;
  flex-direction: ;
  overflow: hidden;row
}
*/

.repos-container {
  display: flex;
  flex-direction: column;
  /* make grid templates auto size and number */
  /*grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));*/
  width: 100%;
  grid-gap: 1em;
  padding: 1em;
}
.repo-container {
  display: flex;
  flex-direction: column;
}
</style>
