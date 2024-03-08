<template>
    <div class="RunGroupFormModal">
        <!-- Modal -->
        <div class="modal fade" :id="'a' + groupData.id + 'a'" tabindex="-1" role="dialog" aria-labelledby="groupCreateModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form @submit.prevent="handleSubmit()">
                        <div class="modal-header">
                            <h5 class="modal-title" id="groupCreateModalLabel">Create Run Card Group</h5>
                            <button type="button" class="close btn" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group my-2">
                                <label for="groupTitleInput">Title</label>
                                <input v-model="groupData.title" type="text" class="form-control" id="groupTitleInput"
                                    placeholder="Title..." required>
                            </div>
                            <div class="form-group my-2">
                                <label for="groupDescriptionInput">Description</label>
                                <input v-model="groupData.description" type="text" class="form-control"
                                    id="groupDescriptionInput" placeholder="Description..." required>
                            </div>
                            <div class="form-group my-2">
                                <label for="groupTypeSelect">Run Card Group Type</label>
                                <select v-model="groupData.type" class="form-control" id="groupTypeSelect" required>
                                    <option value="1">EMS</option>
                                    <option value="2">Fire</option>
                                    <option value="3">I84 and HWY 55</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import { ref, watchEffect, computed } from '@vue/runtime-core'
import { runGroupService } from '../services/RunGroupService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { Modal } from 'bootstrap'
export default {
    props: {
        group: {
            type: Object
        }
    },
    setup(props) {
        const groupData = ref({})
        const selectedZone = computed(() => AppState.selectedZone)
        watchEffect(() => {
            groupData.value = {...props.group}
        })
        return {
            groupData,
            async handleSubmit() {
                try {
                    if (groupData.value.id) {
                        await runGroupService.updateGroup(groupData.value, groupData.value.id)
                        Pop.toast('Run Card Group Edited!', 'success')
                    } else {
                        await runGroupService.createGroup({...groupData, zoneId: selectedZone.id})
                        Pop.toast('Run Card Group Created!', 'success')
                        groupData.value = {}
                    }
                    let modalElem 
                    if (groupData.value.id) {
                        modalElem = document.getElementById('a' + groupData.value.id + 'a')
                    } else {
                        modalElem = document.getElementById('aundefineda')
                    }
                    Modal.getOrCreateInstance(modalElem).hide()
                } catch (error) {
                    logger.error(error)
                    Pop.toast(error.message, 'error')
                }
            }
        }
    }}
</script>


<style lang="scss" scoped>

</style>