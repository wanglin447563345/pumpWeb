import {dynamicWrapper, createRoute} from '@/utils/core';

const routesConfig = (app) => ({
    path: '/pump/web/control/add2',
    title: '添加2',
    component: dynamicWrapper(app, [import('./model')], import('./components'))
});

export default (app) => createRoute(app, routesConfig);
