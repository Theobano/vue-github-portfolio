<script allowjs>
import MarkdownIt from 'markdown-it'
import GitHubIcon from '../../components/icons/GitHubIcon.vue'
import Loading from '../../components/Loading.vue'
export default {
  props: ['repo'],
  data() {
    return {
      showReadme: true,
      readme: null,
      isFetchingReadme: false
    }
  },
  async created() {
    this.isFetchingReadme = true
    try {
      const response = await fetch(
        `https://api.github.com/repos/${this.repo.owner.login}/${this.repo.name}/readme`,
        {
          headers: {
            Accept: 'application/vnd.github.raw'
          }
        }
      )
      const readme = await response.text()
      if (response.status === 404) {
        this.isFetchingReadme = false
        return
      }
      const md = new MarkdownIt()
      this.readme = md.render(readme)
      this.isFetchingReadme = false
    } catch (err) {
      console.log(err)
      this.isFetchingReadme = false
    }
  },
  components: { GitHubIcon, Loading }
}
</script>

<template>
  <div class="container">
    <div>{{ repo.full_name }}</div>
    <h2 class="repo-name">{{ repo.name }}</h2>
    <div class="repo-description">{{ repo.description }}</div>
    <a :href="repo.html_url" target="_blank" rel="noopener noreferrer" class="open-in-github">
      <span>View in GitHub</span><span><GitHubIcon /> </span>
    </a>

    <div>
      <Loading v-if="isFetchingReadme" />
      <section v-if="readme" class="readme">
        <h2>Readme</h2>
        <div v-html="readme" class="readme-container"></div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
}
.readme-container {
  max-width: 800px;
  margin: 0 auto;
  font-family: sans-serif;
  font-size: 16px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold;
}

.readme {
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: 1em;
  margin: 1em 0;
}

.readme > h2 {
  font-size: 1.5em;
  border-bottom: 1px solid var(--color-border);
}

.open-in-github {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2em;
  text-decoration: none;
}
.open-in-github:hover {
  text-decoration: none;
}
</style>

<style>
.readme-container {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.readme-container h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: bold;
}
.readme-container h2 {
  font-size: 1.5em;
  padding-bottom: 0.5em;
}
</style>
