<template>
      <div class="flex-shrink-0 p-3  sidenav mt-2 shadow ">
        <div class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
          <span class="fs-5 fw-semibold">NFD Stations</span>
        </div>
        <ul class="list-unstyled ps-0 scroll">
          <li v-for="station in stations" :key="station.id" class="mb-2">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
              :data-bs-target="'#station'+station.id" aria-expanded="true">
              {{station.name}}
            </button>
            <div class="collapse" :id="'station' + station.id">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li v-for="zone in zones[station.id]" :key="zone.id"><a @click="setZone(station, zone)" class="link-dark rounded">{{zone.name}}</a></li>
              </ul>
            </div>
          </li>
        </ul>
            <div class="bottom mb-3">
              <button class="btn btn-primary mx-2" data-bs-toggle="offcanvas" data-bs-target="#information"
                aria-controls="information">Information</button>
              <button class="btn btn-danger mx-2" @click="logout()"
                aria-controls="logout">Logout</button>
            </div>

      </div>

      
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import {runCardService} from '../services/RunCardService'
import { AuthService } from "../services/AuthService";
import pop from '../utils/Pop'
export default {
  setup() {
    const stations = computed(() => AppState.stations.filter(s => s.name !== 'Administration'))
    const zones = computed(() => AppState.zones)
    return {
      setZone(station, zone) {
        runCardService.setZone(station, zone)
      },
        async logout(){
          if(await pop.confirm("Are you sure you want to logout?", "You will return to the login page", "Yes", "question")){
             AuthService.logout({ returnTo: window.location.origin });
          }
        },
      stations,
      zones
      }
    }
  }
</script>
<style>
.sidenav{
  width: 280px;
  height: 90vh;
}

.scroll{
  overflow-y: auto;
  height: 70vh;
}

.bottom{
  position: absolute;
  bottom: 0;
}
</style>
