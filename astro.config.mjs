import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  redirects: {
    // "/work": "/work/cityblock",
  },
  output: "static",
  adapter: vercel({ analytics: true }),
  vite: {
    // define: {
    //   "import.meta.env.PUBLIC_VERCEL_ANALYTICS_ID": JSON.stringify(
    //     process.env.VERCEL_ANALYTICS_ID
    //   ),
    // },
    optimizeDeps: {
      exclude: ["fsevents"],
    },
    // Fix a build error
    // See https://github.com/withastro/astro/issues/3174
    ssr: {
      noExternal: ["yarn-bound"],
    },
  },
});
