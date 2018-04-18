import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = (app) => ({
    path: '/pump/user/reset',
    title: '重置密码',
    component: dynamicWrapper(app, [import('./model')], import('./components')),
});

export default (app) => createRoute(app, routesConfig);
