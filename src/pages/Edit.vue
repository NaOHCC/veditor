<template>
  <Header></Header>
  <div class="w-3/4 mx-auto">
    <div>
      <el-input v-model="form.title"></el-input>
      <el-input v-model="form.description" class="my-8"></el-input>
      <el-input
        type="textarea"
        v-model="form.body"
        :autosize="{ minRows: 10 }"
      ></el-input>
    </div>
    <div class="flex justify-end my-8">
      <button
        class="btn"
        @click="submit"
        :disabled="!(form.title && form.description && form.body)"
      >
        发布
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, onBeforeMount, reactive, watchEffect } from "vue";
import { useRoute } from "vue-router";
import Header from "../components/Header.vue";
import { Article, getArticle } from "../utils/article";

interface Form {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

const route = useRoute();
const slug = computed<string>(() => route.params.slug as string);

const form: Form = reactive({
  title: "",
  description: "",
  body: "",
  tagList: [],
});

onBeforeMount(async () => {
  if (slug.value) {
    const res = await getArticle(slug.value);
    form.body = res.body;
    form.description = res.description;
    form.tagList = res.tagList;
    form.title = res.title;
  }
});
const submit = () => {};
</script>
