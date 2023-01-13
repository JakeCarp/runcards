<template>
  <div class="component p-3">
    <div class="card">
      <div class="card-body">
    <div>
      <Timer v-if="currentGroup.type === 2"></Timer>
    </div>
    <div>
      <label for="radio">ASSIGNED CALL CHANNEL:</label>
      <select name="radio" class="ms-2">
        <option v-for="channel in channels" :key="channel">{{channel}}</option>
      </select>
    </div>
    <div class="my-3">
      <label for="staging">LEVEL 2 STAGING AREA:</label>
      <input class="ms-2" type="text" name="staging" />
    </div>
    <div>
      <label for="radio2">LEVEL 2 STAGING CHANNEL:</label>
      <select class="ms-2" name="radio2">
        <option v-for="channel in channels" :key="channel">{{channel}}</option>
      </select>
    </div>
    <div class="my-3">
      <button class="btn btn-danger">MAYDAY</button>
    </div>
    <div>
      <button class="btn btn-danger">EMERGENCY</button>
    </div>
    </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Timer from './Timer.vue'
export default {
  components: { Timer },
  setup() {
    const channels = computed(() => AppState.channels)
    const currentGroup = computed(() => AppState.currentGroup)
    return {
      currentGroup,
      channels
    }
  }
}
</script>


<style lang="scss" scoped>
</style>