<template>
  <div class="row bg-dark nav align-items-center justify-content-between">
    <div class="col-4">
      <h1>DPatch</h1>
    </div>
    <!-- TODO needs to be user.isAuthenticated -->
    

  </div>

</template>


<script>
import { computed, ref } from "@vue/reactivity"
import { AppState } from "../AppState"
import { Offcanvas } from "bootstrap"
export default {
  setup(){
    const showCanyon = ref(true)
    return {
      showCanyon,
      user: computed(() => AppState.user),
      expand(id){
      Offcanvas.getOrCreateInstance(document.getElementById('information')).hide()
      Offcanvas.getOrCreateInstance(document.getElementById('expanded' + id)).show()
      },
      collapse(id){
        Offcanvas.getOrCreateInstance(document.getElementById('expanded' + id)).hide()
           Offcanvas.getOrCreateInstance(document.getElementById('information')).show()
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.nav{
  min-height: 10vh;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.grey{
  background: #CFDDE4;
}
.tab{
border-top-right-radius: 5px;
border-top-left-radius: 5px;
cursor: pointer;
font-size: 18px;
}
.selected{
  border: 2px solid #3C91E6;
}
.mutual-height{
  min-height: 70vh;
  background-color: black;
}
.img-border{
  border: 2px solid black;
}
.nav-link{
  cursor: pointer;
}
.cursor{
  cursor: pointer;
}
.table-border{
  border: 1px solid black;
}
</style>
