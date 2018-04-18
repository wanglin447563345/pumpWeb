import {dynamicWrapper, createRoute} from '@/utils/core';

const routesConfig = (app) => ({
    path: '/pump/web/control/list',
    title: '列表',
    component: dynamicWrapper(app, [import('./model')], import('./components'))
});

export default (app) => createRoute(app, routesConfig);
