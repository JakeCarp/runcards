<template>
    <div class="container">
        <div class="row">
            <div class="col-md-10 offset-md-2 text-center" v-if="!selectedStation">
                    <h3>Please Select A Zone</h3>
            </div>

                    <div class="col-md-10 offset-md-2 text-center">
                      <h1>Station: {{selectedStation}}</h1>
                      </div>

                    <div class="col-md-10 offset-md-2 text-center">
                      <h2>Zone: {{selectedZone}}</h2>
                      </div>

                    <div class="col-md-10 offset-md-2 text-center">
                      <h3>
                        EMS
                      </h3>
                      </div>

                      <div class="col-md-10 offset-md-3">
                        <div class="row">
                        <RunGroup  v-for="group in emsGroups" :key="group.id" :group="group"></RunGroup>
                        </div>
                      </div>

                <div class="col-md-10 offset-md-2  text-center">
                  <h3>
                    Fire
                  </h3>
                  </div>

                <RunGroup v-for="group in fireGroups" :key="group.id" :group="group"></RunGroup>

        <div class="col-2">
            <!-- Button trigger modal -->
            <div class="d-flex justify-self-end mt-3">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#groupCreateModal">
                    Create Run Card Group
                </button>
            </div>
        </div>
    <RunGroupFormModal/>
        </div>
</div>


</template>


<script>
import { computed, onMounted, ref } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { runGroupService } from '../services/RunGroupService'
import Pop from '../utils/Pop'
import RunGroupFormModal from '../components/RunGroupFormModal.vue'

export default {
  components: { RunGroupFormModal },
    setup() {
        onMounted(async () => {
            await runGroupService.getGroups()
        })
        const selectedStation = computed(() => AppState.selectedStation)
        const selectedZone = computed(() => AppState.selectedZone)
        const emsGroups = computed(() => AppState.emsGroups)
        const fireGroups = computed(() => AppState.fireGroups)
        return {
            selectedStation,
            selectedZone,
            emsGroups,
            fireGroups
        }
    }}
</script>


<style lang="scss" scoped>

</style>
