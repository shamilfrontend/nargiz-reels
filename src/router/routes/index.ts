import type { RouteComponent, RouteRecordRaw } from 'vue-router';

import { RouteName } from '../../constants';

import HomePage from '../../pages/home';

const NotFoundPage = (): Promise<RouteComponent> =>
  import(/* webpackChunkName: "not-found-page" */ '../../pages/not-found');

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RouteName.HOME,
    component: HomePage
  },
  {
    name: RouteName.NOT_FOUND,
    path: '/:pathMatch(.*)*',
    props: true,
    component: NotFoundPage
  },
];
