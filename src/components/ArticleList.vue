<template>
  <div class="mx-auto w-1/2">
    <div class="">
      <div
        v-for="(item, index) in articles"
        :key="index"
        class="mb-10 card bg-base-100 shadow-xl"
      >
        <div class="flex ml-5">
          <img class="w-10 h-10 rounded mr-4" :src="item.author.image" />
          <div class="">
            <div>{{ item.author.username }}</div>
            <div>{{ timeFormat(item.createdAt) }}</div>
          </div>
        </div>
        <div class="card-body">
          <router-link :to="'/article/' + item.slug"
            ><p class="card-title">{{ item.title }}</p></router-link
          >
          <p class="text-gray-600">{{ item.description }}</p>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <el-pagination
      class="flex justify-center"
      background
      layout="prev, pager, next"
      :page-size="20"
      :total="articlesCount"
      :hide-on-single-page="true"
      @current-change="getPage"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, onMounted, reactive, ref, toRefs } from "vue";
import { Article, getAllArticles } from "../utils/article";
import { timeFormat } from "../utils/index";
const articles = ref<Article[]>([]);
const articlesCount = ref(0);
onBeforeMount(async () => {
  const data = await getAllArticles();
  articles.value = data.articles;
  articlesCount.value = data.articlesCount;
});

const getPage = async (page: number) => {
  const count = 20 * page;
  const _page = count > articlesCount.value ? articlesCount.value - 20 : count;
  const data = await getAllArticles(_page);
  articles.value = data.articles;
  console.log(articles.value.length);
};
</script>
