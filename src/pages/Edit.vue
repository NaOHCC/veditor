<template>
  <Header></Header>
  <div class="w-3/4 mx-auto">
    <div>
      <el-input v-model="form.title"></el-input>
      <div>
        <span class="btn" @click="_generateTitle">生成标题</span>
        <span>{{ title }}</span>
      </div>
      <el-input v-model="form.description"></el-input>
      <div>
        <p class="btn" @click="_generateSummary">生成摘要</p>
        <span>{{ summary }}</span>
      </div>
      <MainEditor :content="form.body" ref="mainContent"></MainEditor>
    </div>
    <div class="flex justify-end my-8">
      <button
        class="btn"
        @click="submit"
        :disabled="form.title === '' || form.description === ''"
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
import {
  Article,
  createArticle,
  getArticle,
  updateArticle,
} from "../utils/article";
import MainEditor from "../components/MainEditor.vue";
import { ElMessage } from "element-plus";
import { generateSummary, generateTitle } from "../utils/generate";

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

const submit = async () => {
  form.body = (mainContent.value as any)?.valueHtml;
  if (route.path.includes("create")) {
    try {
      const res = await createArticle(form);
      ElMessage.success({
        message: "发布成功！",
        duration: 1500,
      });
    } catch (e) {
      console.log("发布失败", e);
      ElMessage.error({
        message: "发布失败！",
        duration: 1500,
      });
    }
  } else {
    try {
      const res = await updateArticle(slug.value, form);
      router.back();
      ElMessage.success({
        message: "修改成功！",
        duration: 1500,
      });
    } catch (e) {
      console.log("修改失败", e);
      ElMessage.error({
        message: "修改失败！",
        duration: 1500,
      });
    }
  }
};

const title = ref("");
const summary = ref("");

const _generateTitle = async () => {
  const content = (mainContent.value as any)?.getContent();
  title.value = await generateTitle(content);
};

const _generateSummary = async () => {
  const content = (mainContent.value as any)?.getContent();
  summary.value = (await generateSummary(content))[0];
};
</script>
