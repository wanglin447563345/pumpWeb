import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = (app) => ({
    path: '/pump/user/register',
    title: '用户注册',
    component: dynamicWrapper(app, [import('./model')], import('./components')),
});

export default (app) => createRoute(app, routesConfig);
