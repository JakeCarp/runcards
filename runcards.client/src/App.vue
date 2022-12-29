<template>
  <main>
    <side-nav v-if="(route.path !== '/card' && route.path !== '/')"></side-nav>
    <router-view />
  </main>
  <footer>
  </footer>
</template>

<script>
import { computed } from 'vue';
import { AppState } from './AppState';
import Footer from './components/Footer.vue';
import SideNav from './components/SideNav.vue';
import { useRoute } from 'vue-router';

export default {
  components: { Footer, SideNav },
  name: 'App',
  setup() {
    const route = useRoute()
    return {
      route,
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
