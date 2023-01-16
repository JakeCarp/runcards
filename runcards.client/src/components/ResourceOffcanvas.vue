<template>
    <div class="component">
        <div class="offcanvas offcanvas-end text-dark" tabindex="-1" id="information" aria-labelledby="informationLabel">
            <div class="offcanvas-header">
                <h5 id="informationLabel">Information</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" data-bs-target="#information"
                    aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" data-bs-toggle="offcanvas"
                            data-bs-target="#expandedNFDResouces">NFD Resouces</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="offcanvas" data-bs-target="#expandedMutualAid">Mutual Aid
                            Resouces</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="offcanvas" data-bs-target="#expandedI84Standards">I84 & HWY 55
                            Standards</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="offcanvas" data-bs-target="#expandedPolicies">Policies</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="offcanvas" data-bs-target="#expandedRevisions">Revisions</a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- ------------------------------NFD Resources ----------------------- -->
        <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="expandedNFDResouces" aria-labelledby="expandedLabel">
            <div class="offcanvas-header">
                <h5 id="expandedLabel"><i class="fas fa-arrow-left cursor-pointer" data-bs-toggle="offcanvas"
                        data-bs-target="#information"></i></h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    data-bs-target="#expandedNFDResources" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <h1 class="text-center text-dark">Nampa Fire Department Resouce List</h1>
                <img class="img-fluid img-border mt-2" src="../assets/img/NFDResources.png" alt="">
            </div>
        </div>

        <!-- ----------------------------------------Mutual Aid ----------------------- -->
        <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="expandedMutualAid" aria-labelledby="expandedLabel">
            <div class="offcanvas-header">
                <h5 id="expandedLabel"><i class="fas fa-arrow-left cursor-pointer" data-bs-toggle="offcanvas"
                        data-bs-target="#information"></i></h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    data-bs-target="#expandedMutualAid" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body container-fluid text-dark">
                <h1 class="text-center">Mutual Aid Resouce List</h1>
                <div class="row text-center mt-4">
                    <div class="col-md-2 col-4 grey tab me-2" :class="{ 'selected': showCanyon }" @click="showCanyon = true">
                        <p class="mt-2 selectable">Canyon County</p>
                    </div>
                    <div class="col-md-2 col-4 grey tab" :class="{ 'selected': !showCanyon }" @click="showCanyon = false">
                        <p class="mt-2 selectable">Ada County</p>
                    </div>
                </div>
                <div class="row mutual-height ">
                    <div class="col-12 mt-5 ">
                        <img v-if="showCanyon" class="img-fluid mb-3" src="../assets/img/CanyonCountyResources.png" alt="">
                        <img v-else class="img-fluid" src="../assets/img/AdaCountyResources.png" alt="">
                    </div>
                </div>
            </div>
        </div>

        <!-- ------------------------------------------------I84 Standards ---------------- -->
        <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="expandedI84Standards" aria-labelledby="expandedLabel">
            <div class="offcanvas-header">
                <h5 id="expandedLabel"><i class="fas fa-arrow-left cursor-pointer" data-bs-toggle="offcanvas"
                        data-bs-target="#information"></i></h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    data-bs-target="#expandedI84Standards" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <h1 class="text-center text-dark">I84 & HWY 55 Run Card Standards</h1>
                <img class="img-fluid img-border w-100 mt-2" src="../assets/img/I84-standards.png" alt="">
            </div>
        </div>



        <!-- ------------------------------------------Polices-------------------------- -->
        <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="expandedPolicies" aria-labelledby="expandedLabel">
            <div class="offcanvas-header">
                <h5 id="expandedLabel"><i class="fas fa-arrow-left cursor-pointer" data-bs-toggle="offcanvas"
                        data-bs-target="#information"></i></h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    data-bs-target="#expandedPolicies" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <h1 class="text-center text-dark">Policies</h1>
                <p class="text-center text-dark">No polices Yet...</p>
            </div>
        </div>




        <!-- ------------------------------------------------Revisions----------------------------- -->

        <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="expandedRevisions" aria-labelledby="expandedLabel">
            <div class="offcanvas-header">
                <h5 id="expandedLabel"><i class="fas fa-arrow-left cursor-pointer" data-bs-toggle="offcanvas"
                        data-bs-target="#information"></i></h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                    data-bs-target="#expandedRevisions" aria-label="Close"></button>
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
                    <div class="col-md-2 col-4 d-flex align-items-center justify-content-center border">
                        <p>
                            1/14/23
                        </p>
                    </div>
                    <div class="col-md-10 col-8 border text-center">
                        <p>First Launch of RapidResponse given to Nampa Fire Department for review.</p>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>


<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const showCanyon = ref(true)
        return {
            showCanyon
        }
    }}
</script>


<style lang="scss" scoped>

</style>
