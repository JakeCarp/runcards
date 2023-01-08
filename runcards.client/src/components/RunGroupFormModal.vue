<template>
    <div class="RunGroupFormModal">
        <!-- Modal -->
        <div class="modal fade" id="groupCreateModal" tabindex="-1" role="dialog" aria-labelledby="groupCreateModalLabel"
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
import { ref, watchEffect } from '@vue/runtime-core'
import { runGroupService } from '../services/RunGroupService'
export default {
    props: {
        group: {
            type: Object
        }
    },
    setup(props) {
        const groupData = ref({})
        watchEffect(() => {
            groupData.value = {...props.group}
        })
        return {
            groupData,
            async handleSubmit() {
                try {
                    if (groupData.value.id) {
                        await runGroupService.updateGroup(groupData.value)
                        Pop.toast('Run Card Group Edited!', 'success')
                    } else {
                        await runGroupService.createGroup(groupData.value)
                        Pop.toast('Run Card Group Created!', 'success')
                        groupData.value = {}
                    }
                    const modalElem = document.getElementById('groupCreateModal')
                    Modal.getorCreateInstance(modalElem).hide()
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