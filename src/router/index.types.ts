import type { AppLayoutsEnum } from 'layouts/layouts.types';

declare module 'vue-router' {
  interface RouteMeta {
    layout?: AppLayoutsEnum;
  }
}

export enum RouteNamesEnum {
  home = 'home',
  notFound = 'not-found',
}
