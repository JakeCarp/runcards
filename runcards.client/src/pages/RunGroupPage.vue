<template>
    <div class="container">
        <div class="row justify-content-around mt-2">
            <div class="col-md-3 d-none d-md-block pt-0">
                <RelatedCards></RelatedCards>
            </div>
            <div v-if="currentCard" class="card col-md-6 pt-3 mt-2 shadow">
                <div  class="text-center mb-3">
                    <h3>{{ currentGroup.title }} </h3>
                </div>
                <div v-if="!edit" class="card-header text-center">
                <span><i @click="edit = !edit" class="mdi mdi-pencil selectable"></i></span> {{ currentCard.title }}<span v-if="selectedStation"> - {{ selectedStation.name }} - Zone {{ selectedZone.name }}</span> <span class="justify-self-end"><i @click="removeCard()" class="mdi mdi-trash-can text-danger selectable"></i></span>
                </div>
                <div v-if="edit" class="card-header text-center">
                    <input v-model="editCard.title" type="text"> <span><i @click="updateCard()" class="mdi mdi-check selectable"></i></span>
                </div>
                <!-- <editor
                class="editor"
                output-format="html"
                :disabled="!account.admin"
                :api-key="tinyApiKey"
                :init="{
                    plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak advlist lists nonbreaking anchor insertdatetime  wordcount help charmap quickbars emoticons',
                menubar: 'file edit view insert format tools table help',
                toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl'
                }"
                v-model="cardContent" /> -->
                <QuillEditor class="quill" :content="cardContent"  v-model:content="cardContent" toolbar="full" theme="snow" content-type="html"></QuillEditor>
                <button v-if="account.admin" class="btn btn-primary my-3" @click="saveCardContent()">Save Card Content</button>
            </div>
            <div class="card col-md-6 pt-3 my-3 shadow" v-else>
                <div class="card-body text-center">
                    <h3>Create a New Run Card to begin!</h3>
                </div>
            </div>
            <div class="col-md-3 mt-2 ">
                <input-bar></input-bar>
            </div>
        </div>
    </div>
    <RunCardFormModal :group="currentGroup"></RunCardFormModal>
</template>


<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import Editor from '@tinymce/tinymce-vue'
import { computed, onBeforeMount, onMounted, ref, watch, watchEffect } from '@vue/runtime-core'
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
import { stationService } from '../services/StationService';
import { zoneService } from '../services/ZoneService';

export default {
    components: {
        'editor': Editor,
    QuillEditor},
    setup() {
        onBeforeMount(async () => {
            await runGroupService.getGroupById(route.params.groupId)
            await runCardService.getCardsInGroup(route.params.groupId);
            await stationService.getStations()
            await zoneService.getZones()
            if (route.params.cardId) {
                runCardService.setCurrentCard(cards.value.find(c => c.id === route.params.cardId))
            }
             runCardService.setZone(route.params.stationId, route.params.zoneId)

            AppState.timeElapsed = 0
        })
        const edit = ref(false)
        const editCard = ref({})
        const cardContent = ref('')
        const route = useRoute()
        const selectedStation = computed(() => AppState.selectedStation)
        const selectedZone = computed(() => AppState.selectedZone)
        const cards = computed(() => AppState.cards)
        const currentCard = computed(() => AppState.currentCard)
        const currentGroup = computed(() => AppState.currentGroup)
        const account = computed(() => AppState.account)
        watchEffect(() => {
            editCard.value = currentCard.value
            cardContent.value = currentCard.value?.content
        })
        watchEffect(() => {
            if (account.value.admin && account.value.admin === false) {
                console.log(document.getElementsByClassName('ql-toolbar'))
                document.getElementsByClassName('ql-toolbar')[0].classList.add('d-none')
            }
       })
        return {
            edit,
            editCard,
            account,
            selectedStation,
            selectedZone,
            currentGroup,
            tinyApiKey,
            cards,
            currentCard,
            cardContent,
            async saveCardContent() {
                try {
                    let updatedCard = currentCard.value
                    updatedCard.content = cardContent.value
                    console.log(updatedCard.content)
                    await runCardService.updateCard(updatedCard, updatedCard.id)
                    Pop.toast("Run Card Content Updated!", 'success')
                } catch (error) {
                    logger.error(error.message)
                    Pop.toast('Something went wrong!', 'error')
                }
            },
            async updateCard() {
                try {
                    await runCardService.updateCard(editCard.value, editCard.value.id)
                    edit.value = !edit.value
                    Pop.toast('Card Successfully Updated', 'success')
                } catch (error) {
                    logger.log(error)
                    Pop.toast(error.message, 'error')
                }

            },
            async removeCard() {
                try {
                    if (await Pop.confirm()) {
                        await runCardService.deleteCard(currentCard.value.id)
                        router.push({ name: 'group', params: { groupId: currentGroup.value.id, cardId: currentCard.value.id }, query: { station: selectedStation.value, zone: selectedZone.value } })
                        Pop.toast('Run Card Removed', 'success')
                    }
                } catch (error) {
                    logger.error(error)
                    Pop.toast(error.message, 'error')
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.editor {
    height: 100%;
}

.quill {
    overflow-y: scroll;
}
</style>