import basicConfig, { file, pkg } from "./rollup.config";

export default {
  ...basicConfig,
  output: {
    name: pkg.name,
    file: file("esm"),
    format: "es",
  },
};
