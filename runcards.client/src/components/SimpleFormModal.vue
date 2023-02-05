<template>
<div class="SimpleFormModal">
    <!-- Modal -->
    <div class="modal fade" id="SimpleFormModal" tabindex="-1" role="dialog" aria-labelledby="simpleFormModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form @submit.prevent="handleSubmit()">
                    <div class="modal-body">
                        <div class="form-card my-2">
                            <label for="cardTitleInput">Title</label>
                            <input v-model="cardTitle" type="text" class="form-control" id="cardTitleInput"
                                placeholder="Title..." required>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</div>
</template>


<script>
export default {
    setup(){
        return {}
    }}
</script>


<style lang="scss" scoped>

</style>