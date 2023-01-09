<template>
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-3 d-none d-md-block pl-0 pr-2 pt-0">
                <RelatedCards></RelatedCards>
            </div>
            <div v-if="currentCard" class="card col-6 p-3">
                <editor 
                output-format="html"
                :api-key="tinyApiKey"
                :init="{
                    plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
                    menubar: 'file edit view insert format tools table help',
                    toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl'
                    }"
                v-model="currentCard.value" />
            </div>
            <div class="col-3 pe-0">
                <input-bar></input-bar>
            </div>
        </div>
    </div>
<RunCardFormModal></RunCardFormModal>
</template>


<script>
import Editor from '@tinymce/tinymce-vue'
import { computed, onMounted, ref } from '@vue/runtime-core'
import { router } from '../router'
import { useRoute } from 'vue-router'
import { runCardService } from '../services/RunCardService'
import {tinyApiKey} from '../env'
import { AppState } from '../AppState'
import InputBar from '../components/InputBar.vue'
import RelatedCards from '../components/RelatedCards.vue'
import RunCardFormModal from '../components/RunCardFormModal.vue'
import { runGroupService } from '../services/RunGroupService'

export default {
  components: { 'editor': Editor},
    setup() {
        const cardContent = ref({})
        const newCardData = ref({})
        const route = useRoute()
        const cards = computed(() => AppState.cards)
        const currentCard = computed(() => AppState.currentCard)
        onMounted(() => {
            runGroupService.getGroupById(route.params.groupId)
            runCardService.getCardsInGroup(route.params.groupId);
        })
        return {
            cardContent,
            newCardData,
            async createCard() {
                try {
                    await runCardService.createCard(newCardData.value)
                    Pop.toast('Run Card Created', 'success')
                } catch (error) {
                    logger.error(error)
                    Pop.toast('Something went wrong!', 'error')
                }
            },
            async updateCard() {
                try {
                    await runCardService.updateCard(cardContent, currentcard.id)
                    Pop.toast('Run Card Updated', 'success')
                } catch (error) {
                    logger.error(error)
                    Pop.toast('Something went wrong!', 'error')
                }
            },
            tinyApiKey,
            cards,
            currentCard
        }
    }}
</script>


<style lang="scss" scoped>
</style>