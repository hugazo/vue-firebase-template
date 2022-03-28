<template lang="pug">
n-layout-header(
  bordered
  position="static"
)
  n-page-header(title="42 Devs")
    n-menu(mode="horizontal" :options="parsedRoutes")
    template(#extra)
      n-space
        n-button(@click="auth.logout" v-if="user")
          | Logout {{ user.displayName }}
        Theme-Selector
</template>

<script setup lang="ts">
import useRoutes from '@composables/routes';
import authStore from '@store/auth';
import { RouterLink } from 'vue-router';

const navbarRoutes = useRoutes();

const auth = authStore();
const user = auth.getUser;

const menuLabel = (name: string, navbarName: string) => {
  const props = {
    to: {
      name,
    },
  };
  return h(RouterLink, props, {
    default: () => navbarName,
  });
};


const parsedRoutes = navbarRoutes.map((route) => {
  const label = menuLabel(route.name as string, route.meta.navbarName);
  return {
    key: route.meta.navbarName,
    label: () => label,
  };
});
</script>
