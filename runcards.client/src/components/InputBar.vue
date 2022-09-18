<template>
  <div class="component bg-dark p-3">
    <div>
      <label for="radio">ASSIGNED CALL CHANNEL:</label>
      <select name="radio">
        <option>C1 CHARLES-1</option>
        <option>C2 CHARLES-2</option>
        <option>C3 CHARLES-3</option>
        <option>C4 CHARLES-4</option>
        <option>C5 CHARLES-5</option>
        <option>C6 CHARLES-6</option>
        <option>C7 CHARLES-7 MA</option>
        <option>C8 CHARLES-8</option>
        <option>C9 CHARLES-9</option>
        <option>C10 CHARLES-10</option>
      </select>
    </div>
    <div class="my-3">
      <label for="staging">LEVEL 2 STAGING AREA:</label>
      <input type="text" name="staging" />
    </div>
    <div>
      <label for="radio2">LEVEL 2 STAGING CHANNEL:</label>
      <select name="radio2">
        <option>C1 CHARLES-1</option>
        <option>C2 CHARLES-2</option>
        <option>C3 CHARLES-3</option>
        <option>C4 CHARLES-4</option>
        <option>C5 CHARLES-5</option>
        <option>C6 CHARLES-6</option>
        <option>C7 CHARLES-7 MA</option>
        <option>C8 CHARLES-8</option>
        <option>C9 CHARLES-9</option>
        <option>C10 CHARLES-10</option>
      </select>
    </div>
    <div class="my-3">
      <button class="btn btn-danger">MAYDAY</button>
    </div>
    <div>
      <button class="btn btn-danger">EMERGENCY</button>
    </div>
  </div>
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
</style>