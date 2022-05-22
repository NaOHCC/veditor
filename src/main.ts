import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./route";
import "element-plus/dist/index.css";
import "./assets/style/initialize.scss";
import "./assets/style/rem.scss";
const app = createApp(App);
app.use(createPinia());
app.use(router);

app.mount("#app");
