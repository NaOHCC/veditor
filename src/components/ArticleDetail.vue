<template>
  <h1 class="text-center text-3xl">{{ article?.title }}</h1>

  <ArticleMeta v-if="article !== undefined" :article="article"></ArticleMeta>
  <div class="w-3/4 mx-auto" v-html="article?.body"></div>
</template>
<script lang="ts" setup>
import { onBeforeMount, onMounted, reactive, Ref, ref } from "vue";
import { useRoute } from "vue-router";
import { Article, getArticle, useArticle } from "../utils/article";
import ArticleMeta from "./ArticleMeta.vue";

const route = useRoute();
const slug = route.params.slug as string;
const article = ref<Article>();
onMounted(async () => {
  const res = await getArticle(slug);
  article.value = res;
});
</script>
