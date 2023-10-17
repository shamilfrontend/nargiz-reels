<template>
  <header class="the-footer">
    the-footer
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheFooter',

  setup() {
    return {
    }
  }
})
</script>

<style lang="scss" scoped>
.the-footer {
  background-color: #eee;
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.25);
}
</style>
