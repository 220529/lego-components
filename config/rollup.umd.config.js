import basicConfig, { file, pkg } from "./rollup.config";

export default {
  ...basicConfig,
  output: {
    name: pkg.name,
    file: file("umd"),
    format: "umd",
    globals: {
      vue: "Vue",
      "lodash-es": "_",
    },
    exports: "named",
  },
};
