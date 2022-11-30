<template>
    <div class="container ms-0 ps-0">
        <div class="row justify-content-between">
            <div class="col-3">
                <div class="flex-shrink-0 p-3 bg-white" style="width: 280px;">
                    <div class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                        <span class="fs-5 fw-semibold">Related Cards</span>
                    </div>
                    <ul class="list-unstyled ps-0">
                       
                    </ul>
                </div>
            </div>
            <div class="card col-6">
                <editor :api-key="tinyApiKey" :init="{
    plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
    menubar: 'file edit view insert format tools table help',
    toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl'

                }" />
            </div>
            <div class="col-3">

            </div>
        </div>
    </div>

</template>


<script>
import Editor from '@tinymce/tinymce-vue'
import { computed, onMounted } from '@vue/runtime-core'
import { router } from '../router'
import { useRoute } from 'vue-router'
import { runCardService } from '../services/RunCardService'
import {tinyApiKey} from '../env'
import { AppState } from '../AppState'

export default {
  components: { 'editor': Editor},
    setup() {
        const route = useRoute()
        onMounted(() => {
            // runCardService.getCardsInGroup(route.params.groupId);
        })
        const cards = computed(() => AppState.cards)
        const currentCard = computed(() => AppState.currentCard)
        return {
            tinyApiKey,
            cards,
            currentCard
        }
    }}
</script>


<style lang="scss" scoped>

</style>