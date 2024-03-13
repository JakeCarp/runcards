<template>
  <div class="input">
    <div class="shadow">
      <div class=" p-3">
        <div>
          <Timer v-if="currentGroup.type === 2"></Timer>
        </div>
        <div class="text-center ">
          <label class="col-12 mb-2" for="radio">TAC CHANNELS: <i @click="duplicateRow(index)" class="mdi col-2 mdi-16px mdi-plus coloredit selectable" /></label>
          
          <div class="row mb-2" v-for="(row, index) in rows" :key="row.id">
            <input class="col-4 ms-3" type="text" placeholder="designation..." />
            <select name="radio" class="ms-2 col-5">
              <option v-for="channel in channels" :key="channel">{{channel.name}}</option>
            </select>
            <div class="col-2">
              <i @click="removeRow(index)" class="mdi col-2 mdi-16px mdi-minus coloredit selectable" />
            </div>
          </div>
        </div>
        <div class="my-3 text-center">
          <label for="staging">LEVEL 2 STAGING AREA:</label>
          <textarea class="ms-2 w-75" type="text" name="staging"></textarea>
        </div>
        <div class="text-center">
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
import { computed, onMounted, ref } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Timer from './Timer.vue'
import { runGroupService } from '../services/RunGroupService'
import { useRouter } from 'vue-router'
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
    const rows = ref([{ id: 0 }])

    const duplicateRow = (index) => {
      rows.value.splice(index + 1, 0, { id: Date.now() }) // Add a new row after the current row
    }

    const removeRow = (index) => {
  rows.value.splice(index, 1); // Remove the row at the given index
}

    return {
      selectedStation,
      selectedZone,
      router,
      currentGroup,
      channels,
      rows,
      duplicateRow,
      removeRow,
      async navToMayday() {
        try {
          const group = await runGroupService.getMaydayGroup()
          const routeParams = { name: "group", params: { groupId: group.id }, query: { station: selectedStation.value, zone: selectedZone.value } }
          if (group.cards.length > 0) {
            routeParams.params.cardId = group.cards[0]
          }
          const route = router.resolve(routeParams)
          window.open(route.href, '_blank')
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },

      async navToEmergency() {
        try {
          const group = await runGroupService.getEmergencyGroup()
          const routeParams = { name: "group", params: { groupId: group.id }, query: { station: selectedStation.value, zone: selectedZone.value } }
          if (group.cards.length > 0) {
            routeParams.params.cardId = group.cards[0]
          }
          const route = router.resolve(routeParams)
          window.open(route.href, '_blank')
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
