<script allowjs>
import { RouterView } from 'vue-router'
import { useGithubDataStore } from '@/stores/githubData'
import { storeToRefs } from 'pinia'
import { default as useWindowSize } from '@/composables/windowSize'
import Repo from './Repo.vue'

export default {
  setup() {
    const githubData = useGithubDataStore()
    const { repos, loadingRepos, error } = storeToRefs(githubData)
    const { windowWidth } = useWindowSize()

    githubData.fetchRepos()

    return {
      repos,
      loadingRepos,
      error,
      windowWidth
    }
  },

  components: { Repo },

  data: () => ({
    // paginate repos
    pageSize: 10,
    currentPage: 1
  }),

  computed: {
    // paginate repos
    pageCount() {
      return Math.ceil(this.repos?.length / this.pageSize)
    },
    currentPageData() {
      return this.repos?.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      )
    }
  }
}
</script>

<template>
  <main>
    <div class="repos-container">
      <div v-for="repo in currentPageData" class="repo-container">
        <Repo :repo="repo" :key="repo.id" />
        <RouterView v-if="repo.name === $route.params.repoName" :repo="repo" />
      </div>
    </div>
    <div v-if="pageCount > 1" class="pagination flex-center">
      <button v-if="currentPage > 1" @click="currentPage--, $router.push(`/repos`)">&lt</button>
      <button
        v-for="page in pageCount"
        :key="page"
        @click=";(currentPage = page), $router.push(`/repos`)"
        :class="{ active: page === currentPage }"
      >
        {{ page }}
      </button>
      <button v-if="currentPage < pageCount" @click="currentPage++, $router.push(`/repos`)">
        &gt
      </button>
    </div>
  </main>
</template>

<style scoped>
.repos-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-gap: 1em;
  padding: 1em;
}
.repo-container {
  display: flex;
  flex-direction: column;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
}
.pagination button {
  background: none;
  padding: 0.5em 1em;
  border: thin solid var(--color-border);
  color: var(--color-text);
  font-size: 1.2em;
  cursor: pointer;
}

.pagination button:hover {
  border: thin solid var(--color-border-hover);
  filter: brightness(1.5);
}
.pagination button.active {
  background: var(--color-border);
}
</style>
