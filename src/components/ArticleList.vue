<template>
  <div v-for="(item, index) in articles" :key="index">
    <p>{{ item.title }}</p>
  </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, onMounted, reactive, ref, toRefs } from "vue";
import { getAllArticles } from "../utils/article";
const { articles, articlesCount } = toRefs(await getAllArticles());
</script>
