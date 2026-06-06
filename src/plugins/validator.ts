import { App } from "vue";
import validator from "validator";

export default {
    install(app: App) {
        app.provide("validator", validator);
    },
};