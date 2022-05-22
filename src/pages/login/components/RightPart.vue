<template>
  <div class="right">
    <div class="middle-box">
      <router-view v-slot="{ Component }">
        <Ztransition direction="right">
          <keep-alive>
            <component :is="Component"></component>
          </keep-alive>
        </Ztransition>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Ztransition from "../../../components/Ztransition.vue";
</script>

<style scoped lang="scss">
.right {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: 100vh;
  overflow: hidden;
}
@media screen and (max-width: 750px) {
  .right {
    width: 100vw;
    .middle-box {
      width: 50vw;
      min-width: 300px;
      padding: 20px;
      border-radius: 10px;
      background-color: #fff;
    }
  }
}
.middle-box {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
