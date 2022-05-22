<template>
  <div class="outer">
    <div class="item" style="font-size: 24px; font-weight: bold">登录</div>
    <div class="item">
      <el-input v-model="email" placeholder="邮箱" />
    </div>
    <div class="item">
      <el-input
        v-model="password"
        placeholder="密码"
        show-password
        type="password"
      />
    </div>
    <div class="item" style="display: flex; justify-content: space-between">
      <span
        ><input
          style="margin-right: 5px; height: 16px; width: 16px"
          type="checkbox"
        />记住我</span
      >
    </div>
    <div class="item">
      <button class="btn" @click="login">登录</button>
    </div>
    <div class="item">
      <router-link :to="{ name: 'register' }">
        <div class="btn">注册</div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus";
import { ref } from "vue";

import { useRouter } from "vue-router";
import { useUserStore } from "../../../store";
import { fetchLogin } from "../../../utils/user";
let email = ref<string>("user0@mail.com");
let password = ref<string>("123456");
const userStore = useUserStore();
const router = useRouter();

const login = async () => {
  if (email.value === "" || password.value === "") {
    ElMessage.error("有未填项");
  } else {
    try {
      const res = await fetchLogin({
        email: email.value,
        password: password.value,
      });
      ElMessage({
        message: "登录成功，即将跳转",
        type: "success",
      });
      console.log(res);

      userStore.setToken(res.token);
      userStore.setUserInfo(res);
      router.push("/");
    } catch (e: any) {
      console.log(e);
      ElMessage.error(e.message);
    }
  }
};
</script>

<style scoped>
.outer .item {
  margin-bottom: 12px;
}

.outer {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
