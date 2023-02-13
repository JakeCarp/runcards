<template>
    <div v-if="account.admin" class="container">
        <div class="row my-4">
            <div class="col-12 d-flex justify-content-around">
                <p id="RM" class="tab fs-1 fw-bold selectable">Resource Management</p>
            </div>
        </div>
        <div class="row card mx-5 py-2">
            <div class="col-6 offset-md-3 text-center mb-4">
            <h3>Channels</h3>
                <table class="table table-striped">
                    <thead>
                        <tr >
                            <th scope="col">Designation</th>
                            <th scope="col"><button class="btn" @click="openSimpleObjectModal('channel')">Add Channel</button></th>
                        </tr>
                    </thead>
                <tbody>
                    <tr v-for="channel in channels" :key="channel.id">
                        <th scope="row" class="pt-3">{{channel.name}}</th>
                        <td>
                            <button class="btn" @click="openSimpleObjectModal('channel', channel)"><i class="mdi mdi-pencil selectable"></i></button>
                            <button class="btn" @click="deleteChannel(channel.id)"><i class="mdi mdi-trash-can text-danger selectable"></i></button></td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div class="col-6 offset-md-3 text-center">
                <h3>Stations and Zones</h3>
                <div class="accordion" id="stationAccordion">
                    <div v-for="station in stations" :key="station.id" class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#a' + station.id"
                                aria-expanded="true" aria-controls="collapseOne">
                                {{station.name}}
                                <div class="ms-5">
                                    <button class="btn" @click.stop="openSimpleObjectModal('station', station)"><i
                                        class="mdi mdi-pencil selectable"></i></button>
                                        <button class="btn" @click.stop="deleteStation(station.id)"><i class="mdi mdi-trash-can text-danger selectable"></i></button>
                                    </div>
                            </button>
                        </h2>
                        <div :id="'a' + station.id" class="accordion-collapse collapse" aria-labelledby="headingOne"
                            data-bs-parent="#stationAccordion">
                            <div class="accordion-body">
                                <ul style="list-style:none;">
                                    <li v-for="zone in zones[station.id]" :key="zone.id" class="d-flex justify-content-between">
                                        <span>{{zone.name}}</span> 
                                        <span>
                                            <button class="btn" @click.stop="openSimpleObjectModal('zone', zone)"><i class="mdi mdi-pencil selectable"></i></button>
                                            <button class="btn" @click="deleteZone(zone.id, zone.stationId)"><i class="mdi mdi-trash-can text-danger selectable"></i></button>
                                        </span>
                                    </li>
                                    <li class="mt-2 border border-light p-3"><button  @click="openSimpleObjectModal('zone', undefined, station.id)" class="btn btn-primary">Add New Zone</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <button class="btn"  @click="openSimpleObjectModal('station')">Add Station</button>
                    </div>
                </div>
            </div>
            <div class="col-9 offset-md-1 text-center mt-4">
                <h3 class="ms-5 ps-5">Units</h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Unit Number</th>
                            <th scope="col">Type</th>
                            <th scope="col">Minimum Staff</th>
                            <th scope="col">24/7 staffed</th>
                            <th scope="col">Station</th>
                            <th scope="col"><button class="btn"  @click="openSimpleObjectModal('resource')">Add Unit</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="resource in resources" :key="resource.id">
                            <th scope="row">{{resource.unitNumber}}</th>
                            <td>{{resource.type}}</td>
                            <td>{{resource.minStaff}}</td>
                            <td> {{ resource.alwaysStaffed ? 'Yes' : 'No' }} </td>
                            <td> {{determinStationName(resource.stationId)}} </td>
                            <td>
                                <button @click="openSimpleObjectModal('resource', resource)" class="btn"><i class="mdi mdi-pencil selectable"></i></button>
                                <button @click="deleteResource(resource.id)"  class="btn"><i class="mdi mdi-trash-can text-danger selectable"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div v-else>
        LOGIN TO ADMIN ACCOUNT TO ACCESS ADMIN FUNCTIONALITY
    </div>
    <SimpleFormModal :objProp="selectedObj" :type="formType" :edit="formEdit" :stationId="stationId"></SimpleFormModal>
</template>


<script>
import { computed, onMounted, ref } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { Modal } from 'bootstrap'
import SimpleFormModal from '../components/SimpleFormModal.vue'
import { logger } from '../utils/Logger'
import { channelService } from '../services/ChannelService'
import { zoneService } from '../services/ZoneService'
import { stationService } from '../services/StationService'
import { resourceService } from '../services/ResourceService'
import Pop from '../utils/Pop'
export default {
    setup() {
        onMounted(async () => {
            await channelService.getChannels()
            await zoneService.getZones()
            await stationService.getStations()
            await resourceService.getResources()
            const modal = document.getElementById('SimpleFormModal');
            modal.addEventListener('hidden.bs.modal', () => {
                stationId.value = ''
                selectedObj.value = {}
                formType.value = ''
                formEdit.value = ''
            })
        })
        const stationId = ref('')
        const selectedObj = ref({})
        const formType = ref('')
        const formEdit = ref(false)
        const selectedTab = ref('')
        const account = computed(() => AppState.account)
        const channels = computed(() => AppState.channels)
        const zones = computed(() => AppState.zones)
        const stations = computed(() => AppState.stations)
        const resources = computed(() => AppState.resources)
        return {
            stationId,
            formEdit,
            formType,
            selectedObj,
            channels,
            zones,
            stations,
            resources,
            selectedTab,
            account,
            openSimpleObjectModal(str, obj, stnId) {
                try {
                    formType.value = str
                    if (stnId) {
                        stationId.value = stnId
                    }
                    console.log(stationId.value)
                    if (!obj) {
                        formEdit.value = false
                        selectedObj.value = {}
                        Modal.getOrCreateInstance('#SimpleFormModal').show()
                    } else {
                        formEdit.value = true
                        selectedObj.value = obj
                        Modal.getOrCreateInstance('#SimpleFormModal').show()
                    }
                } catch (error) {
                    logger.error(error)
                }
            },
            async deleteChannel(id) {
                try {
                    if (await Pop.confirm()) {
                        channelService.deleteChannel(id)
                        Pop.toast('Channel Removed!', 'success')
                    }
                } catch (error) {
                    logger.error(error)
                }
            },
            determinStationName(id) {
                const s = stations.value.filter(s => s.id === id)
                return s[0].name
            },
            async deleteZone(id, stationId) {
                try {
                    if (await Pop.confirm()) {
                        zoneService.deleteZone(id, stationId)
                        Pop.toast('Zone Removed!', 'success')
                    }
                } catch (error) {
                    logger.error(error)
                }
            },
            async deleteResource(id) {
                try {
                    if (await Pop.confirm()) {
                        resourceService.deleteResource(id)
                        Pop.toast('Resource Removed!', 'success')
                    }
                } catch (error) {
                    logger.error(error)
                }
            },
            async deleteStation(id) {
                try {
                    if (await Pop.confirm()) {
                        stationService.deleteStation(id)
                        Pop.toast('Station Removed!', 'success')
                    }
                } catch (error) {
                    logger.error(error)
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