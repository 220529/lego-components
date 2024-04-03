import { App } from "vue";
import LTag from "./LTag.vue";
LTag.install = (app: App) => {
  app.component(LTag.name, LTag);
};

export default LTag;
