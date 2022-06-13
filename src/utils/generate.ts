// import axios from "axios";
import { instance } from ".";
export const generateTitle = async (content: string) => {
  const res = await instance.post(
    `/api/generate_title`,
    {
      content: content,
    },
    {
      timeout: 60000,
      baseURL: "http://localhost:9007",
    }
  );
  console.log("生成标题", res.data);
  return (res.data.title as string).replaceAll(" ", "");
};

export const generateSummary = async (content: string, count = 1) => {
  const res = await instance.post(
    `/api/generate_summary`,
    {
      content: content,
      count: count,
    },
    {
      timeout: 20000,
      baseURL: "http://localhost:9007",
    }
  );
  console.log("生成摘要", res.data);
  return res.data.summary as string[];
};
