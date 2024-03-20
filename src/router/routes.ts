import { SessionStorage } from 'quasar';
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'index',
        path: '',
        component: () => import('pages/IndexPage.vue'),
        meta: { title: 'Index' },
      },
    ],
    beforeEnter: (to, from, next) => {
      if (!SessionStorage.has('loggedUser') && to.name !== 'login') {
        return next({ name: 'login' });
      }
      return next();
    },
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('pages/AuthPage.vue'),
  },
  {
    name: 'list',
    path: '/list',
    component: () => import('pages/ListPage.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
