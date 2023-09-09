import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
			  @import '$routes/styles.scss'
			`,
      },
    },
  },
  plugins: [sveltekit()],
});
