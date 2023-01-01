<template>
    <div class="container">
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
