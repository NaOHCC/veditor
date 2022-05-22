<template>
  <Header />
  <suspense> <article-list></article-list></suspense>
</template>
<script lang="ts" setup>
import ArticleList from "../components/ArticleList.vue";
import Header from "../components/Header.vue";
</script>
