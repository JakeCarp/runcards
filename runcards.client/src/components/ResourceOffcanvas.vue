<template>
    <div class="component">
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
                        <a class="nav-link" data-bs-toggle="offcanvas" data-bs-target="#expandedMutualAid">Mutual Aid
                            Resouces</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="offcanvas" data-bs-target="#expandedI84Standards">I84 & HWY 55
                            Standards</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="offcanvas" data-bs-target="#expandedResourceGuidelines">Resource Guidelines</a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- ------------------------------NFD Resources ----------------------- -->
        <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="expandedNFDResouces" aria-labelledby="expandedLabel">
            <div class="offcanvas-header">
                <h5 id="expandedLabel"><i class="fas fa-arrow-left cursor-pointer" data-bs-toggle="offcanvas"
                        data-bs-target="#information"></i></h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    data-bs-target="#expandedNFDResources" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <h1 class="text-center text-dark">Nampa Fire Department Resouce List</h1>
                <ul class="nav nav-tabs text-dark mt-4">
  <li class="nav-item">
    <a class="nav-link" href="#" @click="renderResources('station1')">Station 1</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" @click="renderResources('station2')">Station 2</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" @click="renderResources('station3')">Station 3</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#" tabindex="-1" @click="renderResources('station4')">Station 4</a>
  </li>
    <li class="nav-item">
    <a class="nav-link" href="#" tabindex="-1" @click="renderResources('station5')">Station 5</a>
  </li>
    <li class="nav-item">
    <a class="nav-link" href="#" tabindex="-1" @click="renderResources('admin')">Admin</a>
  </li>
</ul>
                <table class="table text-center border mt-4">
                    <thead>
                      <tr>
                        <th scope="col">Unit</th>
                        <th scope="col">Type</th>
                        <th scope="col">Min Staff</th>
                        <th scope="col">24/7 Staffed</th>
                         <th scope="col">Station</th>
                      </tr>
                    </thead>
                    <tbody v-if="displayedResource === 'station1'">
                      <tr v-for="resource in station1Resources" :key="resource._id">
                        <th scope="row">{{resource.unitNumber}}</th>
                        <td>{{resource.type}}</td>
                        <td>{{resource.minStaff}}</td>
                        <td>{{resource.alwaysStaffed ? "Yes" : "No"}}</td>
                         <td class="station1">Station 1</td>
                      </tr>
                    </tbody>
                      <tbody v-if="displayedResource === 'station2'">
                      <tr v-for="resource in station2Resources" :key="resource._id">
                        <th scope="row">{{resource.unitNumber}}</th>
                        <td>{{resource.type}}</td>
                        <td>{{resource.minStaff}}</td>
                        <td>{{resource.alwaysStaffed ? "Yes" : "No"}}</td>
                         <td class="station2">Station 2</td>
                      </tr>
                      </tbody>

                      <tbody  v-if="displayedResource === 'station3'">
                      <tr v-for="resource in station3Resources" :key="resource._id">
                        <th scope="row">{{resource.unitNumber}}</th>
                        <td>{{resource.type}}</td>
                        <td>{{resource.minStaff}}</td>
                        <td>{{resource.alwaysStaffed ? "Yes" : "No"}}</td>
                         <td class="station3">Station 3</td>
                      </tr>
                      </tbody>

                      <tbody v-if="displayedResource === 'station4'">
                      <tr v-for="resource in station4Resources" :key="resource._id">
                        <th scope="row">{{resource.unitNumber}}</th>
                        <td>{{resource.type}}</td>
                        <td>{{resource.minStaff}}</td>
                        <td>{{resource.alwaysStaffed ? "Yes" : "No"}}</td>
                         <td class="station4">Station 4</td>
                      </tr>
                      </tbody>

                      <tbody v-if="displayedResource === 'station5'">
                      <tr v-for="resource in station5Resources" :key="resource._id">
                        <th scope="row">{{resource.unitNumber}}</th>
                        <td>{{resource.type}}</td>
                        <td>{{resource.minStaff}}</td>
                        <td>{{resource.alwaysStaffed ? "Yes" : "No"}}</td>
                         <td class="station5">Station 5</td>
                      </tr>
                      </tbody>

                      <tbody v-if="displayedResource === 'admin'">
                      <tr v-for="resource in adminResources" :key="resource._id">
                        <th scope="row">{{resource.unitNumber}}</th>
                        <td>{{resource.type}}</td>
                        <td>{{resource.minStaff}}</td>
                        <td>{{resource.alwaysStaffed ? "Yes" : "No"}}</td>
                         <td class="admin">admin</td>
                      </tr>
                      </tbody>
                  </table>
            </div>
        </div>

        <!-- ----------------------------------------Mutual Aid ----------------------- -->
        <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="expandedMutualAid" aria-labelledby="expandedLabel">
            <div class="offcanvas-header">
                <h5 id="expandedLabel"><i class="fas fa-arrow-left cursor-pointer" data-bs-toggle="offcanvas"
                        data-bs-target="#information"></i></h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    data-bs-target="#expandedMutualAid" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body container-fluid text-dark">
                <h1 class="text-center">Mutual Aid Resouce List</h1>
                <div class="row text-center mt-4">
                    <div class="col-md-2 col-4 grey tab me-2" :class="{ 'selected': showCanyon }" @click="showCanyon = true">
                        <p class="mt-2 selectable">Canyon County</p>
                    </div>
                    <div class="col-md-2 col-4 grey tab" :class="{ 'selected': !showCanyon }" @click="showCanyon = false">
                        <p class="mt-2 selectable">Ada County</p>
                    </div>
                </div>
                <div class="row mutual-height ">
                    <div class="col-12 mt-5 ">
                        <img v-if="showCanyon" class="img-fluid mb-3" src="../assets/img/CanyonCountyResources.png" alt="">
                        <img v-else class="img-fluid" src="../assets/img/AdaCountyResources.png" alt="">
                    </div>
                </div>
            </div>
        </div>

        <!-- ------------------------------------------------I84 Standards ---------------- -->
        <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="expandedI84Standards" aria-labelledby="expandedLabel">
            <div class="offcanvas-header">
                <h5 id="expandedLabel"><i class="fas fa-arrow-left cursor-pointer" data-bs-toggle="offcanvas"
                        data-bs-target="#information"></i></h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    data-bs-target="#expandedI84Standards" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <h1 class="text-center text-dark">I84 & HWY 55 Run Card Standards</h1>
                <img class="img-fluid img-border w-100 mt-2" src="../assets/img/I84-standards.png" alt="">
            </div>
        </div>

        <!-- --------------------------------------Response Guidelines----------------------------- -->

        <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="expandedResourceGuidelines" aria-labelledby="expandedLabel">
            <div class="offcanvas-header">
                <h5 id="expandedLabel"><i class="fas fa-arrow-left cursor-pointer" data-bs-toggle="offcanvas"
                        data-bs-target="#information"></i></h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    data-bs-target="#expandedResourceGuidelines" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body container-fluid text-dark">
                <h1 class="text-center">Response Guidelines</h1>
            </div>


        </div>

    </div>
</template>


<script>
import { ref } from '@vue/reactivity'
import { computed, onMounted } from "@vue/runtime-core"
import { resourceService } from "../services/ResourceService"
import { AppState } from "../AppState"
export default {
    setup() {
      onMounted(() => {
        resourceService.getDepartmentResources()
      })
        const showCanyon = ref(true)
        return {
            showCanyon,
            station1Resources: computed(() => AppState.resources["station1"]),
            station2Resources: computed(() => AppState.resources["station2"]),
            station3Resources: computed(() => AppState.resources["station3"]),
            station4Resources: computed(() => AppState.resources["station4"]),
            station5Resources: computed(() => AppState.resources["station5"]),
            adminResources: computed(() => AppState.resources["admin"]),
            displayedResource: computed(() => AppState.displayedResource),
            renderResources(name){
              AppState.displayedResource = name
            }
        }
    }}
</script>


<style lang="scss" scoped>
.nav-link{
  color: black;
}
</style>
