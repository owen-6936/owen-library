import { defaultExclude, defineConfig } from "vitest/config";
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    exclude: [
      ...defaultExclude,
      "tests/core/media/**",
      "tests/core/state/**",
      "tests/core/utils/**",
      "tests/server/**",
      "tests/services/**",
      "tests/ui/**",
    ],
    include: ["tests/core/*.test.tsx", "tests/core/*.test.ts"],
  },
});
