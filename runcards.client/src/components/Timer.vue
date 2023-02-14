<template>
  <div class="component">
    <h1 id="time" class="text-center my-2">10:00</h1>
    <i class=" m-2 animate__flash animate__animated mdi mdi-timer-sand-full" v-for="n in timeElapsed" :key="n"></i>
    <audio id="timeElapsedAlert">
  <source src="../assets/alerts/dpatch.client_src_assets_alerts_timeElapsedAlert.mp3" type="audio/ogg">
  Your browser does not support the audio tag.
</audio>
  </div>
</template>


<script>
import { computed, onMounted, onUnmounted, ref } from "@vue/runtime-core";
import { AppState } from "../AppState";
import 'animate.css';
import countdown from "../utils/Timer";
export default {
  setup(){
    onMounted(() => {
      countdown("time", 10, 0, "timeElapsedAlert")
    })
    onUnmounted(() => {
      AppState.timeElapsed = 0
    })
    return {
      timeElapsed: computed(() => AppState.timeElapsed)
    }
  }
}
</script>


<style lang="scss" scoped>
.dot {
  height: 25px;
  width: 25px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
}
</style>
