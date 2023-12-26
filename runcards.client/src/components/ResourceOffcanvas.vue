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
             <ul class="nav nav-tabs text-dark mt-4">
  <li class="nav-item" v-for="r in resourceGuidelines" :key="r._id">
    <a class="nav-link" @click="setActiveResourceGuideline(r._id)">{{r.title}}</a>
  </li>
    <li class="nav-item" v-if="account.admin">
    <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#addResourceGuideline">Add +</a>
  </li>
</ul>
<div class="row">
  <div class="col-12 text-end mt-3" v-if="account.admin && activeGuideline._id">
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addResourceGuidelineList" >Add Resource Guideline</button>
    <button class="btn btn-secondary mx-2" data-bs-toggle="modal" data-bs-target="#editResourceGuideline">Edit Resource Guideline</button>
    <button class="btn btn-danger mx-2" @click="deleteResourceGuide">Delete Resource Guidline</button>
</div>
  </div>
  <div class="col-12">
    <div v-for="r in resourceGuidelineLists" :key="r._id">
    <h5>{{r.title}} <span v-if="account.admin"><i @click="deleteGuidelineList(r._id)" title="Remove List" class="mdi mdi-24px mdi-trash-can selectable1 text-danger"></i></span></h5>
    <ul>
      <li v-for="s in r.items" :key="s">{{s}}</li>
    </ul>
    </div>
  </div>
  <!-- <div class="col-12">
    <h5>Truck 1</h5>
    <ul>
      <li>All lift assists / and non-injury falls</li>
      <li>Second out MVA's in sta. 1 district</li>
      <li>Second out / extrication assists in other districts (per proximity)</li>
      <li>Structure fires</li>
      <li>Second out EMS responses</li>
      <li>Commercial alarms / second out residential alarms</li>
    </ul>
    <h5>Squad 1</h5>
    <ul>
      <li>Grass fires - first out in all districts</li>
      <li>Structure fires - all</li>
      <li>Priority 3 EMS calls - all</li>
      <li>Second out all medical calls</li>
      <li>Smoke and CO detector service calls / beeping, batteries, faulty, etc. - all</li>
      <li>Burn complaints / area checks</li>
      <li>Additional personnel requests / lifting, extra hands, etc. for apparatus already assigned to an incident</li>
    </ul>
    <h5>Notes</h5>
    <ul>
      <li>Lucas CPR devices will be equipped on battalion 1, squad 1, and engine 2</li>
      <li>Brush 5 will respond to all mutual aid requests for a brush truck with a crew of 4</li>
    </ul>
  </div> -->
</div>
            </div>
        </div>

        <!-- Modals -->
<div class="modal fade" id="addResourceGuideline" tabindex="-1" aria-labelledby="addResourceGuideline" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Create Resource Guideline Zone</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
        <form @submit.prevent="createGuideline()">
      <div class="modal-body text-center">
        <input placeholder="new station/zone title" class="w-75" type="text" v-model="newGuideline.title" required>
      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" >Create</button>
      </div>
        </form>
    </div>
  </div>
</div>

<div class="modal fade" id="addResourceGuidelineList" tabindex="-1" aria-labelledby="addResourceGuidelineList" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Create New Resource Guideline</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
        <form @submit.prevent="createGuidelineList()">
      <div class="modal-body text-center">
        <input placeholder="title" class="w-75" type="text" v-model="newGuidelineList.title" required>
        <input placeholder="subpoint" class="w-50 m-3" type="text" v-model="newGuidelineList.tempItem">
        <button class="btn btn-primary" type="button" @click="addSubPoint()" title="add subpoint">+</button>
        <ul id="tempItems">
        </ul>
      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" >Create</button>
      </div>
        </form>
    </div>
  </div>
</div>

<div class="modal fade" id="editResourceGuideline" tabindex="-1" aria-labelledby="editResourceGuideline" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Edit station/zone</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
        <form @submit.prevent="editResourceGuideLine()">
      <div class="modal-body text-center">
        <input :placeholder="activeGuideline.title" class="w-75" type="text" v-model="newGuideline.title" required>
      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" >Edit</button>
      </div>
        </form>
    </div>
  </div>
</div>
</template>


<script>
import { ref } from '@vue/reactivity'
import { computed, onMounted } from "@vue/runtime-core"
import { resourceService } from "../services/ResourceService"
import { resourceGuidelineService } from "../services/ResourceGuidelineService"
import { resourceGuidelineListService } from "../services/ResourceGuidelineListService"
import { AppState } from "../AppState"
import { Modal } from 'bootstrap'
import Pop from "../utils/Pop"
export default {
    setup() {
      onMounted(() => {
      })
        const showCanyon = ref(true)
        const newGuideline = ref({})
        const newGuidelineList = ref({items: []})
        return {
            showCanyon,
            newGuideline,
            newGuidelineList,
            station1Resources: computed(() => AppState.resources.filter(r => r.station.name === 'Station 1')),
            station2Resources: computed(() => AppState.resources.filter(r => r.station.name === 'Station 2')),
            station3Resources: computed(() => AppState.resources.filter(r => r.station.name === 'Station 3')),
            station4Resources: computed(() => AppState.resources.filter(r => r.station.name === 'Station 4')),
            station5Resources: computed(() => AppState.resources.filter(r => r.station.name === 'Station 5')),
            adminResources: computed(() => AppState.resources.filter(r => r.station.name === 'Administration')),
            displayedResource: computed(() => AppState.displayedResource),
            resourceGuidelines: computed(() => AppState.resourceGuidelines),
            activeGuideline: computed(() => AppState.activeResourceGuideline),
            resourceGuidelineLists: computed(() => AppState.resourceGuidelineLists),
            account: computed(() => AppState.account),
            renderResources(name){
              AppState.displayedResource = name
            },
            async setActiveResourceGuideline(id){
              await resourceGuidelineService.getResourceGuidelineLists(id)
            },
            async createGuideline(){
              await resourceGuidelineService.createGuideline(newGuideline.value)
              Modal.getOrCreateInstance(document.getElementById('addResourceGuideline')).hide()
              newGuideline.value.title = null
            },
            async deleteResourceGuide(){
              if(await Pop.confirm("Are you sure you want to delete this station/zone? It will remove all guidelines associated with it.")){
                await resourceGuidelineService.deleteResourceGuide()
              }
            },
            async editResourceGuideLine(){
               if(await Pop.confirm("Are you sure you want to edit this station/zone name?")){
                let edited = {}
                edited._id = AppState.activeResourceGuideline._id
                edited.title = newGuideline.value.title
                await resourceGuidelineService.editResourceGuide(edited)
                Modal.getOrCreateInstance(document.getElementById('editResourceGuideline')).hide()
                newGuideline.value = {}
              }
            },
            async createGuidelineList(){
              newGuidelineList.value.ResourceGuidelineId = AppState.activeResourceGuideline._id
              await resourceGuidelineListService.createGuidelineList(newGuidelineList.value)
              Modal.getOrCreateInstance(document.getElementById('addResourceGuidelineList')).hide()
              newGuidelineList.value.title = null
              newGuidelineList.value.items = []
              document.getElementById('tempItems').innerHTML = ""
            },
            async deleteGuidelineList(id){
              if(await Pop.confirm("Are you sure you want to delete this List?")){
                await resourceGuidelineListService.deleteGuidelineList(id)
              }
            },
            addSubPoint(){
              newGuidelineList.value.items = [...newGuidelineList.value.items, newGuidelineList.value.tempItem]
              newGuidelineList.value.tempItem = null
              let text = ""
              newGuidelineList.value.items.forEach(i => text += `<li>${i}</li>`)
              document.getElementById('tempItems').innerHTML = text
            }
        }
    }}
</script>


<style lang="scss" scoped>
.nav-link{
  color: black;
}
</style>
