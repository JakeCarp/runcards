<template>
  <div class="input">
    <div class="card shadow">
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
      <button @click="navToMayday()" class="btn btn-danger">MAYDAY</button>
    </div>
    <div>
      <button @click="navToEmergency()" class="btn btn-danger">EMERGENCY</button>
    </div>
    </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Timer from './Timer.vue'
import { runGroupService } from '../services/RunGroupService'
import {  useRouter } from 'vue-router'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
export default {
  components: { Timer },
  setup() {
    const router = useRouter()
    const channels = computed(() => AppState.channels)
    const currentGroup = computed(() => AppState.currentGroup)
    const selectedStation = computed(() => AppState.selectedStation)
    const selectedZone = computed(() => AppState.selectedZone)
    return {
      selectedStation,
      selectedZone,
      router,
      currentGroup,
      channels,
      async navToMayday() {
        try {
          const group = await runGroupService.getMaydayGroup()
          if (group.cards.length > 0) {
            let route = router.resolve({ name: "group", params: { groupId: group.id, cardId: group.cards[0] }, query: { station: selectedStation.value, zone: selectedZone.value } })
            window.open(route.href, '_blank')
          } else {
            let route = router.resolve({ name: "group", params: { groupId: group.id }, query: { station: selectedStation.value, zone: selectedZone.value } })
            window.open(route.href, '_blank')
          }
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      async navToEmergency() {
        try {
          const group = await runGroupService.getEmergencyGroup()
          if (group.cards.length > 0) {
            let route = router.resolve({ name: "group", params: { groupId: group.id, cardId: group.cards[0] }, query: { station: selectedStation.value, zone: selectedZone.value } })
            window.open(route.href, '_blank')
          } else {
            let route = router.resolve({ name: "group", params: { groupId: group.id }, query: { station: selectedStation.value, zone: selectedZone.value } })
            window.open(route.href, '_blank')
          }
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
