import { createFetch } from "@vueuse/core";
import axios from "axios";
import { API_URL } from "../config/config";

export const instance = axios.create({ baseURL: API_URL });
