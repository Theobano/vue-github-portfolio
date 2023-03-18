<script allowjs>
export default {
    props: ["repo"],
    data() {
        return {
            // repoDetails: this.repoDetails
        }
    }
}
</script>

<template>
  <div>
    <h2 class="repo-name">{{ repo.name }}</h2>
    <div class="repo-description">{{ repo.description }}</div>
    
  </div>
</template>
