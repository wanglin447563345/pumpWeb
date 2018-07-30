import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = (app) => ({
  path: '/pump/user/login',
  title: '用户登录',
  component: dynamicWrapper(app, [import('./model')], ()=>import('./components')),
});

export default (app) => createRoute(app, routesConfig);
