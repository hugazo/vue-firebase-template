<template lang="pug">
q-card.q-pa-lg.shadow-1
  q-tabs(v-model="tab")
    q-tab(label="Login" name="login")
    q-tab(label="Sign-in" name="signin")
  q-separator
  q-tab-panels(v-model="tab")
    q-tab-panel.q-gutter-y-md(name="login")
      .row
        email-login
      .row
        social-login
      .row.justify-center
        .column
          .row
            p Select Your Theme:
          .row
            theme-selector
    q-tab-panel(name="signin")
      p Signin Page
//- div
//-   n-card(
//-     title="Welcome"
//-     header-style="text-align: center;"
//-     )
//-     email-login
//-     social-login
//-     n-space(justify="center")
//-       n-text Select Your Theme:
//-     n-space(justify="center")
//-       //- theme-selector
</template>

<script lang="ts">
export default {
  name: 'auth-index',
  setup() {
    const tab = ref('login');
    return {
      tab,
    };
  },
};
</script>
