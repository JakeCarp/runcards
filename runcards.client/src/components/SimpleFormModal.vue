<template>
<div class="SimpleFormModal">
    <!-- Modal -->
    <div class="modal fade" id="SimpleFormModal" tabindex="-1" role="dialog" aria-labelledby="simpleFormModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form v-if="type === 'channel' || type === 'station' || type === 'zone'">
                    <div class="modal-body">
                        <div class="form-card my-2">
                            <label for="ObjNameInput">Designation</label>
                            <input v-model="obj.name" type="text" class="form-control" id="ObjNameInput"
                                placeholder="Designation..." required>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" @click.prevent="handleSimpleSubmit()" class="btn btn-primary">Submit</button>
                    </div>
                </form>
                <form v-if="type === 'resource'">
                    <div class="modal-body">
                        <div class="form-card my-2">
                            <label for="ObjUnitNumber">Unit Number</label>
                            <input v-model="obj.unitNumber" type="text" class="form-control" id="ObjUnitNumber">
                        </div>
                        <div class="form-card my-2">
                            <label for="ObjType">Type</label>
                            <select v-model="obj.type" class="form-select" id="ObjType">
                                <option value="Reserve Engine">Reserve Engine</option>
                                <option value="Reserve Truck">Reserve Truck</option>
                                <option value="Water Tender">Water Tender</option>
                                <option value="Paramedic Engine">Paramedic Engine</option>
                                <option value="Paramedic Ladder">Paramedic Ladder</option>
                                <option value="Aerial/Pumper Truck">Aerial/Pumper Truck</option>
                                <option value="BC/Command">BC/Command</option>
                                <option value="Fire Chief">Fire Chief</option>
                                <option value="Deputy Chief">Deputy Chief</option>
                                <option value="Fire Marshal">Fire Marshal</option>
                                <option value="Training Officer">Training Officer</option>
                                <option value="Fire Invest">Fire Invest</option>
                                <option value="Air Trailer">Air Trailer</option>
                                <option value="Squad">Squad</option>
                                <option value="Squad 51">Squad 51</option>
                                <option value="Rescue Squad">Rescue Squad</option>\
                                <option value="Trench Rescue">Trench Rescue</option>
                                <option value="Brush Truck">Brush Truck</option>
                                <option value="Ambulance">Ambulance</option>
                            </select>
                        </div>
                        <div class="form-card my-2">
                            <label for="ObjMinStaff">Minimum Staff</label>
                            <input v-model="obj.minStaff" type="number" class="form-control" id="ObjMinStaff">
                        </div>
                        <div class="form-card my-2">
                            <label for="ObjStationId">Station</label>
                            <select v-model="obj.stationId" name="station" id="ObjStationId" class="form-select">
                                <option v-for="station in stations" :key="station.id" :value="station.id">{{ station.name }}</option>
                            </select>
                        </div>
                        <div class="form-check my-2">
                            <label for="ObjAlwaysStaffed" class="form-check-label">Is the unit always staffed?</label>
                            <input v-model="obj.alwaysStaffed" type="checkbox" class="form-check-input" id="ObjAlwaysStaffed">
                        </div>
                        <div class="form-check my-2">
                            <label for="ObjAdmin" class="form-check-label">Is the unit admin?</label>
                            <input v-model="obj.admin" type="checkbox" class="form-check-input" id="ObjAdmin">
                        </div>


                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" @click.prevent="handleResourceSubmit()" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</div>
</template>


<script>
import { ref } from '@vue/reactivity'
import { stationService } from '../services/StationService'
import { channelService } from '../services/ChannelService'
import { zoneService } from '../services/ZoneService'
import { Modal } from 'bootstrap'
import { computed, onUnmounted, watchEffect } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { resourceService } from '../services/ResourceService'
import Pop from '../utils/Pop'
export default {
    props: {
        objProp: {
            type: Object,
            required: false
        },
        type: {
            type: String,
            required: true
        },
        edit: {
            type: Boolean,
            required: true
        },
        stationId: {
            type: String,
            required: false
        }
    },
    setup(props) {
        const obj = ref({})
        const stations = computed(()=> AppState.stations)
        watchEffect(() => {
            obj.value = { ...props.objProp }
            if (props.stationId) {
                obj.value.stationId = props.stationId
            }
        })
        onUnmounted(() => {
            obj.value = {}
        })
        return {
            stations,
            obj,
            async handleSimpleSubmit() {
                try {
                    if (props.edit) { 
                        switch (props.type) {
                            case 'station':
                                await stationService.updateStation(obj.value)
                                Pop.toast('Station Successfully Edited!', 'success')
                                break;
                            case 'channel':
                                await channelService.updateChannel(obj.value)
                                Pop.toast('Channel Successfully Edited!', 'success')
                                break;
                            case 'zone':
                                await zoneService.updateZone(obj.value)
                                Pop.toast('Zone Successfully Edited!', 'success')
                                break;
                            default:
                                logger.error('Something went wrong')
                        }
                        obj.value = {}
                        Modal.getOrCreateInstance('#SimpleFormModal').hide()
                    } else {
                        switch (props.type) {
                            case 'station':
                                await stationService.createStation(obj.value)
                                Pop.toast('Station Created!', 'success')
                                break;
                            case 'channel':
                                await channelService.createChannel(obj.value)
                                Pop.toast('Channel Created!', 'success')
                                break;
                            case 'zone':
                                await zoneService.createZone(obj.value)
                                Pop.toast('Zone Created!', 'success')
                                break;
                            default:
                                logger.error('Something went wrong')
                        }
                        obj.value = {}
                        Modal.getOrCreateInstance('#SimpleFormModal').hide()
                    }
                } catch (error) {
                    
                }
            },
            async handleResourceSubmit() {
                if (!obj.value.admin) {
                    obj.value.admin = false
                }
                if (!obj.value.alwaysStaffed) {
                    obj.value.alwaysStaffed = false
                }
                if (props.edit) {
                try {
                        await resourceService.updateResource(obj.value)
                        Pop.toast('Resource Successfully Edited!', 'success')
                        obj.value = {}
                    Modal.getOrCreateInstance('#SimpleFormModal').hide()
                } catch (error) {
                    logger.error(error)
                }
                } else {
                        try {
                            await resourceService.createResource(obj.value)
                            Pop.toast('Resource Created!', 'success')
                            obj.value = {}
                            Modal.getOrCreateInstance('#SimpleFormModal').hide()
                        } catch (error) {
                            logger.error(error)
                        }
                    }
                
            }
        }
    }}
</script>


<style lang="scss" scoped>

</style>