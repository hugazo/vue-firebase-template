import authStore from '@store/auth';

/**
 * Establishes a guard on the component called
 *
 * @remarks
 * This hook is meant to be used in a route component and it works with the store
 * provided by the useauth hook and redirects to the named route.
 *
 * @param shouldBeAuthenticated - If the user should be authenticated on the current component
 * @param namedRoute - Name of the route that the redirect should occur
 */
const useAuthGuard = (
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

export default useAuthGuard;
