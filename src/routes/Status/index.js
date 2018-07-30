import {dynamicWrapper, createRoute} from '@/utils/core';

const routesConfig = (app) => ({
    path: '/pump/detail/status',
    title: '控制器状态',
    component: dynamicWrapper(app, [import('./model')], ()=>import('./components'))
});

export default (app) => createRoute(app, routesConfig);
