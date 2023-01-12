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
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { Modal } from 'bootstrap'
import { useRouter } from 'vue-router'
export default {
    props: {
        group: {
            type: Object,
            required: true
        }
    },
    setup(props){
        const cardTitle = ref('')
        const currentCard = computed(() => AppState.currentCard)
        const router = useRouter()
        return {
            currentCard,
            router,
            cardTitle,
            async handleSubmit() {
                try {
                    await runCardService.createCard({ title: cardTitle.value, content: '', groupId: props.group.id })
                    router.push({ name: 'group', params: { groupId: props.group.id, cardId: currentCard.id}})
                    Modal.getOrCreateInstance(document.getElementById('cardCreateModal')).hide()
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