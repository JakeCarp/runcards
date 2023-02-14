<template>
        <div @click="navToCardPage()" :class="group.type == 1 ? 'ems': group.type == 2 ? 'fire' : 'I84'" class="widget cursor col-md-3 col-4 m-3 selectable">
          <div v-if="account.admin" class="dropdown ms-3 mt-3 d-flex justify-content-end">
            <button @click.stop aria-label="dropdown button" id="dropDownMenu"
              data-bs-toggle="dropdown" aria-expanded="false" class="dropdown-toggle btn btn-outline-primary">
              <i class="mdi mdi-menu"></i>
            </button>
            <ul class="dropdown-menu menu" aria-labelledby="dropdownMenuButton1">
              <li data-bs-toggle="modal" :data-bs-target="'#a' + group.id + 'a'" title="Edit Group" class="dropdown-item">
                <i class="mdi mdi-24px mdi-pencil coloredit selectable1"> Edit</i>
              </li>
              <li class="dropdown-item">
                <i @click="removeGroup()" title="Remove Group" class="mdi mdi-24px mdi-trash-can selectable1 text-danger">
                  Delete</i>
              </li>
            </ul>
          </div>
            <div>
                <h4 class="card-title mb-4">{{group.title}}</h4>
                <p class="card-text mb-4">{{group.description}}</p>
            </div>
            <RunGroupFormModal :group="group"></RunGroupFormModal>
        </div>
</template>


<script>
import { computed } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import { router } from '../router'
import { runGroupService } from '../services/RunGroupService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import RunGroupFormModal from './RunGroupFormModal.vue'
import { AppState } from '../AppState'
export default {
  components: { RunGroupFormModal },
    props: {
        group: {type: Object, required: true}
    },
  setup(props) {
    const router = useRouter()
    const zone = computed(() => AppState.selectedZone)
    const station = computed(() => AppState.selectedStation)
    const account = computed(() => AppState.account)
    return {
      account,
          station,
          zone,
          router,
      navToCardPage() {
        if (station.value.length <= 0) {
          Pop.toast('Please select a zone before proceeding!', 'error')
        } else {
            runGroupService.setCurrentGroup(props.group)
            if (props.group.cards.length > 0) {
              router.push({ name: "group", params: { groupId: props.group.id, stationId: station.value.id, zoneId: zone.value.id, cardId: props.group.cards[0]}})
            } else {
              router.push({ name: "group", params: { groupId: props.group.id, stationId: station.value.id, zoneId: zone.value.id} })
              }
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
.widget{
    border-radius: .5em;
      box-shadow: 0 1.5em 2.5em -.5em rgba(#000000, .1);
  transition: transform .45s ease, background .45s ease;
  min-height: 25vh;
}

body.darkmode--activated h4,
body.darkmode--activated p,
body.darkmode--activated button,
body.darkmode--activated li,
body.darkmode--activated a {
  color: #fff !important
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

.I84 {
  border-top: solid hsl(23, 70%, 50%)
}

.bottom{
  position: absolute;
  bottom: 5px;
  right: 20px;
}
</style>
