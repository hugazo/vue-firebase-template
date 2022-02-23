<template lang="pug">
n-layout-header(
  bordered
  position="static"
)
  n-page-header
    n-breadcrumb
      template(v-for="route in navigationRoutes")
        router-link(:to="{ name: route.name }" custom v-slot="{navigate, href, route}")
          n-breadcrumb-item(@click="navigate" :href="href") {{ route.name }}
    template(#title)
      router-link(:to="{ name: 'home-page' }")
        | 42devs
    template(#extra)
      n-space
        n-button(@click="auth.logout")
          | Logout
</template>

<script setup>
import routes from '@composables/routes';
import authStore from '@store/auth';

const navigationRoutes = routes().filter((route) => route.meta.navbarDisplay);

const auth = authStore();

const user = auth.getUser;
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>
