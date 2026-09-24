import {defineConfig} from "oxlint"

export default defineConfig({
  ignorePatterns: ["**/worker-configuration.d.ts"],
  plugins: ["typescript", "unicorn", "oxc", "react"],
  categories: {
    correctness: "error",
  },
  rules: {},
  env: {
    builtin: true,
  },
  options: {
    typeAware: true,
    typeCheck: true,
  },
})
