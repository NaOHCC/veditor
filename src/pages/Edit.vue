<template>
  <Header></Header>
  <div class="w-3/4 mx-auto">
    <div>
      <el-input v-model="form.title"></el-input>
      <p class="btn">生成标题</p>
      <el-input v-model="form.description"></el-input>
      <p class="btn">生成摘要</p>
      <MainEditor :content="form.body" ref="mainContent"></MainEditor>
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
import { computed, onBeforeMount, reactive, ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import Header from "../components/Header.vue";
import { Article, getArticle, updateArticle } from "../utils/article";
import MainEditor from "../components/MainEditor.vue";
import { ElMessage } from "element-plus";

interface Form {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

const route = useRoute();
const router = useRouter();
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
    // form.body = "<p>hello <strong>world</strong></p>";
    form.description = res.description;
    form.tagList = res.tagList;
    form.title = res.title;
  }
});

const mainContent = ref(null);

const submit = () => {
  form.body = (mainContent.value as any)?.valueHtml;

  try {
    const res = updateArticle(slug.value, form);
    router.back();
    ElMessage.success({
      message: "修改成功！",
      duration: 1500,
    });
  } catch (e) {
    console.log("修改失败", e);
    ElMessage.success({
      message: "修改失败！",
      duration: 1500,
    });
  }
};
</script>
