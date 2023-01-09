<template>
  <header class="container-fluid m-0 p-0">
    <div class="row m-0">
      <div class="col-3 d-none d-md-block sidebar pl-0 pr-2 pt-0">
        <side-nav v-if="(route.name !== 'group')"></side-nav>
      </div>
    </div>
  </header>

  <main>
    <router-view />
    <ResourceOffcanvas/>
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
import ResourceOffcanvas from './components/ResourceOffcanvas.vue';

export default {
  components: { Footer, SideNav },
  name: 'App',
  setup() {
    ResourceOffcanvas
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
.sidebar{
  position: absolute;
  left: 0;
  top: 0;
}

.cursor-pointer{
 cursor: pointer;
}

main{
  overflow-y: auto;
}

</style>
