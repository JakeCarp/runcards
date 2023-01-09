<template>
    <div class="flex-shrink-0 p-3 bg-white sidenav mt-2 shadow ">
        <div class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
            <span class="fs-5 fw-semibold">Related Cards</span>
        </div>
        <ul class="list-unstyled ps-0 scroll">
            <li v-for="card in cards" :key="card.id" @click="setCurrentCard(card)" class="mb-2">
               {{ card.title }}
            </li>
        </ul>
        <div class="bottom mb-3">
            <button class="btn btn-primary mx-2" data-bs-toggle="offcanvas" data-bs-target="#information"
                aria-controls="information">Information</button>
                <button class="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#cardCreateModal">Create New Card</button>
        </div>
    </div>
</template>


<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
    setup() {
        const cards = computed(() => AppState.cards)
        return {
            cards
        }
    }}
</script>


<style lang="scss" scoped>
.bottom {
    position: absolute;
    bottom: 0;
}

.sidenav {
    width: 280px;
    height: 90vh;
}

.scroll {
    overflow-y: auto;
    height: 70vh;
}
</style>