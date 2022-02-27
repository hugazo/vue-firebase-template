<template lang="pug">
n-layout-header(
  bordered
  position="static"
)
  n-page-header
    n-breadcrumb
      template(v-for="route in routes")
        router-link(:to="{ name: route.name }" custom v-slot="{navigate, href, route}")
          n-breadcrumb-item(@click="navigate" :href="href") {{ route.meta.navbarName }}
    template(#title)
      router-link.title(:to="{ name: 'home-page' }")
        | 42devs
    template(#extra)
      n-space
        n-button(@click="auth.logout")
          | Logout {{ user.displayName }}
</template>

<script setup lang="ts">
import allRoutes from '@composables/routes';
import authStore from '@store/auth';

const routes = allRoutes().filter((r) => r.meta.navbarDisplay && r.meta.navbarName);

const auth = authStore();

const user = auth.getUser;
</script>

<style scoped>
.title {
  text-decoration: none;
  color: inherit;
}
</style>
