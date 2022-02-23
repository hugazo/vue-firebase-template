import { useRouter } from 'vue-router';

export default () => {
  const router = useRouter();

  const routes = router.getRoutes();
  return routes;
};
