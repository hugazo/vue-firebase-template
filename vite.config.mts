import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import { ViteAliases } from 'vite-aliases';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';
import { QuasarResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import { VitePWA } from 'vite-plugin-pwa';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';

export default defineConfig({
  envPrefix: [
    'FIREBASE_',
  ],
  plugins: [
    Vue({
      template: {
        transformAssetUrls,
      },
    }),
    quasar({
      autoImportComponentCase: 'kebab',
      sassVariables: fileURLToPath(new URL('./src/quasar-variables.sass', import.meta.url)),
    }),
    Pages({
      nuxtStyle: true,
    }),
    Layouts(),
    ViteAliases({
      prefix: '@',
      useConfig: true,
      dts: true,
    }),
    Components({
      resolvers: [
        IconsResolver({
          prefix: false,
          enabledCollections: [
            'tabler',
          ],
        }),
        QuasarResolver(),
      ],
      dts: true,
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        '@vueuse/head',
        '@vueuse/core',
      ],
      eslintrc: {
        enabled: true,
      },
    }),
    Icons({
      compiler: 'vue3',
    }),
    VitePWA(),
  ],
});
