<template>
    <div v-if="account.admin" class="container">
        <div class="row my-4">
            <div class="col-12 d-flex justify-content-around">
                <p @click="selectTab('RM')" id="RM" class="tab fs-1 fw-bold selectable">Resource Management</p>
                <p @click="selectTab('CD')" id="CD" class="tab fs-1 fw-bold selectable">Call Data</p>
            </div>
        </div>
        <div v-if="selectedTab === 'RM'" class="row card mx-5 py-2">
            <div class="col-6 offset-md-3 text-center mb-4">
            <h3>Channels</h3>
                <table class="table table-striped">
                    <thead>
                        <tr >
                            <th scope="col">Designation</th>
                            <th scope="col">Menu</th>
                        </tr>
                    </thead>
                <tbody>
                    <tr v-for="channel in channels" :key="channel.id">
                        <th scope="row">{{channel.name}}</th>
                        <td>
                            <button class="btn"><i class="mdi mdi-pencil selectable"></i></button>
                            <button class="btn" @click="openSimpleObjectModal(channel)"><i class="mdi mdi-trash-can text-danger selectable"></i></button></td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div class="col-6 offset-md-3 text-center">
                <h3>Stations and Zones</h3>
                <div class="accordion" id="stationAccordion">
                    <div v-for="station in stations" :key="station.id" class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + station.id"
                                aria-expanded="true" aria-controls="collapseOne">
                                {{station.name}}
                            </button>
                        </h2>
                        <div :id="station.id" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#stationAccordion">
                            <div class="accordion-body">
                                <ul style="list-style:none;">
                                    <li v-for="zone in zones[station.id]" :key="zone.id" class="d-flex justify-content-between">
                                        <span>{{zone.name}}</span> <button class="btn"><i class="mdi mdi-trash-can text-danger selectable"></i></button>
                                    </li>
                                    <li class="mt-2"><button class="btn btn-primary">Add New Zone</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-9 offset-md-1 text-center">
                <h3>Resources</h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Unit Number</th>
                            <th scope="col">Type</th>
                            <th scope="col">Minimum Staff</th>
                            <th scope="col">24/7 staffed</th>
                            <th scope="col">Station</th>
                            <th scope="col">Menu</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="resource in resources" :key="resource.id">
                            <th scope="row">{{resource.unitNumber}}</th>
                            <td>{{resource.type}}</td>
                            <td>{{resource.minStaff}}</td>
                            <td>resource.alwaysStaffed ? 'Yes' : 'No'</td>
                            <td>{{determinStationName(resource.stationId)}}</td>
                            <td>
                                <button class="btn"><i class="mdi mdi-pencil selectable"></i></button>
                                <button class="btn"><i class="mdi mdi-trash-can text-danger selectable"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div v-if="selectedTab === 'CD'">
            CALL DATA
        </div>
    </div>
    <div v-else>
        LOGIN TO ADMIN ACCOUNT TO ACCESS ADMIN FUNCTIONALITY
    </div>
</template>


<script>
import { computed, ref } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { Modal } from 'bootstrap'
export default {
    setup() {
        const selectedObj = ref({})
        const selectedTab = ref('')
        const account = computed(() => AppState.account)
        const channels = computed(() => AppState.channels)
        const zones = computed(() => AppState.zones)
        const stations = computed(() => AppState.stations)
        const resources = computed(() => AppState.resources)
        return {
            selectedObj,
            channels,
            zones,
            stations,
            resources,
            selectedTab,
            account,
            selectTab(str) {
                selectedTab.value = str
                if (str === "RM") {
                    document.getElementById('CD').classList.remove('selected')
                    document.getElementById(`${str}`).classList.add('selected')
                } else {
                    document.getElementById('RM').classList.remove('selected')
                    document.getElementById(`${str}`).classList.add('selected')
                }
            },
            openSimpleObjectModal(obj) {
                if (!obj) {
                    let modal = Modal.getOrCreateInstance('SimpleFormModal')
                   modal.open()
                } else {
                    selectedObj.value = obj
                    let modal = Modal.getOrCreateInstance('SimpleFormModal')
                    modal.open()
                }
            }
        }
    }}
</script>


<style lang="scss" scoped>
.tab.selected {
    color: rgba(24, 100, 214, 0.896);
    text-decoration: underline;
}
</style>