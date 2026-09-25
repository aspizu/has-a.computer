import {defineConfig} from "oxfmt"

export default defineConfig({
  semi: false,
  bracketSpacing: false,
  printWidth: 100,
  ignorePatterns: ["packages/www/src/routeTree.gen.ts"],
})
