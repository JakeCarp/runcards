<template>
  <div class="timer">
    <h1 id="time" class="text-center my-2">{{ formattedTime }}</h1>
    <i class="m-2 animate__flash animate__animated mdi mdi-timer-sand-full" v-for="n in timeElapsed" :key="n"></i>
    <audio id="timeElapsedAlert">
      <source src="../assets/alerts/316835__lalks__alarm-01-long.wav" type="audio/ogg">
      Your browser does not support the audio tag.
    </audio>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from "vue";
import 'animate.css';
import countdown from "../utils/Timer";

export default {
  setup() {
    const timeElapsed = ref(0);
    let timerInterval;

    // Format time in MM:SS format
    const formattedTime = computed(() => {
      const minutes = Math.floor(timeElapsed.value / 60);
      const seconds = timeElapsed.value % 60;
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    });

    // Start the timer when the component is mounted
    onMounted(() => {
      timerInterval = countdown("time", 10, 0, "timeElapsedAlert", timeElapsed);
    });

    // Pause the timer and clean up resources when the component is unmounted
    onUnmounted(() => {
      clearInterval(timerInterval);
    });

    return {
      timeElapsed,
      formattedTime
    };
  }
};
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