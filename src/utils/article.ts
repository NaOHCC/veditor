import { instance } from ".";
import { Profile } from "./user";
import { Ref, ref } from "vue";
/**
 * @property {string} slug url短标签
 */
export interface Article {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  description: string;
  author: Profile;
  favorited: boolean;
  favoritesCount: number;
}

export const getAllArticles = async (offset?: number) => {
  const res = await instance.get<{
    articles: Article[];
    articlesCount: number;
  }>("/articles", {
    params: {
      offset: offset,
    },
  });
  return res.data;
};

export const getArticle = async (slug: string) => {
  const res = await instance.get(`/articles/${slug}`);
  console.log("文章详情", res.data);
  return res.data.article as Article;
};

// Hook方案
export const useArticle = (slug: string) => {
  const article: Ref<Article | null> = ref(null);
  getArticle(slug).then((res) => {
    article.value = res;
  });
  return article;
};
