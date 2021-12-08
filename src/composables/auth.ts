import authStore from '@/store/auth';

/**
 * Exports a hook that inits the store
 *
 * @return Auth store instance
 */
export default () => {
  const store = authStore();
  store.init();
  return {
    store,
  };
};
