import { createApp } from "kdu";
import "./style.css";
import App from "./App.kdu";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
