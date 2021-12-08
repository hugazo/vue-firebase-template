import authStore from '@store/auth';

export default (
  shouldBeAuthenticated: boolean,
  namedRoute: string,
) => {
  const auth = authStore();
  const { logged } = toRefs(auth);

  const { push } = useRouter();

  const checkAuth = (
    authValue: boolean,
  ) => {
    if (authValue !== shouldBeAuthenticated) {
      push({ name: namedRoute });
    }
  };

  watch(logged, () => {
    checkAuth(logged.value);
  }, {
    immediate: true,
  });
};
