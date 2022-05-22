<template>
  <div class="box">
    <LeftPart class="left"></LeftPart>
    <RightPart></RightPart>
  </div>
</template>

<script setup lang="ts">
import LeftPart from "./components/LeftPart.vue";
import RightPart from "./components/RightPart.vue";
</script>

<style scoped lang="scss">
.box {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
}

@media screen and (max-width: 750px) {
  .left {
    display: none;
  }
  .box {
    max-width: 100vw;
    //padding-bottom: 60vh;
    background-color: #409eff;
  }
}
</style>
