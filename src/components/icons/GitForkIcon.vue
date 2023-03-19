<script allowjs>
export default {
  props: ['width', 'height']
}
</script>

<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="6" cy="6" r="3" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="18" cy="6" r="3" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="12" cy="18" r="3" stroke-linecap="round" stroke-linejoin="round" />
    <path
      d="M6 9V10C6 11.1046 6.89543 12 8 12H12M18 9V10C18 11.1046 17.1046 12 16 12H12M12 12V15"
    />
  </svg>
</template>

<style scoped>
svg {
  stroke-width: 1;
  stroke: var(--color-text);
}
</style>
