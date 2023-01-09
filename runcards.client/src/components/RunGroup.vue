<template>
        <div @click="navToCardPage()" :class="group.type == 1 ? 'ems': 'fire'" class="card cursor col-md-3 col-4 m-3 selectable">
            <div class="card-body">
                <h4 class="card-title mb-4">{{group.title}}</h4>
                <p class="card-text mb-4">{{group.description}}</p>
                <p class="card-text text-end bottom">
                  Begin Situation <i class="fas fa-arrow-right cursor-pointer"></i>
                   </p>
            </div>
        </div>
</template>


<script>
import { router } from '../router'
export default {
    props: {
        group: {type: Object, required: true}
    },
    setup(props){
        return {
            navToCardPage() {
                router.push({ name: "group", params: { groupId: props.group.id}})
            }
        }
    }}
</script>


<style lang="scss" scoped>

.card{
    border-radius: .5em;
      box-shadow: 0 1.5em 2.5em -.5em rgba(#000000, .1);
  transition: transform .45s ease, background .45s ease;
  min-height: 25vh;
}

.card:hover{
  transform: scale(1.1);
}

.ems {
border-top: solid hsl(180, 62%, 55%);
}


.fire {
  border-top: solid hsl(0, 78%, 62%)
}

.bottom{
  position: absolute;
  bottom: 5px;
  right: 20px;
}

</style>
