<template>
  <Header></Header>
  <Suspense>
    <template #default>
      <ArticleDetail></ArticleDetail>
    </template>
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>
</template>
<script lang="ts" setup>
import ArticleDetail from "../components/ArticleDetail.vue";
import Header from "../components/Header.vue";
</script>
