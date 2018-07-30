import {dynamicWrapper, createRoute} from '@/utils/core';

const routesConfig = (app) => ({
  path: '/pump/web/userInfo',
  title: '用户信息',
  component: dynamicWrapper(app, [import('./model')], ()=>import('./components'))
});

export default (app) => createRoute(app, routesConfig);
