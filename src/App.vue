<template>
  <div class="app">
    <the-header />

    <router-view />

    <the-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';

export default defineComponent({
  name: 'App',

  components: {
    TheHeader,
    TheFooter
  }
});
</script>

<style lang="scss">
@import "./assets/scss/main";
</style>
