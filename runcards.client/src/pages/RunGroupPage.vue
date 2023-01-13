<template>
    <div class="container">
        <div class="row justify-content-between mt-2">
            <div class="col-3 d-none d-md-block pl-0 pr-2 pt-0">
                <RelatedCards :cards="cards"></RelatedCards>
            </div>
            <div v-if="currentCard" class="card col-6 p-3">
                <div class="card-header text-center">
                   {{ currentCard.title }}<span v-if="selectedStation"> - {{ selectedStation}} - Zone {{ selectedZone }}</span>
                </div>
                <editor
                output-format="html"
                :api-key="tinyApiKey"
                :init="{
                    plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
                    menubar: 'file edit view insert format tools table help',
                    toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl'
                    }"
                v-model="cardContent" />
                <button class="btn btn-primary mt-3" @click="saveCardContent()">Save Card Content</button>
            </div>
            <div class="card col-6 p-3" v-else>
                <div class="card-body text-center">
                    <h3>Create a New Run Card to begin!</h3>
                </div>
            </div>
            <div class="col-3 pe-0">
                <input-bar></input-bar>
            </div>
        </div>
    </div>
    <RunCardFormModal :group="currentGroup"></RunCardFormModal>
</template>


<script>
import Editor from '@tinymce/tinymce-vue'
import { computed, onBeforeMount, ref, watch, watchEffect } from '@vue/runtime-core'
import { router } from '../router'
import { useRoute } from 'vue-router'
import { runCardService } from '../services/RunCardService'
import {tinyApiKey} from '../env'
import { AppState } from '../AppState'
import InputBar from '../components/InputBar.vue'
import RelatedCards from '../components/RelatedCards.vue'
import RunCardFormModal from '../components/RunCardFormModal.vue'
import { runGroupService } from '../services/RunGroupService'
import Pop from '../utils/Pop'
import { logger } from '../utils/Logger'

export default {
  components: { 'editor': Editor},
    setup() {
        onBeforeMount(async () => {
            await runGroupService.getGroupById(route.params.groupId)
            await runCardService.getCardsInGroup(route.params.groupId);
            if (route.params.cardId) {
                runCardService.setCurrentCard(cards.value.find(c => c.id === route.params.cardId))
            }
            if (route.query.station.length > 0) {
                runCardService.setZone(route.query.station, route.query.zone)
            }
        })
        const cardContent = ref('')
        const route = useRoute()
        const selectedStation = computed(() => AppState.selectedStation)
        const selectedZone = computed(() => AppState.selectedZone)
        const cards = computed(() => AppState.cards)
        const currentCard = computed(() => AppState.currentCard)
        const currentGroup = computed(() => AppState.currentGroup)
        watchEffect(() => {
            cardContent.value = currentCard.value?.content
        })
        return {
            selectedStation,
            selectedZone,
            currentGroup,
            tinyApiKey,
            cards,
            currentCard,
            cardContent,
            async saveCardContent() {
                try {
                    console.log(cardContent.value)
                    let updatedCard = currentCard.value
                    updatedCard.content = cardContent.value
                    console.log(updatedCard)
                    await runCardService.updateCard(updatedCard, updatedCard.id)
                    Pop.toast("Run Card Content Updated!", 'success')
             } catch (error) {
                    logger.error(error.message)
                    Pop.toast('Something went wrong!', 'error')
             }
            }
        }
    }}
</script>


<style lang="scss" scoped>
</style>
