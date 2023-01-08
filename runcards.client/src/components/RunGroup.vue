<template>
        <div @click="navToCardPage()" class="card ems col-md-3 col-4 offset-md-2 m-3 selectable">
            <div class="card-body">
                <h5 class="card-title">{{group.title}}</h5>
                <p class="card-text">{{group.description}}</p>
            </div>
        </div>
</template>


<script>
import { router } from '../router'
export default {
    props: {
        group: {type: Object, required: true}
    },
    setup(){
        return {
            navToCardPage() {
                router.push({ name: "Run Card", params: { groupId: props.group.id}})
            }
        }
    }}
</script>


<style lang="scss" scoped>
.ems {
    background-color: rgba(0, 0, 255, 0.65);
}

.fire {
    background-color: rgba(255, 0, 0, 0.65);
}
</style>
