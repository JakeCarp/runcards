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
    <div class="nav-item">
      <button class="btn btn-warning me-2" data-bs-toggle="offcanvas" data-bs-target="#information" aria-controls="information">Information</button>
    </div>

    <div class="offcanvas offcanvas-end text-dark" tabindex="-1" id="information" aria-labelledby="informationLabel">
  <div class="offcanvas-header">
    <h5 id="informationLabel">Information</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" @click="expand('NFDResouces')">NFD Resouces</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="expand('MutalAid')">Mutal Aid Resouces</a>
          </li>
           <li class="nav-item">
            <a class="nav-link" @click="expand('I84Standards')">I84 & HWY 55 Standards</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"  @click="expand('Policies')">Policies</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"  @click="expand('Revisions')">Revisions</a>
          </li>
        </ul>
  </div>
</div>
<!-- ------------------------------NFD Resources ----------------------- -->
<div class="offcanvas offcanvas-end w-100" tabindex="-1" id="expandedNFDResouces" aria-labelledby="expandedLabel">
  <div class="offcanvas-header">
    <i class="mdi mdi-arrow-left text-dark mdi-24px cursor" title="Go Back" @click="collapse('NFDResouces')"></i>
    <h5 id="expandedLabel">Offcanvas big</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <h1 class="text-center text-dark">Nampa Fire Department Resouce List</h1>
    <img class="img-fluid img-border mt-2" src="../assets/img/NFDResources.PNG" alt="">
  </div>
</div>

 <!-- ----------------------------------------Mutual Aid ----------------------- -->
<div class="offcanvas offcanvas-end w-100" tabindex="-1" id="expandedMutalAid" aria-labelledby="expandedLabel">
  <div class="offcanvas-header">
        <i class="mdi mdi-arrow-left text-dark mdi-24px cursor" title="Go Back" @click="collapse('MutalAid')"></i>
    <h5 id="expandedLabel">Offcanvas big</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body container-fluid text-dark">
    <h1 class="text-center">Mutual Aid Resouce List</h1>
    <div class="row text-center mt-4">
      <div class="col-md-2 col-4 grey tab me-2" :class="{'selected' : showCanyon}" @click="showCanyon = true">
        <p class="mt-2">Canyon County</p>
      </div>
      <div class="col-md-2 col-4 grey tab" :class="{'selected' : !showCanyon}" @click="showCanyon = false">
        <p class="mt-2" >Ada County</p>
      </div>
    </div>
    <div class="row mutual-height ">
      <div class="col-12 mt-5 ">
        <img v-if="showCanyon" class="img-fluid mb-3" src="../assets/img/CanyonCountyResources.PNG" alt="">
        <img v-else class="img-fluid" src="../assets/img/AdaCountyResources.PNG" alt="">
      </div>
    </div>
  </div>
</div>

<!-- ------------------------------------------------I84 Standards ---------------- -->
<div class="offcanvas offcanvas-end w-100" tabindex="-1" id="expandedI84Standards" aria-labelledby="expandedLabel">
  <div class="offcanvas-header">
    <i class="mdi mdi-arrow-left text-dark mdi-24px cursor" title="Go Back" @click="collapse('I84Standards')"></i>
    <h5 id="expandedLabel">Offcanvas big</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
        <h1 class="text-center text-dark">I84 & HWY 55 Run Card Standards</h1>
    <img class="img-fluid img-border w-100 mt-2" src="../assets/img/I84-standards.PNG" alt="">
  </div>
</div>



<!-- ------------------------------------------Polices-------------------------- -->
<div class="offcanvas offcanvas-end w-100" tabindex="-1" id="expandedPolicies" aria-labelledby="expandedLabel">
  <div class="offcanvas-header">
    <i class="mdi mdi-arrow-left text-dark mdi-24px cursor" title="Go Back" @click="collapse('Policies')"></i>
    <h5 id="expandedLabel">Offcanvas big</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
        <h1 class="text-center text-dark">Policies</h1>
    <p class="text-center text-dark">No polices Yet...</p>
  </div>
</div>




<!-- ------------------------------------------------Revisions----------------------------- -->

<div class="offcanvas offcanvas-end w-100" tabindex="-1" id="expandedRevisions" aria-labelledby="expandedLabel">
  <div class="offcanvas-header">
    <i class="mdi mdi-arrow-left text-dark mdi-24px cursor" title="Go Back" @click="collapse('Revisions')"></i>
    <h5 id="expandedLabel">Offcanvas big</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body container-fluid text-dark">
        <h1 class="text-center">Revisions</h1>
        <div class="row text-center mt-4">
          <div class="col-md-2 col-4 mt-4">
            <p>Date</p>
          </div>
          <div class="col-md-10 col-8 mt-4">
            <p>
            Revision Notes
            </p>
          </div>
        </div>
        <!-- ----------------------------------Revison Content------------------ -->
        <div class="row">
          <div class="col-md-2 col-4 table-border d-flex align-items-center justify-content-center">
            <p>
            11/21/21
            </p>
          </div>
          <div class="col-md-10 col-8 table-border">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus itaque molestiae ducimus earum ea iure velit, quod amet quas quidem alias possimus laudantium officiis quis dicta esse nihil assumenda? Quibusdam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias omnis dolorum qui impedit ducimus voluptate culpa doloremque dicta similique, praesentium quae atque id voluptatum sequi, cupiditate nam non ab pariatur.</p>
          </div>
        </div>
  </div>
</div>

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
