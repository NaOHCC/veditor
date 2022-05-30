<template>
  <div v-if="props.article !== null" class="flex justify-end">
    <div class="flex">
      <img class="w-10 h-10 rounded-lg" :src="article.author.image" />
      <div>
        <p>{{ article.author.username }}</p>
        <p>最后更新：{{ timeFormat(article.updatedAt) }}</p>
      </div>
    </div>
    <div v-if="isLogin">
      <button class="btn" @click="updateArticle">更新文章</button>
      <button class="btn" @click="deleteArticle">删除</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, toRefs } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../store";
import { timeFormat } from "../utils";
import { Article } from "../utils/article";

const props = defineProps<{ article: Article }>();
const router = useRouter();
const { article } = toRefs(props);

const userStore = useUserStore();

const isLogin = computed(() => {
  return userStore.token.value !== "";
});

const updateArticle = () => {
  router.push({ name: "edit-article", params: { slug: article.value.slug } });
};
const deleteArticle = () => {};
</script>
