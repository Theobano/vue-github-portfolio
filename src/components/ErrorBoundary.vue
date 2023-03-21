<script allowjs>
import ErrorComponent from './ErrorComponent.vue'

export default {
  data() {
    return {
      error: false
    }
  },
  errorCaptured(err, vm, info) {
    this.error = true
  },
  components: { ErrorComponent }
}
</script>

<template>
  <ErrorComponent v-if="error" />

  <slot v-else></slot>
</template>
