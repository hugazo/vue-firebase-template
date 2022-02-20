/* eslint-disable no-console */

import { RouteLocation } from 'vue-router';

import authStore from '@store/auth';

const authGuard = (
  to: RouteLocation,
) => {
  const auth = authStore();
  if (to.meta.requiresAuth && !auth.logged) {
    return { name: 'sign-in' };
  }
  return true;
};

export default authGuard;
