<template>
    <div class="container">
        <!-- Button trigger modal -->
        <div class="d-flex justify-self-end">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#groupCreateModal">
                Launch demo modal
            </button>
        </div>
        
        <!-- Modal -->
        <div class="modal fade" id="groupCreateModal" tabindex="-1" role="dialog" aria-labelledby="groupCreateModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="groupCreateModalLabel">Create Run Card Group</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="groupTitleInput">Title</label>
                                <input type="text" class="form-control" id="groupTitleInput" placeholder="Title...">
                            </div>
                            <div class="form-group">
                                <label for="groupDescriptionInput">Description</label>
                                <input type="text" class="form-control" id="groupDescriptionInput" placeholder="Description...">
                            </div>
                            <div class="form-group">
                                <label for="groupTypeSelect">Run Card Group Type</label>
                                <select class="form-control" id="groupTypeSelect">
                                    <option>EMS</option>
                                    <option>Fire</option>
                                    <option>Emergency</option>
                                    <option>Mayday</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <h1 class="col-12 text-center" v-if="selectedStation">Station: {{selectedStation}}</h1>
            <h2 class="col-12 text-center" v-if="selectedZone">Zone: {{selectedZone}}</h2>
        </div>
        <div v-if="selectedStation" class="row">
            <h3 class="col-12 text-center">EMS</h3>
        </div>
        <div v-if="selectedStation" class="row p-4 justify-content-between">
            <RunGroup  v-for="group in emsGroups" :key="group.id" :group="group"></RunGroup>
        </div>
        <div v-if="selectedStation" class="row">
            <h3 class="col-12 text-center">Fire</h3>
        </div>
        <div v-if="selectedStation" class="row p-4 justify-content-between">
            <RunGroup v-for="group in fireGroups" :key="group.id" :group="group"></RunGroup>
        </div>
    </div>


</template>


<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import RunGroup from '../components/RunGroup.vue'
import { router } from '../router'

export default {
    setup() {
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