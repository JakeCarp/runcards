<template>
  <div class="bg-dark nav align-items-center justify-content-between">
    <div class="nav-item">
  <button type="button" class="btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false">
    Station 1
  </button>
  <div class="dropdown-menu">
  <a class="dropdown-item">12345</a>
  <a class="dropdown-item">12435</a>
  <a class="dropdown-item">12534</a>
  <a class="dropdown-item">13452</a>
  <a class="dropdown-item">13524</a>
  <a class="dropdown-item">14235</a>
  <a class="dropdown-item">14235</a>
  </div>
    </div>

       <div class="nav-item">
  <button type="button" class="btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false">
    Station 2
  </button>
  <div class="dropdown-menu">
     <a class="dropdown-item">21453</a>
    <a class="dropdown-item">21543</a>
     <a class="dropdown-item">24135</a>
     <a class="dropdown-item">25134</a>
  </div>
    </div>

           <div class="nav-item">
  <button type="button" class="btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false">
    Station 3
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item">31452</a>
    <a class="dropdown-item">31542</a>
    <a class="dropdown-item">34152</a>
    <a class="dropdown-item">35142</a>
  </div>
    </div>

               <div class="nav-item">
  <button type="button" class="btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false">
    Station 4
  </button>
  <div class="dropdown-menu">
 <a class="dropdown-item" routerLink="station/station4/41235">41235</a>
 <a class="dropdown-item" routerLink="station/station4/41325">41325</a>
  </div>
    </div>

                   <div class="nav-item">
  <button type="button" class="btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false">
    Station 5
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item">51234</a>
    <a class="dropdown-item">51324</a>
    <a class="dropdown-item">52134</a>
    <a class="dropdown-item">53124</a>
  </div>
    </div>

                       <div class="nav-item">
  <button type="button" class="btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false">
    I-84
  </button>
  <div class="dropdown-menu">
                              <a class="dropdown-item">13452</a>
                              <a class="dropdown-item">31542</a>
                              <a class="dropdown-item">34152</a>
                              <a class="dropdown-item">35142</a>
                              <a class="dropdown-item">43152</a>
                              <a class="dropdown-item">53142</a>
                              <a class="dropdown-item">43C/1</a>
                              <a class="dropdown-item">C43/1</a>
                              <a class="dropdown-item">M53/1</a>
                              <a class="dropdown-item">53M/1</a>
  </div>
    </div>

                           <div class="nav-item">
  <button type="button" class="btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false">
    HWY-55
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item">C4/1</a>
  </div>
    </div>

                               <div class="nav-item">
  <button type="button" class="btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false">
      Upper Deer Flat
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item">21453</a>
  </div>
    </div>

                                   <div class="nav-item">
  <button type="button" class="btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false">
      Wildlife Refuge
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item">WR214</a>
    <a class="dropdown-item">WR241</a>
    <a class="dropdown-item">WR412</a>
  </div>
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
