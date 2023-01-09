<template>
    <div class="RunCardFormModal">
        <!-- Modal -->
        <div class="modal fade" id="cardCreateModal" tabindex="-1" role="dialog" aria-labelledby="cardCreateModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <form @submit.prevent="handleSubmit()">
                        <div class="modal-body">
                            <div class="form-card my-2">
                                <label for="cardTitleInput">Title</label>
                                <input v-model="cardTitle" type="text" class="form-control" id="cardTitleInput"
                                    placeholder="Title..." required>
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
import { ref } from '@vue/reactivity'
import { runCardService } from '../services/RunCardService'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
    setup(){
        const cardTitle = ref('')
        const currentGroup = computed(() => AppState.currentGroup)
        return {
            cardTitle,
            currentGroup,
            async handleSubmit() {
                try {
                    await runCardService.createCard({ title: cardTitle, content: '', groupId: currentGroup.id })
                    Pop.toast('Run Card Created!', 'success')
                } catch (error) {
                    logger.error(error)
                    Pop.toast('Something Went Wrong!', 'error')
                }
            }
        }
    }}
</script>


<style lang="scss" scoped>

</style>