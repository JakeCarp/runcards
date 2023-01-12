<template>
        <div :class="group.type == 1 ? 'ems': 'fire'" class="card cursor col-md-3 col-4 m-3 selectable">
          <div class="dropdown ms-3 mt-3 d-flex justify-content-end">
            <button aria-label="dropdown button" id="dropDownMenu"
              data-bs-toggle="dropdown" aria-expanded="false" class="dropdown-toggle btn btn-outline-primary">
              <i class="mdi mdi-menu"></i>
            </button>
            <ul class="dropdown-menu menu" aria-labelledby="dropdownMenuButton1">
              <li data-bs-toggle="modal" :data-bs-target="'#a' + group.id + 'a'" title="Edit Group" class="dropdown-item">
                <i class="mdi mdi-24px mdi-pencil coloredit selectable1"> Edit</i>
              </li>
              <li class="dropdown-item">
                <i @click="removeGroup" title="Remove Plot" class="mdi mdi-24px mdi-trash-can selectable1 text-danger">
                  Delete</i>
              </li>
            </ul>
          </div>
            <div @click="navToCardPage()" class="card-body">
                <h4 class="card-title mb-4">{{group.title}}</h4>
                <p class="card-text mb-4">{{group.description}}</p>
                <p class="card-text text-end bottom">
                  Begin Situation <i class="fas fa-arrow-right cursor-pointer"></i>
                   </p>
            </div>
            <RunGroupFormModal :group="group"></RunGroupFormModal>
        </div>
</template>


<script>
import { useRouter } from 'vue-router'
import { router } from '../router'
import { runGroupService } from '../services/RunGroupService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import RunGroupFormModal from './RunGroupFormModal.vue'
export default {
  components: { RunGroupFormModal },
    props: {
        group: {type: Object, required: true}
    },
  setup(props) {
    const router = useRouter()
    return {
          router,
          navToCardPage() {
            runGroupService.setCurrentGroup(props.group)
            if (props.group.cards.length > 0) {
              router.push({name: "group", params: {groupId: props.group.id, cardId: props.group.cards[0]}})
            } else {
              router.push({ name: "group", params: { groupId: props.group.id } })
              }
          },
          async removeGroup() {
            try {
              if (await Pop.confirm()) {
                await runGroupService.deleteGroup(props.group.id)
                Pop.toast('Run Card Group Removed', 'success')
              }
            } catch (error) {
              logger.error(error)
              Pop.toast(error.message, 'error')
            }
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

.menu {
  z-index: 10000;
}
// .card:hover{
//   transform: scale(1.1);
// }

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
