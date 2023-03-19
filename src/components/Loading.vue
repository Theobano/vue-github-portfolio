<script>
export default {
  name: 'Loading'
}
</script>

<template>
  <div class="loading">
    <div class="loading__spinner"></div>
  </div>
</template>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.loading__spinner {
  width: 2em;
  height: 2em;
  border: 0.25em solid #fff;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
