<template>
    <div class="row">
      <div class="flex-shrink-0 p-3 bg-white" style="width: 280px;">
        <div class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
          <span class="fs-5 fw-semibold">NFD Stations</span>
        </div>
        <ul class="list-unstyled ps-0">
          <li v-for="station in stations" :key="station.id" class="mb-2">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
              :data-bs-target="'#station'+station.id" aria-expanded="true">
              {{station.name}}
            </button>
            <div class="collapse" :id="'station' + station.id">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li v-for="zone in station.zones" :key="zone"><a @click="setZone(station.name, zone)" class="link-dark rounded">{{zone}}</a></li>
              </ul>
            </div>
          </li>
          <li>
            <div class="col-4 text-end">
              <button class="btn btn-warning" data-bs-toggle="offcanvas" data-bs-target="#information"
                aria-controls="information">Information</button>
            </div>
          </li>
          <li>
            <div class="col-4 text-end">
              <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#logoutModal"
                aria-controls="logout">Logout</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
      <div class="offcanvas offcanvas-end text-dark" tabindex="-1" id="information" aria-labelledby="informationLabel">
        <div class="offcanvas-header">
          <h5 id="informationLabel">Information</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" data-bs-target="#information"
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" data-bs-toggle="offcanvas"
                data-bs-target="#expandedNFDResouces">NFD Resouces</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="offcanvas" data-bs-target="#expandedMutualAid">Mutual Aid Resouces</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="offcanvas" data-bs-target="#expandedI84Standards">I84 & HWY 55
                Standards</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="offcanvas" data-bs-target="#expandedPolicies">Policies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="offcavas" data-bs-target="#expandedRevisions">Revisions</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- ------------------------------NFD Resources ----------------------- -->
      <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="expandedNFDResouces" aria-labelledby="expandedLabel">
        <div class="offcanvas-header">
          <h5 id="expandedLabel">NFD Resources</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
            data-bs-target="#expandedNFDResources" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <h1 class="text-center text-dark">Nampa Fire Department Resouce List</h1>
          <img class="img-fluid img-border mt-2" src="../assets/img/NFDResources.png" alt="">
        </div>
      </div>
    
      <!-- ----------------------------------------Mutual Aid ----------------------- -->
      <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="expandedMutualAid" aria-labelledby="expandedLabel">
        <div class="offcanvas-header">
          <h5 id="expandedLabel">Mutual Aid</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" data-bs-target="#expandedMutualAid"
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body container-fluid text-dark">
          <h1 class="text-center">Mutual Aid Resouce List</h1>
          <div class="row text-center mt-4">
            <div class="col-md-2 col-4 grey tab me-2" :class="{ 'selected': showCanyon }" @click="showCanyon = true">
              <p class="mt-2">Canyon County</p>
            </div>
            <div class="col-md-2 col-4 grey tab" :class="{ 'selected': !showCanyon }" @click="showCanyon = false">
              <p class="mt-2">Ada County</p>
            </div>
          </div>
          <div class="row mutual-height ">
            <div class="col-12 mt-5 ">
              <img v-if="showCanyon" class="img-fluid mb-3" src="../assets/img/CanyonCountyResources.PNG" alt="">
              <img v-else class="img-fluid" src="../assets/img/AdaCountyResources.PNG" alt="">
            </div>
          </div>
        </div>
      </div>
    
      <!-- ------------------------------------------------I84 Standards ---------------- -->
      <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="expandedI84Standards" aria-labelledby="expandedLabel">
        <div class="offcanvas-header">
          <h5 id="expandedLabel">I84 Standards</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
            data-bs-target="#expandedI84Standards" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <h1 class="text-center text-dark">I84 & HWY 55 Run Card Standards</h1>
          <img class="img-fluid img-border w-100 mt-2" src="../assets/img/I84-standards.PNG" alt="">
        </div>
      </div>
    
    
    
      <!-- ------------------------------------------Polices-------------------------- -->
      <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="expandedPolicies" aria-labelledby="expandedLabel">
        <div class="offcanvas-header">
          <h5 id="expandedLabel">Polices</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" data-bs-target="#expandedPolicies"
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <h1 class="text-center text-dark">Policies</h1>
          <p class="text-center text-dark">No polices Yet...</p>
        </div>
      </div>
    
    
    
    
      <!-- ------------------------------------------------Revisions----------------------------- -->
    
      <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="expandedRevisions" aria-labelledby="expandedLabel">
        <div class="offcanvas-header">
          <h5 id="expandedLabel">Revisions</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" data-bs-target="#expandedRevisions"
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body container-fluid text-dark">
          <h1 class="text-center">Revisions</h1>
          <div class="row text-center mt-4">
            <div class="col-md-2 col-4 mt-4">
              <p>Date</p>
            </div>
            <div class="col-md-10 col-8 mt-4">
              <p>
                Revision Notes
              </p>
            </div>
          </div>
          <!-- ----------------------------------Revison Content------------------ -->
          <div class="row">
            <div class="col-md-2 col-4 table-border d-flex align-items-center justify-content-center">
              <p>
                11/21/21
              </p>
            </div>
            <div class="col-md-10 col-8 table-border">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus itaque molestiae ducimus earum ea iure
                velit, quod amet quas quidem alias possimus laudantium officiis quis dicta esse nihil assumenda? Quibusdam.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias omnis dolorum qui impedit ducimus
                voluptate culpa doloremque dicta similique, praesentium quae atque id voluptatum sequi, cupiditate nam non
                ab pariatur.</p>
            </div>
          </div>
        </div>
    
      </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import {runCardService} from '../services/RunCardService'
export default {
  setup() {
    const showCanyon = ref(true)
    const stations = computed(() => AppState.stations)
    return {
      setZone(station, zone) {
        runCardService.setZone(station, zone)
      },
      showCanyon,
      stations
      }
    }
  }
</script>
<style>
    
</style>
