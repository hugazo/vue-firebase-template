
import { useRouter, RouteRecordNormalized } from 'vue-router';

interface RouteNavigation extends RouteRecordNormalized {
  meta: {
    requireAuth?: boolean,
    navbarDisplay: boolean,
    navbarName: string,
  }
}

export default (): RouteNavigation[] => {
  const router = useRouter();

  const routes = router.getRoutes() as RouteNavigation[];

  const navbarRoutes: RouteNavigation[] = routes.filter((r) => {
    const value = r.meta.navbarDisplay && r.meta.navbarName;
    return value;
  });

  return navbarRoutes;
};
