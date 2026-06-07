import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ContactButton from "@/components/ContactButton.vue";
import SimpleCarousel from "@/components/SimpleCarousel.vue";
import ExploreCATAButton from "@/components/ExploreCATAButton.vue";
import KnowMore from "@/components/KnowMore.vue";
import FlipCard from "@/components/FlipCard.vue";
import validator from "@/plugins/validator.ts";

const app = createApp(App);

app.use(router)
app.use(validator);

app.component("ContactButton", ContactButton);
app.component("SimpleCarousel", SimpleCarousel);
app.component("ExploreCATAButton", ExploreCATAButton);
app.component("KnowMore", KnowMore);
app.component("FlipCard", FlipCard);

app.mount("#app");
