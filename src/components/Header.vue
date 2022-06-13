<template>
  <div class="flex items-center justify-between">
    <div>
      <el-icon><EditPen /></el-icon><span>VEditor</span>
    </div>
    <div class="flex items-center justify-between">
      <router-link to="/" class="px-3"
        ><el-icon><HomeFilled /></el-icon><span>Home</span></router-link
      >
      <router-link
        :to="{ name: 'create-article' }"
        class="btn btn-outline btn-success"
      >
        <el-icon><Edit /></el-icon>
        <span>写作</span></router-link
      >
      <div v-if="isLogin" class="px-3">
        <el-dropdown>
          <img class="w-10 h-10 rounded-lg" :src="userStore.user.image" />
          <template #dropdown>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item @click="logout">退出</el-dropdown-item>
          </template>
        </el-dropdown>
      </div>
      <div v-else>
        <router-link to="/service"
          ><span class="btn">登录/注册</span></router-link
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../store";

const userStore = useUserStore();
const router = useRouter();
const isLogin = computed(() => {
  return userStore.token.value !== "";
});

const logout = () => {
  localStorage.clear();
  userStore.$reset();
  router.replace("/");
};
</script>
