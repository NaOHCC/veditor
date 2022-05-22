<template>
  <div class="flex items-center justify-between">
    <span>VEditor</span>
    <div class="flex">
      <router-link to="/"><span>Home</span></router-link>
      <router-link :to="{ name: 'create-article' }"
        ><span class="btn">写作</span></router-link
      >
      <div v-if="isLogin">
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
