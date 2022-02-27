<template lang="pug">
n-layout-header(
  bordered
  position="static"
)
  n-page-header
    n-menu(mode="horizontal" :options="parsedRoutes")
    template(#title)
      router-link.title(:to="{ name: 'home-page' }")
        | 42devs
    template(#extra)
      n-space
        n-button(@click="auth.logout" v-if="user")
          | Logout {{ user.displayName }}
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

<style scoped>
.title {
  text-decoration: none;
  color: inherit;
}
</style>
