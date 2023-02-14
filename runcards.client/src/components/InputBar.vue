<template>
  <div class="input">
    <div class="shadow">
      <div class=" p-3">
    <div>
      <Timer v-if="currentGroup.type === 2"></Timer>
    </div>
    <div class="text-center">
      <label for="radio">TAC CHANNEL:</label>
      <select name="radio" class="ms-2 w-75">
        <option v-for="channel in channels" :key="channel">{{channel.name}}</option>
      </select>
    </div>
    <div class="my-3 text-center">
      <label for="staging">LEVEL 2 STAGING AREA:</label>
      <textarea class="ms-2 w-75" type="text" name="staging" />
    </div>
    <div  class="text-center">
      <label for="radio2">LEVEL 2 STAGING CHANNEL:</label>
      <select class="ms-2 w-75" name="radio2">
        <option v-for="channel in channels" :key="channel">{{channel.name}}</option>
      </select>
    </div>
    </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Timer from './Timer.vue'
import { runGroupService } from '../services/RunGroupService'
import {  useRouter } from 'vue-router'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { channelService } from '../services/ChannelService'
export default {
  components: { Timer },
  setup() {
    onMounted(async () => {
      await channelService.getChannels()
    })
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
