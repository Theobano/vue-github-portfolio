import { defineStore } from 'pinia'

export const useGithubDataStore = defineStore('githubData', {
  state: () => ({
    profile: null,
    repos: null,
    error: null,
    loadingProfile: false,
    loadingRepos: false
  }),
  getters: {
    getProfile: (state) => state.profile,
    getRepos: (state) => state.repos
  },
  actions: {
    async fetchProfile() {
      try {
        this.loadingProfile = true
        const response = await fetch('https://api.github.com/users/theobano')
        this.profile = await response.json()
      } catch (error) {
        this.error = error
      } finally {
        this.loadingProfile = false
      }
    },

    async fetchRepos() {
      try {
        this.loadingRepos = true
        const response = await fetch('https://api.github.com/users/theobano/repos')
        this.repos = await response.json()
      } catch (error) {
        this.error = error
      } finally {
        this.loadingRepos = false
      }
    }
  }
})
