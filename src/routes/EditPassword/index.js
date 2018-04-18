import {dynamicWrapper, createRoute} from '@/utils/core';

const routesConfig = (app) => ({
    path: '/pump/web/revise',
    title: '修改密码',
    component: dynamicWrapper(app, [import('./model')], import('./components'))
});

export default (app) => createRoute(app, routesConfig);
