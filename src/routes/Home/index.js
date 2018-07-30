import {dynamicWrapper, createRoute} from '@/utils/core';

const routesConfig = (app) => ({
  path: '/pump/web/home',
  title: '首页',
  component: dynamicWrapper(app, [import('./model')], ()=>import('./components'))
});

export default (app) => createRoute(app, routesConfig);
