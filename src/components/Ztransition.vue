<template>
  <Transition
      appear
      :name="transitionName">
    <slot></slot> <!-- 向内传递插槽内容 -->
  </Transition>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  direction: {
    type: String,
    required: true
  }
})
const transitionName = computed<string>(() => {
  if (props.direction === "left") return "left-transition";
  else return "right-transition";
})
</script>

<style scoped lang="scss">
//左侧
.left-transition-enter-active {
  animation: left-in 1s;
}

.left-transition-leave-from {
  display: none;
}


//右侧
.right-transition-enter-active {
  animation: right-in 1s;
}

.right-transition-leave-from {
  display: none;
}
.right-transition-leave-active {
  display: none;
}
.right-transition-leave-to {
  display: none;
}
/*.right-transition-leave-active {
  position: absolute;
  animation: right-in 1s reverse;
}*/


@keyframes left-in {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes right-in {
  0% {
    transform: translateX(30px);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
