<template>
  <div class="row m-0">
    <div class="col-3 d-none d-md-block sidebar pl-0 pr-2 pt-0">
      <side-nav></side-nav>
    </div>
  </div>
<div class="container">
  <div class="row">
    <div class="col-md-9 offset-md-3 d-flex justify-content-center my-4">
      <img class="img-fluid" v-if="selectedZone.name === 'WR241'" src="../assets/img/WR241.png" />
      <img class="img-fluid" v-if="selectedZone.name === 'WR412'" src="../assets/img/WR412.png" />
      <img class="img-fluid" v-if="selectedZone.name === 'WR214'" src="../assets/img/WR214.png"/>
    </div>
  </div>
  <div class="row">
    <div v-if="!selectedZone" class="col-md-10 offset-md-2 text-center">
      <h3>Please Select A Zone</h3>
      <button v-if="account.admin" class="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#anulla">Create New Group</button>
    </div>
    
    <div v-if="selectedStation" class="col-md-10 offset-md-2 text-center">
      <h1>Station: {{selectedStation.name}}</h1>
    </div>
    
    <div v-if="selectedZone" class="col-md-10 offset-md-2 text-center mb-4">
      <h2>Zone: {{selectedZone.name}}</h2>
    </div>
  </div>

  <div v-if="selectedZone" class="row">
    <div class="col-md-10 offset-md-2 text-center">
      <h3>
        EMS Cards:
      </h3>
    </div>
    
    <div v-if="selectedZone" class="col-md-9 offset-md-3 mb-4">
      <div class="row">
        <RunGroup  v-for="group in emsGroups" :key="group.id" :group="group"></RunGroup>
      </div>
    </div>
  </div>
  <div class="row">

    <div v-if="selectedZone" class="col-md-10 offset-md-2  text-center">
      <h3>
        Fire Cards:
      </h3>
    </div>

    
    <div v-if="selectedZone" class="col-md-9 offset-md-3">
      <div class="row">
        <RunGroup v-for="group in fireGroups" :key="group.id" :group="group"></RunGroup>
        
      </div>
    </div>

    <div v-if="selectedZone" class="col-md-10 offset-md-2  text-center">
      <h3>
        I84 and HWY 55:
      </h3>
    </div>

    <div v-if="selectedZone" class="col-md-9 offset-md-3">
      <div class="row">
        <RunGroup v-for="group in I84Groups" :key="group.id" :group="group"></RunGroup>
    
      </div>
    </div>
    
  </div>
  </div>
  <RunGroupFormModal/>
  
  
</template>


<script>
import { computed, onMounted, ref } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { runGroupService } from '../services/RunGroupService'
import Pop from '../utils/Pop'
import RunGroupFormModal from '../components/RunGroupFormModal.vue'
import { runCardService } from '../services/RunCardService'
import SideNav from '../components/SideNav.vue'
import { stationService } from '../services/StationService'
import { zoneService } from '../services/ZoneService'

export default {
  components: { RunGroupFormModal, SideNav },
    setup() {
      onMounted(async () => {
        await stationService.getStations()
        await zoneService.getZones()
        await runGroupService.getGroups()
        runCardService.setCurrentCard({})
        runCardService.setCards([])
      })
        const selectedStation = computed(() => AppState.selectedStation)
        const selectedZone = computed(() => AppState.selectedZone)
        const emsGroups = computed(() => AppState.emsGroups)
      const fireGroups = computed(() => AppState.fireGroups)
        const I84Groups = computed(() => AppState.I84Groups)
        const account = computed(() => AppState.account)
      return {
            I84Groups,
            account,
            selectedStation,
            selectedZone,
            emsGroups,
            fireGroups
        }
    }}
</script>


<style lang="scss" scoped>

</style>
