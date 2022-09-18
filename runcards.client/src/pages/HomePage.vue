<template>
  <div
    class="
      home
      flex-grow-1
      d-flex
      flex-column
      align-items-center
      justify-content-center
    "
  >
    <div class="home-card p-3 bg-white rounded elevation-3 mt-4">
      <img src="../assets/img/logo.jpg" alt="Nampa fire Logo" class="" />
      <h1 class="my-5 bg-dark text-white p-3 rounded text-center">
        Nampa Fire Run Cards
      </h1>
      <p>Dispach Sign in here:</p>
      <button
        class="
          btn
          selectable
          text-success
          lighten-30
          text-uppercase
          my-2 my-lg-0
        "
        @click="login"
        v-if="!user.isAuthenticated"
      >
        Login
      </button>
      <button
        class="
          btn
          selectable
          text-success
          lighten-30
          text-uppercase
          my-2 my-lg-0
        "
        @click="logout"
        v-else
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity"
import { AuthService } from "../services/AuthService"
import { AppState } from "../AppState"
import { useRouter } from 'vue-router'
import { watchEffect } from "@vue/runtime-core"
export default {
  setup() {
    const router = useRouter()
    // watchEffect(() => {
    //   if (AppState.account.id) {
    //     router.push({ name: 'Home' })
    //   }
    // })
    return {
      router,
      async login() {
        await AuthService.loginWithPopup()
        router.push({ name: 'Home' })
      },
      logout() {
        AuthService.logout({ returnTo: window.location.origin })
      },
      user: computed(() => AppState.user),
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      // height: 40vh;
      height: 300px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
