import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import { ViteAliases } from 'vite-aliases';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Pages({
      nuxtStyle: true,
    }),
    ViteAliases({
      useConfig: true,
      useRelativePaths: true,
      useTypescript: true,
    }),
  ],
});
