import typescript from "rollup-plugin-typescript2";
import vuePlugin from "rollup-plugin-vue";
import css from "rollup-plugin-css-only";
import { nodeResolve } from "@rollup/plugin-node-resolve";

import pkg from "../package.json";
const file = (type) => `dist/${pkg.name}.${type}.js`;

export { file, pkg };

const override = {
  compilerOptions: { declaration: true },
  exclude: ["src/main.ts"],
};

export default {
  input: "src/index.ts",
  output: {
    name: pkg.name,
    file: file("esm"),
    format: "es",
  },
  plugins: [
    nodeResolve(),
    typescript({ tsconfigOverride: override }),
    vuePlugin(),
    css({ output: "bundle.css" }),
  ],
  external: ["vue", "lodash-es"],
};
