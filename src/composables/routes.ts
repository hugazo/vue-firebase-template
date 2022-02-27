import { useRouter, RouteRecordNormalized } from 'vue-router';

export default (): RouteRecordNormalized[] => {
  const router = useRouter();

  const routes = router.getRoutes();
  return routes;
};
