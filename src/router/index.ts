import { createRouter, createWebHistory } from 'vue-router';
import { RouteNamesEnum } from 'router/index.types';
import { AppLayoutsEnum } from 'layouts/layouts.types';
import { loadLayoutMiddleware } from 'router/middleware/load-layout.middleware';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: RouteNamesEnum.home,
      component: () => import('pages/HomePage.vue'),
      meta: {
        layout: AppLayoutsEnum.default,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: RouteNamesEnum.notFound,
      component: () => import('pages/NotFoundPage.vue'),
      meta: {
        layout: AppLayoutsEnum.error,
      },
    },
  ],
});

router.beforeEach(loadLayoutMiddleware);

export default router;
