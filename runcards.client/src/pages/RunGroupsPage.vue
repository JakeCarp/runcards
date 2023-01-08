<template>
    <div class="container">
        <div class="row">

            <div class="col-10">
                <div v-if="!selectedStation" class="row justify-content center mt-3">
                    <h3>Please Select A Zone</h3>
                </div>
                
                <div class="row justify-content center mt-3">
                    <h1 class="col-md-10 offset-md-2 text-center">Station: {{selectedStation}}</h1>
                    <h2 class="col-md-10 offset-md-2 text-center">Zone: {{selectedZone}}</h2>
                </div>
                <div class="row">
                    <h3 class="col-md-10 offset-md-2 text-center">EMS</h3>
            </div>
            <div  class="row p-4 justify-content-between">
                <RunGroup  v-for="group in emsGroups" :key="group.id" :group="group"></RunGroup>
            </div>
            <div class="row">
                <h3 class="col-md-10 offset-md-2  text-center">Fire</h3>
            </div>
            <div class="row p-4 justify-content-between">
                <RunGroup v-for="group in fireGroups" :key="group.id" :group="group"></RunGroup>
            </div>
        </div>
        <div class="col-2">
            <!-- Button trigger modal -->
            <div class="d-flex justify-self-end mt-3">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#groupCreateModal">
                    Create Run Card Group
                </button>
            </div>
            
            
        </div>
    </div>
    <RunGroupFormModal/>
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
        const groups = computed(() => AppState.groups)
        return {
            groups,
            selectedStation,
            selectedZone,
            emsGroups,
            fireGroups
        }
    }}
</script>


<style lang="scss" scoped>

</style>
