<template>
    <div class="flex-shrink-0 p-3 relatedCards mt-2 shadow ">
        <div class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none ">
            <router-link to="/groups" class="fs-5 fw-semibold">Home</router-link>
        </div>
        <div class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
            <h4 class="fs-5 fw-semibold">Related Cards</h4>
        </div>
        <ul v-if="cards.length > 0" class="list-unstyled ps-0 scroll">
            <li v-for="card in cards" :key="card.id" @click="setCurrentCard(card)" :class="currentCard.id === card.id ? 'mb-2 selectable current' : 'mb-2 selectable'">
               {{ card.title }}
            </li>
        </ul>
        <div class="panel mb-3 ">
            <button class="btn btn-primary mx-2" data-bs-toggle="offcanvas" data-bs-target="#information"
                aria-controls="information">Information</button>

            <button v-if="account.admin" class="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#cardCreateModal">Create New Card</button>

        </div>
    </div>
</template>


<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { runCardService } from '../services/RunCardService'
import { useRouter } from 'vue-router'
import { applyStyles } from '@popperjs/core'
export default {
    setup() {
        const router = useRouter()
        const currentCard = computed(() => AppState.currentCard)
        const selectedStation = computed(() => AppState.selectedStation)
        const selectedZone = computed(() => AppState.selectedZone)
        const cards = computed(() => AppState.cards)
        const account = computed(() => AppState.account)
        return {
            cards,
            account,
            selectedStation,
            selectedZone,
            router,
            currentCard,
            setCurrentCard(card) {
                runCardService.setCurrentCard(card)
                router.push({ name: "group", params: { groupId: card.groupId, cardId: card.id, stationId: selectedStation.value.id, zoneId: selectedZone.value.id } })
            }
        }
    }}
</script>


<style lang="scss" scoped>
.relatedCards {
    height: 90vh;
    border-radius: 0.375rem;
}

.current {
    font-weight: bold;
}

.scroll {
    overflow-y: auto;
    height: 60vh;
}
</style>
