<script allowjs>
import { onBeforeRouteUpdate, RouterLink, RouterView } from 'vue-router'
import { useGithubDataStore } from '@/stores/githubData'
import { storeToRefs } from 'pinia'
import GitHubIcon from '@/components/icons/GitHubIcon.vue'
import GitForkIcon from '../../components/icons/GitForkIcon.vue'
import GitStarIcon from '../../components/icons/GitStarIcon.vue'

export default {
  props: ['repo'],
  data() {
    return {
      isShowingDetails: this.$route.params.repoName === this.repo.name,
      to: this.$route.params.repoName === this.repo.name ? "" : this.repo.name
    }
  },
  components: { GitForkIcon, GitStarIcon },
  methods: {
    updateIsShowingDetails() {
      this.isShowingDetails = this.$route.params.repoName === this.repo.name
    }
  },
  watch: {
    $route() {
      this.updateIsShowingDetails()
      this.isShowingDetails? this.to = "" : this.to = this.repo.name

  
    }
  }
}


</script>

<template>
  <RouterLink
    :to="`/repos/${to}`"
    :key="repo.name"
    class="repo"
  >
    <div class="repo-name-descr">
      <h2>{{ repo.name }}</h2>
      <div v-if="repo.description">{{ repo.description }}</div>
    </div>
    <!-- <div v-else>No description</div> -->

    <div class="repo-card-meta">
      <span v-if="repo.language">{{ repo.language }}</span>
      <span class="meta-group">
        <span><GitStarIcon :width="24" :height="24" :strokeColor="'#ffffff'" /></span>
        <span>{{ repo.stargazers_count }}</span></span
      >
      <span class="meta-group">
        <span>
          <GitForkIcon :width="24" :height="24" :strokeColor="'#ffffff'" />
        </span>
        <span>{{ repo.forks_count }}</span>
      </span>
    </div>
  </RouterLink>
</template>

<style scoped>
.repo {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  border: thin solid white;
  /* border-radius: 1em; */
  overflow: hidden;
}

.repo h2 {
  font-size: 1.2em;
  /* margin: 0; */
  /* margin-bottom: 0.5em; */
}

.repo-name-descr {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.repo-card-meta {
  display: flex;
  gap: 2em;
  /* justify-content: space-between; */
  align-items: center;
  /* margin-top: 1em; */
}

.meta-group {
  display: flex;
  gap: 0.5em;
  align-items: center;
  justify-content: center;
}

@media only screen and (min-width: 700px) {
  .repo {
    display: flex;
    flex-direction: row;
  }
}
</style>
