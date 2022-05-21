import { instance } from ".";

/**
 * @property {string} slug url短标签
 */
export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  body: string;
  taglList: string[];
  author: object;
}

export const getAllArticles = async () => {
  const res = await instance.get<{
    articles: Article[];
    articlesCount: number;
  }>("/articles");
  return res.data;
};
