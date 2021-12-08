import authStore from '@/store/auth';

export default () => {
  const store = authStore();
  store.init();
  return {
    store,
  };
};
