import { App } from "vue";

import LTag from "./components/LTag";

const components = [LTag];

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export { LTag, install };
export default {
  install,
};
