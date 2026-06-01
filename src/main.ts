import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ContactButton from "@/components/ContactButton.vue";
import SimpleCarousel from "@/components/SimpleCarousel.vue";

const app = createApp(App);

app.use(router)

app.component("ContactButton", ContactButton);
app.component("SimpleCarousel", SimpleCarousel);

app.mount("#app");
