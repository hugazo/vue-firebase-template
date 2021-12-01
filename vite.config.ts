import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import { ViteAliases } from 'vite-aliases';

export default defineConfig({
  plugins: [
    Vue(),
    Pages({
      nuxtStyle: true,
    }),
    Layouts(),
    ViteAliases({
      useConfig: true,
      useRelativePaths: true,
      useTypescript: true,
    }),
  ],
});
