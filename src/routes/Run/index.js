import {dynamicWrapper, createRoute} from '@/utils/core';

const routesConfig = (app) => ({
    path: '/pump/detail/run',
    title: '历史运行记录',
    component: dynamicWrapper(app, [import('./model')], ()=>import('./components'))
});

export default (app) => createRoute(app, routesConfig);
