<template>
  <header class="the-header">
    the-header
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheHeader',

  setup() {
    return {
    }
  }
})
</script>

<style lang="scss" scoped>
.the-header {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #eee;
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.25);
}
</style>
