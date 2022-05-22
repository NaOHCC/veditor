import { createFetch } from "@vueuse/core";
import axios from "axios";
import moment from "moment";
import { API_URL } from "../config/config";
import { useUserStore } from "../store";

export const instance = axios.create({ baseURL: API_URL });

instance.interceptors.request.use((config) => {
  const userStore = useUserStore();
  const token = userStore.token.value;
  if (token !== "") {
    config.headers!.Authorization = "Token " + token;
  }
  return config;
});

export const timeFormat = (time: string) => {
  return moment(time).format("YYYY/MM/DD HH:mm");
};
