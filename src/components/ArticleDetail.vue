<template>
  <h1 class="text-center text-3xl">{{ article?.title }}</h1>

  <ArticleMeta v-if="article !== null" :article="article"></ArticleMeta>
  <div class="w-3/4 flex justify-center">
    <div v-html="article?.body"></div>
  </div>
</template>
<script lang="ts" setup>
import { onBeforeMount, reactive, Ref, ref } from "vue";
import { useRoute } from "vue-router";
import { Article, useArticle } from "../utils/article";
import ArticleMeta from "./ArticleMeta.vue";

const route = useRoute();
const slug = route.params.slug as string;
const article = useArticle(slug);
</script>
